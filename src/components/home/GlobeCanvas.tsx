'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// three-globe is loaded dynamically inside useEffect (browser-only)
// Install: npm install three-globe

// Arc data — Nigeria hub cities to global destinations
const ARC_DATA = [
  // [startLat, startLng, endLat, endLng]
  { startLat:  6.5244, startLng:  3.3792, endLat:  5.5602, endLng: -0.1969  }, // Lagos → Accra
  { startLat:  9.0579, startLng:  7.4951, endLat:  3.8480, endLng: 11.5021  }, // Abuja → Yaoundé
  { startLat:  6.5244, startLng:  3.3792, endLat: 51.5074, endLng: -0.1278  }, // Lagos → London
  { startLat:  9.0579, startLng:  7.4951, endLat: 40.7128, endLng:-74.0060  }, // Abuja → New York
  { startLat:  4.8156, startLng:  7.0498, endLat: 25.2048, endLng: 55.2708  }, // PH → Dubai
  { startLat: 12.0022, startLng:  8.5920, endLat: -1.2921, endLng: 36.8219  }, // Kano → Nairobi
  { startLat:  6.5244, startLng:  3.3792, endLat: -33.9249,endLng: 18.4241  }, // Lagos → Cape Town
  { startLat:  9.0579, startLng:  7.4951, endLat:  1.3521, endLng:103.8198  }, // Abuja → Singapore
  { startLat:  6.3350, startLng:  5.6277, endLat: 48.8566, endLng:  2.3522  }, // Benin City → Paris
  { startLat:  7.3986, startLng:  3.9022, endLat:-23.5505, endLng:-46.6333  }, // Ibadan → São Paulo
]

// Nigerian city dots
const POINT_DATA = [
  { lat:  6.5244, lng:  3.3792, label: 'Lagos',         size: 0.7  },
  { lat:  9.0579, lng:  7.4951, label: 'Abuja',         size: 0.65 },
  { lat:  4.8156, lng:  7.0498, label: 'Port Harcourt', size: 0.55 },
  { lat: 12.0022, lng:  8.5920, label: 'Kano',          size: 0.5  },
  { lat:  6.3350, lng:  5.6277, label: 'Benin City',    size: 0.45 },
  { lat:  7.3986, lng:  3.9022, label: 'Ibadan',        size: 0.45 },
]

export function GlobeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    let frameId: number
    let globe: any
    let renderer: THREE.WebGLRenderer
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera

    // Dynamically import three-globe (browser-only)
    import('three-globe').then(({ default: ThreeGlobe }) => {
      // ── Renderer ──────────────────────────────────────────────────────────
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(el.clientWidth, el.clientHeight)
      renderer.setClearColor(0x000000, 0)
      el.appendChild(renderer.domElement)

      // ── Scene & Camera ─────────────────────────────────────────────────────
      scene  = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 1000)
      // Position camera so globe is centred in the right half
      // Globe radius is 100 units in three-globe
      camera.position.set(0, 0, 280)

      // ── Lighting ───────────────────────────────────────────────────────────
      const ambient = new THREE.AmbientLight(0xffffff, 1.2)
      scene.add(ambient)

      const directional = new THREE.DirectionalLight(0xffffff, 1.8)
      directional.position.set(200, 100, 200)
      scene.add(directional)

      // Fill light from opposite side
      const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.4)
      fillLight.position.set(-200, -50, -100)
      scene.add(fillLight)

      // ── Build globe ────────────────────────────────────────────────────────
      globe = new ThreeGlobe()
        // Real Earth textures from public NASA/naturalearthdata tiles
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        // Atmosphere
        .showAtmosphere(true)
        .atmosphereColor('#04bfbf')
        .atmosphereAltitude(0.18)
        // Arc connections — brand colours
        .arcsData(ARC_DATA)
        .arcColor(() => ['#04bfbf', '#1d4ed8'] as [string, string])
        .arcAltitude(0.25)
        .arcStroke(0.4)
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2800)
        // Nigerian city dots
        .pointsData(POINT_DATA)
        .pointColor(() => '#04bfbf')
        .pointAltitude(0.01)
        .pointRadius('size')
        .pointsMerge(false)

      scene.add(globe)

      // Offset globe to the right so only the right half is visible
      // The globe radius is 100; shift it right by ~50 units
      globe.position.x = 55

      // Start rotation so Nigeria faces the viewer
      // Nigeria: ~lon 8°E → rotate Y by (8/360) * 2PI clockwise
      globe.rotation.y = -(8 / 360) * Math.PI * 2

      // Slight tilt
      globe.rotation.x = 0.12

      // ── Auto-rotation + mouse drag ─────────────────────────────────────────
      let isDragging = false
      let prevX      = 0
      let prevY      = 0
      let rotVelX    = 0
      let rotVelY    = 0

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true
        prevX      = e.clientX
        prevY      = e.clientY
        rotVelX    = 0
        rotVelY    = 0
      }
      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return
        const dx = e.clientX - prevX
        const dy = e.clientY - prevY
        rotVelY   =  dx * 0.004
        rotVelX   =  dy * 0.004
        globe.rotation.y += rotVelY
        globe.rotation.x  = Math.max(-0.7, Math.min(0.7, globe.rotation.x + rotVelX))
        prevX     = e.clientX
        prevY     = e.clientY
      }
      const onMouseUp = () => { isDragging = false }

      const onTouchStart = (e: TouchEvent) => {
        isDragging = true
        prevX      = e.touches[0].clientX
        prevY      = e.touches[0].clientY
      }
      const onTouchMove = (e: TouchEvent) => {
        if (!isDragging) return
        const dx = e.touches[0].clientX - prevX
        const dy = e.touches[0].clientY - prevY
        rotVelY   =  dx * 0.004
        globe.rotation.y += rotVelY
        globe.rotation.x  = Math.max(-0.7, Math.min(0.7, globe.rotation.x + dy * 0.004))
        prevX     = e.touches[0].clientX
        prevY     = e.touches[0].clientY
      }
      const onTouchEnd = () => { isDragging = false }

      el.addEventListener('mousedown',  onMouseDown)
      window.addEventListener('mousemove',  onMouseMove)
      window.addEventListener('mouseup',    onMouseUp)
      el.addEventListener('touchstart', onTouchStart, { passive: true })
      window.addEventListener('touchmove',  onTouchMove,  { passive: true })
      window.addEventListener('touchend',   onTouchEnd)

      // ── Resize ─────────────────────────────────────────────────────────────
      const onResize = () => {
        camera.aspect = el.clientWidth / el.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(el.clientWidth, el.clientHeight)
      }
      window.addEventListener('resize', onResize)

      // ── Animation loop ─────────────────────────────────────────────────────
      const animate = () => {
        frameId = requestAnimationFrame(animate)

        // Auto-rotate when not dragging — slow and majestic
        if (!isDragging) {
          rotVelY *= 0.96   // momentum decay
          rotVelX *= 0.96
          globe.rotation.y += rotVelY + 0.0008
          globe.rotation.x  = Math.max(-0.7, Math.min(0.7, globe.rotation.x + rotVelX))
        }

        renderer.render(scene, camera)
      }

      animate()

      // Store cleanup refs
      ;(el as any).__cleanup = () => {
        cancelAnimationFrame(frameId)
        el.removeEventListener('mousedown',  onMouseDown)
        window.removeEventListener('mousemove',  onMouseMove)
        window.removeEventListener('mouseup',    onMouseUp)
        el.removeEventListener('touchstart', onTouchStart)
        window.removeEventListener('touchmove',  onTouchMove)
        window.removeEventListener('touchend',   onTouchEnd)
        window.removeEventListener('resize',     onResize)
        renderer.dispose()
        if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
      }
    })

    return () => {
      if ((el as any).__cleanup) (el as any).__cleanup()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      role="presentation"
      style={{ cursor: 'grab' }}
      onMouseDown={(e) => { e.currentTarget.style.cursor = 'grabbing' }}
      onMouseUp={(e)   => { e.currentTarget.style.cursor = 'grab' }}
    />
  )
}