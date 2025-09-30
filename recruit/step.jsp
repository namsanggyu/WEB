<!-- ############################################################ -->
<!-- 작업내용 : 채용정보 - 채용절차 -->
<!-- 작업일자 : 2025-09-26 -->
<!-- 작업자 : 남상규 -->
<!-- ############################################################ -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[s] gnb -->
<%@ include file="/menu.jsp" %>
<!--[e] gnb -->

<!-- Hero Section -->
<%@ include file="/common/inc_recruit_hero.jsp" %>
<!-- Hero Section End -->

<!-- Main Content -->
<div class="product-main-content">
    <div class="container">
        <div class="content-layout">
            <!-- Recruit Sidebar -->
            <%@ include file="/common/inc_recruit_sidebar.jsp" %>
            <!-- Recruit Sidebar End -->    

            <!-- Main Content Area -->
            <main class="main-area">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="index.jsp"><i class="fas fa-home"></i> HOME</a>
                    <span>></span>
                    <a href="#">채용정보</a>
                    <span>></span>
                    <span>채용절차</span>
                </nav>
                <!-- Breadcrumb End -->

                <!-- Page Header -->
                <div class="page-header">
                    <div>
                        <h1>채용절차</h1>
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
<script src="/quick_move.js" defer></script> 
