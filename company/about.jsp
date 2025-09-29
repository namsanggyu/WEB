<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[s] gnb -->
<%@ include file="/menu.jsp" %>
<!--[e] gnb -->

<!-- Hero Section -->
<section class="product-hero">
    <div class="hero-background">
        <img src="/images/hero/hero03.png" alt="Electrical Power Grid">
        <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
        <div class="hero-text">
            <h1>ABOUT <span class="highlight">COMPANY</span></h1>
            <p>전력산업의 리더, 경보전기를 소개합니다.</p>
        </div>
    </div>
</section>

<!-- Main Content -->
<div class="product-main-content">
    <div class="container">
        <div class="content-layout">
            <!-- Left Sidebar -->
            <%@ include file="/sidebar.jsp" %>
            <!-- Left Sidebar End -->

            <!-- Main Content Area -->
            <main class="main-area">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="index.jsp"><i class="fas fa-home"></i> HOME</a>
                    <span>></span>
                    <a href="#">회사소개</a>
                    <span>></span>
                    <span>회사개요</span>
                </nav>
                <!-- Breadcrumb End -->

                <!-- Page Header -->
                <div class="page-header">
                    <div>
                        <h1>회사개요</h1>
                        <P>전력산업의 리더, 경보전기를 소개합니다.</P>
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