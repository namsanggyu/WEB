<!-- ############################################################ -->
<!-- 작업내용 : 자주묻는질문 리스트 -->
<!-- 작업일자 : 2025-09-26 -->
<!-- 작업자 : 남상규 -->
<!-- ############################################################ -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[s] gnb -->
<%@ include file="/menu.jsp" %>
<!--[e] gnb -->

<!-- Hero Section -->
<%@ include file="/common/inc_customer_hero.jsp" %>
<!-- Hero Section End -->


<!-- Main Content -->
<div class="product-main-content">
    <div class="container">
        <div class="content-layout">
            <!-- Notice Sidebar -->
            <%@ include file="/common/inc_customer_sidebar.jsp" %>            
            <!-- Notice Sidebar End -->

            <!-- Main Content Area -->
            <main class="main-area">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="index.jsp"><i class="fas fa-home"></i> HOME</a>
                    <span>></span>
                    <a href="#">고객지원</a>
                    <span>></span>
                    <span>자주묻는질문</span>
                </nav>
                <!-- Breadcrumb End -->

                <!-- Page Header -->
                <div class="page-header">
                    <div>
                        <h1>자주묻는질문</h1>
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

<script src="/quick_move.js" defer></script>  <!-- link.js 파일 연결 (모든 JavaScript 기능 포함) -->