import Link from "next/link"
import { ArrowRight, ChevronRight, Download, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSlider } from "@/components/hero-slider"
import { ProductCategories } from "@/components/product-categories"
import { SolutionsSection } from "@/components/solutions-section"
import { NewsSection } from "@/components/news-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-red-600">경보전기</span>
              <span className="hidden text-sm text-muted-foreground md:inline-block">KYONGBO ELECTRIC</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              회사소개
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              제품
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              솔루션
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              자료실
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              고객지원
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden lg:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="제품 검색..." className="w-[200px] pl-8 md:w-[250px] lg:w-[300px]" />
              </div>
            </form>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Search className="h-4 w-4" />
              <span className="sr-only">검색</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">메뉴</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSlider />

        <section className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">제품 검색</h2>
                <p className="mt-2 text-muted-foreground">
                  경보전기의 다양한 제품을 검색하고 CAD 파일을 다운로드하세요
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="제품명 또는 모델번호 입력..."
                    className="w-full pl-9 md:w-[350px]"
                  />
                  <Button className="absolute right-0 top-0 rounded-l-none">검색</Button>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="all">전체 제품</TabsTrigger>
                  <TabsTrigger value="new">신제품</TabsTrigger>
                  <TabsTrigger value="popular">인기 제품</TabsTrigger>
                  <TabsTrigger value="cad">CAD 파일</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Link
                      href="#"
                      className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex h-[180px] items-center justify-center rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="제품 이미지"
                          className="h-auto max-h-[160px] w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="font-semibold">배전반</h3>
                        <p className="text-sm text-muted-foreground">고품질 배전반 및 관련 제품</p>
                        <div className="mt-2 flex items-center text-sm text-primary">
                          자세히 보기
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex h-[180px] items-center justify-center rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="제품 이미지"
                          className="h-auto max-h-[160px] w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="font-semibold">자동제어반</h3>
                        <p className="text-sm text-muted-foreground">정밀한 자동제어 시스템</p>
                        <div className="mt-2 flex items-center text-sm text-primary">
                          자세히 보기
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex h-[180px] items-center justify-center rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="제품 이미지"
                          className="h-auto max-h-[160px] w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="font-semibold">MCC</h3>
                        <p className="text-sm text-muted-foreground">모터 제어 센터</p>
                        <div className="mt-2 flex items-center text-sm text-primary">
                          자세히 보기
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" className="gap-2">
                      전체 제품 보기
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="new" className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Link
                      href="#"
                      className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-muted/50"
                    >
                      <div className="absolute right-4 top-4 rounded-full bg-red-600 px-2 py-1 text-xs font-medium text-white">
                        신제품
                      </div>
                      <div className="flex h-[180px] items-center justify-center rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="제품 이미지"
                          className="h-auto max-h-[160px] w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="font-semibold">스마트 배전반</h3>
                        <p className="text-sm text-muted-foreground">IoT 기능이 탑재된 최신 배전반</p>
                        <div className="mt-2 flex items-center text-sm text-primary">
                          자세히 보기
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </TabsContent>
                <TabsContent value="popular" className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Link
                      href="#"
                      className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex h-[180px] items-center justify-center rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="제품 이미지"
                          className="h-auto max-h-[160px] w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="font-semibold">표준형 배전반</h3>
                        <p className="text-sm text-muted-foreground">가장 많이 사용되는 표준형 배전반</p>
                        <div className="mt-2 flex items-center text-sm text-primary">
                          자세히 보기
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </TabsContent>
                <TabsContent value="cad" className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">배전반 CAD 파일</h3>
                          <p className="text-sm text-muted-foreground">표준형 배전반 CAD 도면</p>
                        </div>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">다운로드</span>
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">자동제어반 CAD 파일</h3>
                          <p className="text-sm text-muted-foreground">자동제어반 CAD 도면</p>
                        </div>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">다운로드</span>
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">MCC CAD 파일</h3>
                          <p className="text-sm text-muted-foreground">MCC 패널 CAD 도면</p>
                        </div>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">다운로드</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <ProductCategories />
        <SolutionsSection />
        <NewsSection />

        <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">경보전기와 함께 미래를 준비하세요</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                40년 이상의 경험과 기술력으로 최고의 전기 솔루션을 제공합니다
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="gap-2">
                  문의하기
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline">제품 카탈로그 다운로드</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container px-4 py-8 md:px-6 lg:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-red-600">경보전기</span>
                <span className="text-sm text-muted-foreground">KYONGBO ELECTRIC</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                1982년 설립 이래 40년 이상의 역사를 가진 전기 제조 전문 기업
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">회사 정보</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>서울 특별시 성동구 성수일로 12가길 5(성수동 2가)</li>
                <li>전화: 02-465-1133</li>
                <li>팩스: 02-465-1333</li>
                <li>이메일: webmaster@kyongbo.co.kr</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">바로가기</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    제품
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    솔루션
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    자료실
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    고객지원
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">뉴스레터 구독</h3>
              <p className="mb-4 text-sm text-muted-foreground">최신 제품 및 기술 정보를 받아보세요</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="이메일 주소" />
                <Button variant="outline">구독</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 경보전기 주식회사. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
