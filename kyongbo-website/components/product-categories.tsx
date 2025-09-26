import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function ProductCategories() {
  return (
    <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">제품 카테고리</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">경보전기의 다양한 제품 카테고리를 살펴보세요</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="#"
              className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="배전반"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">배전반</h3>
                <p className="mt-2 text-sm text-muted-foreground">고품질 배전반 및 관련 제품</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  자세히 보기
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="자동제어반"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">자동제어반</h3>
                <p className="mt-2 text-sm text-muted-foreground">정밀한 자동제어 시스템</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  자세히 보기
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="MCC"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">MCC</h3>
                <p className="mt-2 text-sm text-muted-foreground">모터 제어 센터</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  자세히 보기
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="특수 제품"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">특수 제품</h3>
                <p className="mt-2 text-sm text-muted-foreground">특수 목적용 전기 제품</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  자세히 보기
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-10 text-center">
            <Link href="#">
              <span className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                전체 제품 카테고리 보기
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
