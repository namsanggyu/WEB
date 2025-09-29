<!-- ############################################################ -->
<!-- 작업내용 : 공지사항 리스트 -->
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
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Customer Support Technology">
        <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
        <div class="hero-text">
            <h1>CUSTOMER <span class="highlight">SUPPORT</span></h1>
            <p>친절한 서비스로 고객만족에 최선을 다하겠습니다.</p>
        </div>
    </div>
</section>

<!-- Main Content -->
<div class="product-main-content">
    <div class="container">
        <div class="content-layout">
            <!-- Notice Sidebar -->
            <aside class="notice-sidebar">
                <div class="notice-sidebar-header">
                    <h3>고객지원</h3>
                </div>
                <nav class="notice-sidebar-nav">
                    <ul class="notice-nav-list">
                        <li class="notice-nav-item ">
                            <a href="notice_list.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-bullhorn"></i>
                                공지사항
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="new_product.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-star"></i>
                                신제품소개
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="faq.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-question-circle"></i>
                                자주묻는질문
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="inquiry.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-headset"></i>
                                고객문의
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="purchase.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-shopping-cart"></i>
                                구매신청
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="as_request.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-tools"></i>
                                A/S신청
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="quotation.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-calculator"></i>
                                견적서 신청
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="certificate.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-file-alt"></i>
                                성적서 신청
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="catalog.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-book"></i>
                                카탈로그 신청
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="discontinued.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-exclamation-triangle"></i>
                                생산중지 제품
                            </a>
                        </li>
                        <li class="notice-nav-item">
                            <a href="dealers.jsp" class="notice-nav-link expandable">
                                <i class="fas fa-map-marker-alt"></i>
                                판매처 안내
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
            <!-- Notice Sidebar End -->

            <!-- Main Content Area -->
            <main class="main-area">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="index.jsp"><i class="fas fa-home"></i> HOME</a>
                    <span>></span>
                    <a href="#">고객지원</a>
                    <span>></span>
                    <span>공지사항</span>
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