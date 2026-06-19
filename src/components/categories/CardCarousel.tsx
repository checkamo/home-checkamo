"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string; title: string; description: string; href?: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 60px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    max-width: 85vw;
    height: auto;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  .swiper-pagination-bullet-active {
    background: var(--c-teal) !important;
  }
  `
  return (
    <section className="w-full py-8">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl rounded-[24px] border-[3px] border-[var(--border)] p-2 shadow-xl md:rounded-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-2 shadow-sm md:items-center md:gap-8 md:rounded-[40px] md:p-6">
          <Badge
            variant="outline"
            className="absolute left-4 top-6 rounded-[14px] border-2 border-[var(--border)] text-sm md:left-8 bg-[var(--bg)] font-bold text-[var(--text-primary)] px-4 py-1"
          >
            <SparklesIcon className="inline-block mr-2 w-4 h-4 text-[var(--c-teal)]" />
            Explore Directory
          </Badge>
          <div className="flex flex-col justify-center pb-6 pl-4 pt-20 md:items-center text-center">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-[var(--text-primary)]">
              Find What You Need
            </h3>
            <p className="text-[var(--text-secondary)] max-w-xl text-lg font-medium">
              Swipe through our top verification categories and choose exactly what to inspect.
            </p>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 150,
                  modifier: 1.5,
                  slideShadows: false,
                }}
                pagination={showPagination ? { clickable: true } : false}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col h-full bg-[var(--bg)] rounded-3xl overflow-hidden border-[3px] border-[var(--border)] shadow-lg hover:border-[var(--c-teal)] transition-colors group cursor-pointer" onClick={() => { if(image.href) window.location.href = image.href }}>
                      <div className="relative">
                        <img
                          src={image.src}
                          className="w-full h-[240px] object-cover border-b-2 border-[var(--border)]"
                          alt={image.alt}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-xl font-black mb-2 text-[var(--text-primary)]">{image.title}</h4>
                        <p className="text-sm font-semibold text-[var(--text-secondary)]">{image.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
