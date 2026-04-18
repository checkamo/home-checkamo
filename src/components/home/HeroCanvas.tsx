'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ─── Tuning constants ────────────────────────────────────────────────────────
const NODE_COUNT        = 68
const CONNECTION_DIST   = 3.8      // max distance between connected nodes
const MOUSE_INFLUENCE   = 0.10     // how strongly mouse tilts the scene
const DRIFT_SPEED       = 0.10     // how fast nodes drift
const PULSE_SPEED       = 0.6      // glow pulse frequency
const CAMERA_Z          = 14

// Brand palette
const COLOR_TEAL  = new THREE.Color('#04bfbf')
const COLOR_OCEAN = new THREE.Color('#0388a6')
const COLOR_BLUE  = new THREE.Color('#1d4ed8')
const COLOR_DIM   = new THREE.Color('#d4e3ff')   // faint blue-white for distant nodes

// ─── Types ───────────────────────────────────────────────────────────────────
interface Node {
  position: THREE.Vector3
  velocity: THREE.Vector3
  phase: number       // for sine-based drift variation
  size: number
  colorIndex: number  // 0=teal, 1=ocean, 2=blue
  mesh: THREE.Mesh
}

export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // ── Scene & Camera ────────────────────────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, el.clientWidth / el.clientHeight, 0.1, 100)
    camera.position.z = CAMERA_Z

    // ── Shared geometry / materials ──────────────────────────────────────────
    const nodeGeometry = new THREE.SphereGeometry(1, 16, 16)

    const nodeMaterials = [
      new THREE.MeshBasicMaterial({ color: COLOR_TEAL,  transparent: true, opacity: 0.9 }),
      new THREE.MeshBasicMaterial({ color: COLOR_OCEAN, transparent: true, opacity: 0.75 }),
      new THREE.MeshBasicMaterial({ color: COLOR_BLUE,  transparent: true, opacity: 0.55 }),
      new THREE.MeshBasicMaterial({ color: COLOR_DIM,   transparent: true, opacity: 0.25 }),
    ]

    // ── Build nodes ───────────────────────────────────────────────────────────
    const nodes: Node[] = []

    const spread = { x: 11, y: 7, z: 5 }

    for (let i = 0; i < NODE_COUNT; i++) {
      // Weight toward teal so the brand color dominates
      const rnd = Math.random()
      const colorIndex = rnd < 0.35 ? 0 : rnd < 0.6 ? 1 : rnd < 0.80 ? 2 : 3

      // Size: primary nodes slightly bigger
      const size = colorIndex === 0
        ? 0.055 + Math.random() * 0.05
        : colorIndex === 3
        ? 0.018 + Math.random() * 0.018
        : 0.030 + Math.random() * 0.035

      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterials[colorIndex])
      mesh.scale.setScalar(size)

      const position = new THREE.Vector3(
        (Math.random() - 0.5) * spread.x * 2,
        (Math.random() - 0.5) * spread.y * 2,
        (Math.random() - 0.5) * spread.z * 2,
      )
      mesh.position.copy(position)
      scene.add(mesh)

      const angle = Math.random() * Math.PI * 2
      const speed = DRIFT_SPEED * (0.3 + Math.random() * 0.7)

      nodes.push({
        position,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed * 0.012,
          Math.sin(angle) * speed * 0.012,
          (Math.random() - 0.5) * speed * 0.006,
        ),
        phase:      Math.random() * Math.PI * 2,
        size,
        colorIndex,
        mesh,
      })
    }

    // ── Connection lines via LineSegments ─────────────────────────────────────
    // We'll rebuild positions every frame — keeps it dynamic
    const maxConnections = NODE_COUNT * 6
    const linePositions  = new Float32Array(maxConnections * 2 * 3)
    const lineColors     = new Float32Array(maxConnections * 2 * 3)

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeometry.setAttribute('color',    new THREE.BufferAttribute(lineColors,    3))

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent:  true,
      opacity:      0.22,
      blending:     THREE.AdditiveBlending,
      depthWrite:   false,
    })

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineSegments)

    // ── Scene pivot — tilted by mouse ─────────────────────────────────────────
    const pivot = new THREE.Group()
    scene.add(pivot)

    // Move all meshes into pivot
    nodes.forEach((n) => {
      scene.remove(n.mesh)
      pivot.add(n.mesh)
    })
    scene.remove(lineSegments)
    pivot.add(lineSegments)

    // Subtle static tilt so it reads as 3D immediately
    pivot.rotation.x =  0.18
    pivot.rotation.y = -0.12

    // ── Mouse tracking ────────────────────────────────────────────────────────
    const mouse    = { x: 0, y: 0 }
    const targetRot = { x: 0.18, y: -0.12 }

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2
      mouse.y = ((e.clientY - rect.top)   / rect.height - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // Touch support
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      const rect = el.getBoundingClientRect()
      mouse.x = ((t.clientX - rect.left) / rect.width  - 0.5) * 2
      mouse.y = ((t.clientY - rect.top)  / rect.height - 0.5) * 2
    }
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Helpers ───────────────────────────────────────────────────────────────
    const _color = new THREE.Color()

    function getNodeColor(colorIndex: number): THREE.Color {
      switch (colorIndex) {
        case 0: return COLOR_TEAL
        case 1: return COLOR_OCEAN
        case 2: return COLOR_BLUE
        default: return COLOR_DIM
      }
    }

    // ── Animation loop ────────────────────────────────────────────────────────
    let frameId: number
    let time = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      time += 0.008

      // Smooth mouse → pivot rotation
      targetRot.x = 0.18 + mouse.y * -MOUSE_INFLUENCE
      targetRot.y = -0.12 + mouse.x *  MOUSE_INFLUENCE
      pivot.rotation.x += (targetRot.x - pivot.rotation.x) * 0.04
      pivot.rotation.y += (targetRot.y - pivot.rotation.y) * 0.04

      // Update node positions & pulse opacity
      nodes.forEach((node) => {
        node.position.add(node.velocity)

        // Boundary bounce
        if (Math.abs(node.position.x) > 11) node.velocity.x *= -1
        if (Math.abs(node.position.y) > 7.5) node.velocity.y *= -1
        if (Math.abs(node.position.z) > 5.5) node.velocity.z *= -1

        node.mesh.position.copy(node.position)

        // Pulse size
        const pulse = 1 + Math.sin(time * PULSE_SPEED + node.phase) * 0.18
        node.mesh.scale.setScalar(node.size * pulse)

        // Pulse opacity for primary nodes
        if (node.colorIndex === 0) {
          ;(node.mesh.material as THREE.MeshBasicMaterial).opacity =
            0.7 + Math.sin(time * PULSE_SPEED + node.phase) * 0.25
        }
      })

      // Rebuild connection lines
      let lineIdx = 0

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (lineIdx >= maxConnections) break

          const dist = nodes[i].position.distanceTo(nodes[j].position)
          if (dist > CONNECTION_DIST) continue

          // Opacity fades with distance
          const alpha = (1 - dist / CONNECTION_DIST) * 0.6

          // Start vertex
          const base = lineIdx * 6
          linePositions[base + 0] = nodes[i].position.x
          linePositions[base + 1] = nodes[i].position.y
          linePositions[base + 2] = nodes[i].position.z

          // End vertex
          linePositions[base + 3] = nodes[j].position.x
          linePositions[base + 4] = nodes[j].position.y
          linePositions[base + 5] = nodes[j].position.z

          // Colour interpolation: average of the two node colours
          _color.copy(getNodeColor(nodes[i].colorIndex))
            .lerp(getNodeColor(nodes[j].colorIndex), 0.5)

          lineColors[base + 0] = _color.r * alpha
          lineColors[base + 1] = _color.g * alpha
          lineColors[base + 2] = _color.b * alpha
          lineColors[base + 3] = _color.r * alpha
          lineColors[base + 4] = _color.g * alpha
          lineColors[base + 5] = _color.b * alpha

          lineIdx++
        }
      }

      // Zero out unused segments
      for (let i = lineIdx * 6; i < maxConnections * 6; i++) {
        linePositions[i] = 0
        lineColors[i]    = 0
      }

      lineGeometry.attributes.position.needsUpdate = true
      lineGeometry.attributes.color.needsUpdate    = true
      lineGeometry.setDrawRange(0, lineIdx * 2)

      renderer.render(scene, camera)
    }

    animate()

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove',  onMouseMove)
      window.removeEventListener('touchmove',  onTouchMove)
      window.removeEventListener('resize',     onResize)

      nodes.forEach((n) => {
        n.mesh.geometry.dispose()
      })
      nodeGeometry.dispose()
      lineGeometry.dispose()
      nodeMaterials.forEach((m) => m.dispose())
      lineMaterial.dispose()
      renderer.dispose()

      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="threejs-wrapper"
      aria-hidden="true"
      role="presentation"
    />
  )
}