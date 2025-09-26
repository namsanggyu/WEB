import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NewsSection() {
  return (
    <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">뉴스 및 공지사항</h2>
              <p className="mt-2 text-muted-foreground">경보전기의 최신 소식과 업데이트를 확인하세요</p>
            </div>
            <Link href="#">
              <Button variant="outline" className="gap-2">
                모든 뉴스 보기
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="#" className="group rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
              <div className="overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="뉴스 이미지"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">2024년 5월 15일</p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-primary">신제품 출시: 스마트 배전반</h3>
                <p className="mt-2 line-clamp-2 text-muted-foreground">
                  IoT 기술이 적용된 스마트 배전반을 출시하였습니다. 원격 모니터링 및 제어 기능을 통해 효율적인 전력
                  관리가 가능합니다.
                </p>
              </div>
            </Link>
            <Link href="#" className="group rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
              <div className="overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="뉴스 이미지"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">2024년 4월 20일</p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-primary">2024 전기산업대전 참가 안내</h3>
                <p className="mt-2 line-clamp-2 text-muted-foreground">
                  경보전기는 2024년 5월 10일부터 13일까지 코엑스에서 열리는 전기산업대전에 참가합니다. 많은 관심과 방문
                  부탁드립니다.
                </p>
              </div>
            </Link>
            <Link href="#" className="group rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
              <div className="overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="뉴스 이미지"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">2024년 3월 5일</p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-primary">ISO 9001:2015 인증 갱신</h3>
                <p className="mt-2 line-clamp-2 text-muted-foreground">
                  경보전기는 품질경영시스템 ISO 9001:2015 인증을 성공적으로 갱신하였습니다. 지속적인 품질 향상을 위해
                  노력하겠습니다.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
