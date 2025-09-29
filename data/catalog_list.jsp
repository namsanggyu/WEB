<!-- ############################################################ -->
<!-- 작업내용 : 카탈로그 리스트 -->
<!-- 작업일자 : 2025-09-26 -->
<!-- 작업자 : 남상규 -->
<!-- ############################################################ -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[s] gnb -->
<%@ include file="/menu.jsp" %>
<!--[e] gnb -->

<!-- Hero Section -->
<section class="product-hero">
    <div class="hero-background">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Professional Team Collaboration">
        <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
        <div class="hero-text">
            <h1>REFERENCE<span class="highlight"> ROOM</span></h1>
            <p>경보전기의 다양한 기술 자료와 문서를 확인하실 수 있습니다.</p>
        </div>
    </div>
</section>

<!-- Main Content -->
<div class="product-main-content">
    <div class="container">
        <div class="content-layout">
            <!-- Data Sidebar -->
            <aside class="data-sidebar">
                <div class="data-sidebar-header">
                    <h3>자료실</h3>
                </div>
                <nav class="data-sidebar-nav">
                    <ul class="data-nav-list">
                        <li class="data-nav-item active">
                            <a href="catalog_list.jsp" class="data-nav-link">
                                <i class="fas fa-book"></i>
                                카탈로그
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="certificate.jsp" class="data-nav-link">
                                <i class="fas fa-certificate"></i>
                                인증서
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="cad_drawing.jsp" class="data-nav-link">
                                <i class="fas fa-drafting-compass"></i>
                                CAD도면
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="specification.jsp" class="data-nav-link">
                                <i class="fas fa-file-alt"></i>
                                사양서
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="manual.jsp" class="data-nav-link">
                                <i class="fas fa-book-open"></i>
                                사용설명서
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="test_report.jsp" class="data-nav-link">
                                <i class="fas fa-clipboard-check"></i>
                                개발시험성적서
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="software.jsp" class="data-nav-link">
                                <i class="fas fa-download"></i>
                                소프트웨어
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="tech_docs.jsp" class="data-nav-link">
                                <i class="fas fa-folder-open"></i>
                                기술자료실
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="video_guide.jsp" class="data-nav-link">
                                <i class="fas fa-play-circle"></i>
                                동영상가이드
                            </a>
                        </li>
                        <li class="data-nav-item">
                            <a href="designation.jsp" class="data-nav-link">
                                <i class="fas fa-map-marker-alt"></i>
                                지명원바로가기
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- 고객센터 향후 이미지 대체 고려 -->
                <div class="product-contact-info">
                    <h4>고객센터</h4>
                    <div class="product-contact-item">
                        <i class="fas fa-headset"></i>
                        <div>
                            <strong>02-465-1133</strong>
                            <p>FAX : 02-465-1333</p>
                        </div>
                    </div>
                </div>
                <!-- Contact Info 향후 이미지 대체 고려 -->                
                
                <div class="product-company-info">
                    <h4>홈페이지 문의 바로가기</h4>
                </div>

            </aside>
            <!-- Data Sidebar End -->           

            <!-- Main Content Area -->
            <main class="main-area">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="index.jsp"><i class="fas fa-home"></i> HOME</a>
                    <span>></span>
                    <a href="#">데이터센터</a>
                    <span>></span>
                    <span>카탈로그</span>
                </nav>
                <!-- Breadcrumb End -->

                <!-- Page Header -->
                <div class="page-header">
                    <div>
                        <h1>공지사항</h1>
                        <P>친절한 서비스로 고객만족에 최선을 다하겠습니다.</P>
                    </div>
                    <div class="print-btn">
                        <button class="btn-print">
                            <i class="fas fa-print"></i>
                            인쇄
                        </button>
                    </div>
                </div>
                <!-- Page Header End -->                
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

<script>
// TOP 버튼 클릭 시 페이지 상단으로 스크롤
document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.querySelector('.common-top-button');
    if (topButton) {
        topButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 좌측 서브메뉴 1차 메뉴 클릭 시 확장/축소 및 보색 반전 효과
    const expandableLinks = document.querySelectorAll('.product-nav-link.expandable');
    expandableLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 현재 클릭된 메뉴의 부모 nav-item
            const navItem = this.closest('.product-nav-item');
            const subNav = navItem.querySelector('.product-sub-nav');
            const expandIcon = this.querySelector('.expand-icon');
            
            // 다른 메뉴들의 expanded 클래스 제거
            expandableLinks.forEach(otherLink => {
                if (otherLink !== this) {
                    otherLink.classList.remove('expanded');
                    const otherNavItem = otherLink.closest('.product-nav-item');
                    const otherSubNav = otherNavItem.querySelector('.product-sub-nav');
                    const otherExpandIcon = otherLink.querySelector('.expand-icon');
                    
                    if (otherSubNav) {
                        otherSubNav.style.maxHeight = '0';
                    }
                    if (otherExpandIcon) {
                        otherExpandIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // 현재 메뉴 토글
            this.classList.toggle('expanded');
            
            if (subNav) {
                if (this.classList.contains('expanded')) {
                    subNav.style.maxHeight = subNav.scrollHeight + 'px';
                    if (expandIcon) {
                        expandIcon.style.transform = 'rotate(180deg)';
                    }
                } else {
                    subNav.style.maxHeight = '0';
                    if (expandIcon) {
                        expandIcon.style.transform = 'rotate(0deg)';
                    }
                }
            }
        });
    });
});
</script>