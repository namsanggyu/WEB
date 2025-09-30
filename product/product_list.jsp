<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    // URL 파라미터 받기
    String flg1 = request.getParameter("flg1");
    String flg2 = request.getParameter("flg2");
    
    // 기본값 설정
    if(flg1 == null) flg1 = "";
    if(flg2 == null) flg2 = "";
    
    // 디버깅용 파라미터 값 출력
    System.out.println("Product List - flg1: " + flg1 + ", flg2: " + flg2);
%>
<!DOCTYPE html>
<!--[s] gnb -->
<%@ include file="/menu.jsp" %>
<!--[e] gnb -->

<!-- Hero Section -->
<%@ include file="/common/inc_product_hero.jsp" %>
<!-- Hero Section End -->

<!-- Main Content -->
<div class="product-main-content">
    <div class="container">
        <div class="content-layout">
            <!-- Left Sidebar -->
            <%@ include file="/common/inc_product_sidebar.jsp" %>
            <!-- Left Sidebar End -->

            <!-- Main Content Area -->
            <main class="main-area">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="index.jsp"><i class="fas fa-home"></i> HOME</a>
                    <span>></span>
                    <a href="#">제품정보</a>
                    <span>></span>
                    <a href="#">유도형계전기</a>
                    <span>></span>
                    <span>전류 계전기</span>
                </nav>
                <!-- Breadcrumb End -->

                <!-- Page Header -->
                <div class="page-header">
                    <div>
                        <h1>디지털 계전기</h1>
                        <P>최신의 기술, 최고의 품질을 자랑하는 경보전기의 제품입니다.</P>
                    </div>
                    <div class="print-btn">
                        <button class="btn-print">
                            <i class="fas fa-print"></i>
                            인쇄
                        </button>
                    </div>
                </div>
                <!-- Page Header End -->

                <!-- Product Categories 향후 DB 연동 예정 -->
                <div class="product-categories">
                    <button class="category-btn active">K-PAM 5500 Series</button>
                    <button class="category-btn">K-PAM 10 Series</button>
                    <button class="category-btn">K-IED Series</button>
                    <button class="category-btn">GD Series</button>
                    <button class="category-btn">K-PAM 3300 Series</button>
                    <button class="category-btn">K-PAM F300</button>
                    <button class="category-btn">GDR Series</button>
                    <button class="category-btn">K-PAM 500 Series</button>
                </div>
                <!-- Product Categories End -->

                <!-- Search Section -->
                <div class="search-section">
                    <div class="search-controls">
                        <span>검색 내 재검색</span>
                        <select class="search-select">
                            <option>전체</option>
                            <option>제품명</option>
                            <option>모델명</option>
                        </select>
                        <div class="search-input-group">
                            <input type="text" placeholder="검색어를 입력하세요" class="search-input">
                            <button class="search-btn">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Search Section End -->
                    <!-- Product List -->
                    <div class="product-list">
                        <!-- Product Item 1 -->
                        <div class="product-item">
                            <div class="product-image">
                                <img src="/placeholder.svg?height=120&width=120" alt="GCO-CI Series">
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">순시순수형 과전류계전기(GCO-CI Series)</a></h3>
                                <h4 class="product-model">GCO-CI Series</h4>
                                <p class="product-description">
                                    동작값 Tap 변경식 GCO-C 형과 같은 구조, 순시동작으로 한 CT에 사용 시...
                                </p>
                                <p class="product-specs">
                                    동작특성시간 > 전류 계전기 > 순시순수형 과전류계전기(GCO-CI Series)
                                </p>
                            </div>
                            <div class="product-actions">
                                <button class="btn-catalog">
                                    <i class="fas fa-file-pdf"></i>
                                    카탈로그
                                </button>
                                <button class="btn-cad">
                                    <i class="fas fa-drafting-compass"></i>
                                    CAD도면
                                </button>
                            </div>
                        </div>
                    <!-- Product List End -->

                    <!-- Product Item 2 -->
                    <div class="product-item">
                        <div class="product-image">
                            <img src="/placeholder.svg?height=120&width=120" alt="GCO-CICL Series">
                        </div>
                        <div class="product-info">
                            <h3><a href="product-detail.html" class="product-link">정시한 순시순수형 과전류계전기(GCO-CIL Series)</a></h3>
                            <h4 class="product-model">GCO-CICL Series</h4>
                            <p class="product-description">
                                동작값 GCO-C 형과 같은 구조이 대용량 시간동작이 아닌 CIL에 따라서...
                            </p>
                            <p class="product-specs">
                                동작특성시간 > 전류 계전기 > 정시한 순시순수형 과전류계전기(GCO-CIL Series)
                            </p>
                        </div>
                        <div class="product-actions">
                            <button class="btn-catalog">
                                <i class="fas fa-file-pdf"></i>
                                카탈로그
                            </button>
                            <button class="btn-cad">
                                <i class="fas fa-drafting-compass"></i>
                                CAD도면
                            </button>
                        </div>
                    </div>                      
                    </div>
                    <!-- Pagination -->
                    <div class="pagination">
                        <button class="page-btn">1</button>
                        <button class="page-btn">2</button>
                        <button class="page-btn">3</button>
                    </div>
                    <!-- Pagination End -->
                
            </main>
            <!-- Main Content Area End -->

            <!-- Right Sidebar Quick Menu-->
            <%@ include file="/quick_menu.jsp" %>
            <!-- Right Sidebar Quick Menu End -->
        </div>
    </div>
</div>
<!-- Main Content End -->

<%@ include file="/footer.jsp" %>

<script src="/quick_move.js" defer></script>
