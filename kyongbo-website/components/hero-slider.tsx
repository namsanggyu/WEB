"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "신뢰를 바탕으로",
    description: "창조적 열정과 상상력이 발휘된 취고의 제품으로 고객과 안전 그리고 환경을 생각하는 기업이 되겠습니다.",
    cta: "제품 보기",
    image: "/placeholder.svg?height=600&width=1200",
    link: "#",
  },
  {
    id: 2,
    title: "스마트 배전반",
    description: "IoT 기술이 적용된 스마트 배전반으로 효율적인 전력 관리",
    cta: "자세히 보기",
    image: "/placeholder.svg?height=600&width=1200",
    link: "#",
  },
  {
    id: 3,
    title: "맞춤형 솔루션",
    description: "고객의 요구에 맞는 맞춤형 전기 솔루션 제공",
    cta: "문의하기",
    image: "/placeholder.svg?height=600&width=1200",
    link: "#",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-black/40" />
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center text-white">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
                  <div className="mt-8">
                    <Link href={slide.link}>
                      <Button size="lg" className="rounded-full">
                        {slide.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90"
        onClick={prevSlide}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">이전</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90"
        onClick={nextSlide}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">다음</span>
      </Button>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">슬라이드 {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
