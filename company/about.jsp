<!-- ############################################################ -->
<!-- 작업내용 : 회사소개 - 회사개요 -->
<!-- 작업일자 : 2025.09.29 -->
<!-- 작업자 : 남상규 -->
<!-- ############################################################ -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[s] gnb -->
<%@ include file="/menu.jsp" %>
<!--[e] gnb -->

<!-- Hero Section -->
<%@ include file="/common/inc_company_hero.jsp" %>
<!-- Hero Section End -->

<!-- Main Content -->
<div class="product-main-content">
    <div class="container">
        <div class="content-layout">
            <!-- Company Sidebar -->
            <%@ include file="/common/inc_company_sidebar.jsp" %>            

            <!-- Main Content Area -->
            <main class="main-area">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="/index.jsp"><i class="fas fa-home"></i> HOME</a>
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

<script src="/quick_move.js" defer></script>