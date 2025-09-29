<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[s] gnb -->
<%@ include file="/menu.jsp" %>
<!--[e] gnb -->

<!-- Hero Section -->
<section class="product-hero">
    <div class="hero-background">
        <img src="/images/hero/hero01.png" alt="Electrical Power Grid">
        <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
        <div class="hero-text">
            <h1>RECRUIT <span class="highlight">PEOPLE</span></h1>
            <p>경보전기와 함께 성장할 인재를 찾습니다.</p>
        </div>
    </div>
</section>

<!-- Main Content -->
<div class="product-main-content">
    <div class="container">
        <div class="content-layout">
            <!-- Company Sidebar -->
            <aside class="company-sidebar">
                <div class="company-sidebar-header">
                    <h3>채용정보</h3>
                </div>
                <nav class="company-sidebar-nav">
                    <ul class="company-nav-list">
                        <li class="company-nav-item active">
                            <a href="people.jsp" class="company-nav-link">
                                <i class="fas fa-user-tie"></i>
                                인재상
                            </a>
                        </li>
                        <li class="company-nav-item">
                            <a href="benefits.jsp" class="company-nav-link">
                                <i class="fas fa-gift"></i>
                                복리후생
                            </a>
                        </li>
                        <li class="company-nav-item">
                            <a href="process.jsp" class="company-nav-link">
                                <i class="fas fa-clipboard-list"></i>
                                채용절차
                            </a>
                        </li>
                        <li class="company-nav-item">
                            <a href="job_postings.jsp" class="company-nav-link">
                                <i class="fas fa-bullhorn"></i>
                                채용공고
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
            <!-- Company Sidebar End -->

            <!-- Main Content Area -->
            <main class="main-area">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="index.jsp"><i class="fas fa-home"></i> HOME</a>
                    <span>></span>
                    <a href="#">채용정보</a>
                    <span>></span>
                    <span>인재상</span>
                </nav>
                <!-- Breadcrumb End -->

                <!-- Page Header -->
                <div class="page-header">
                    <div>
                        <h1>인재상</h1>
                        <P>경보전기가 추구하는 인재상과 가치관을 소개합니다.</P>
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