<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.*"%>
<%@ page import="product.*"%>
<%@ page import="common.*"%>
<%

//##################################################
// 페이지명 : 제품정보 리스트페이지
// 작성자   : 남상규
// 작성일   : 2025.10.15
//################################################*/

    // URL 파라미터 받기
    /*
    String flg1 = request.getParameter("flg1");
    String flg2 = request.getParameter("flg2");
    */

	String flg1 = "-";
	String flg2 = "-";
	String flg3 = "-";

	productDAO dao = null;
	ArrayList<productCateVO> list = null;
	ArrayList<productVO> productlist = null;
	productCateVO vo = null;
	productVO pvo = null;

	//request.setCharacterEncoding("UTF-8");

	JRequest jrequest = new JRequest(request);

  /*##################################################
	## 화면표시용 네비게이션 처리 파라메터
	##################################################*/
	flg1 	= 	request.getParameter("flg1")==null?flg1:request.getParameter("flg1");
	flg2	=	request.getParameter("flg2");
	flg3 	= 	request.getParameter("flg3")==null?flg3:request.getParameter("flg3");

	if(flg2.equals("-")){flg2 = flg1+"01";}	// flg2값(중분류)이 없다면 flg1(대분류)+01 => 대분류의 맨처음값으로 세팅

	dao 	=	new productDAO();

	// 중분류 카테고리를 가져오는 리스트
	list	=	dao.getBoard1(flg1, flg2);

	// navi 표시용 리스트
	if(list.size()>0){vo = (productCateVO)list.get(0);}

  /*##################################################
	## 화면표시용 네비게이션 처리 파라메터
	##################################################*/
	String search = "all";
	String keyword = null;

	int pageNo=1;
	int totalCount=0;
	int totalPage=0;
	int perPage=0;

	search 	= request.getParameter("search") == null?search:request.getParameter("search");
	keyword = jrequest.getParameter("keyword") == null?"":jrequest.getParameter("keyword");
	pageNo 	= request.getParameter("pageNo") == null?1:Integer.parseInt(request.getParameter("pageNo")); // 페이지번호 가져오기

	productlist = dao.getBoardByPage(search, keyword, pageNo, flg1, flg2, flg3); // 상품페이지 레코드셋 가져오기

	// 전체건수와 페이지수 구하기
	perPage 	= 10; // 한페이지에 보여줄 레코드건수
	totalCount 	= dao.getTotalCount(search, keyword, flg1, flg2, flg3);

	totalPage  = totalCount > 0 ? (int)Math.ceil((double)totalCount/(double)perPage) : 1;

	//파일다운로드관련 변수
    String tmp_path = request.getContextPath();
    String downpath = tmp_path + "/admin/fileDown2.jsp?filename=";
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
                <div class="products-categories">
                    <button class="products-category-btn <%= "5500".equals(flg1) ? "active" : "" %>" 
                            onclick="location.href='product_list.jsp?flg1=5500'">K-PAM 5500 Series</button>
                    <button class="products-category-btn <%= "10".equals(flg1) ? "active" : "" %>" 
                            onclick="location.href='product_list.jsp?flg1=10'">K-PAM 10 Series</button>
                    <button class="products-category-btn <%= "ied".equals(flg1) ? "active" : "" %>" 
                            onclick="location.href='product_list.jsp?flg1=ied'">K-IED Series</button>
                    <button class="products-category-btn <%= "gd".equals(flg1) ? "active" : "" %>" 
                            onclick="location.href='product_list.jsp?flg1=gd'">GD Series</button>
                    <button class="products-category-btn <%= "3300".equals(flg1) ? "active" : "" %>" 
                            onclick="location.href='product_list.jsp?flg1=3300'">K-PAM 3300 Series</button>
                    <button class="products-category-btn <%= "f300".equals(flg1) ? "active" : "" %>" 
                            onclick="location.href='product_list.jsp?flg1=f300'">K-PAM F300</button>
                    <button class="products-category-btn <%= "gdr".equals(flg1) ? "active" : "" %>" 
                            onclick="location.href='product_list.jsp?flg1=gdr'">GDR Series</button>
                    <button class="products-category-btn <%= "500".equals(flg1) ? "active" : "" %>" 
                            onclick="location.href='product_list.jsp?flg1=500'">K-PAM 500 Series</button>
                </div>
                <!-- Product Categories End -->

                <!-- Search Section -->
                <div class="product-search-section">
                    <div class="product-search-controls">
                        <span>결과 내 재검색</span>
                        <select class="product-search-select">
                            <option>전체</option>
                            <option>제품명</option>
                            <option>모델명</option>
                        </select>
                        <div class="product-search-input-group">
                            <input type="text" placeholder="검색어를 입력하세요" class="product-search-input">
                            <button class="product-search-btn">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Search Section End -->
                    <!-- Product List -->
                    <div class="products-list">

		<%
			if(productlist.size()>0){
				int num = totalCount-perPage*(pageNo-1); // 게시글 넘버링로직
				for(int i=0;i<productlist.size();i++){
					pvo = (productVO)productlist.get(i);

		%>

                        <!-- Product Item 1 -->
                        <div class="products-item">
                            <div class="products-image">
                                <img src="/images/main_hero01.jpg" alt="GCO-CI Series">
                            </div>
                            <dl>
                                <dt><a href="product-detail.jsp" class="products-link"><%=pvo.getTitle()%></a></dt>
                                <dd class="products-model"><%=pvo.getType()%></dd>
                                <dd class="products-description">
                                    <%=pvo.getSumm()%>
                                </dd>
                                <dd class="products-specs">
                                    <%=pvo.getCate()%>
                                </dd>
                            </dl>
                            <div class="products-actions">
                                <button class="products-btn-catalog">
                                    <i class="fas fa-file-pdf"></i>
                                    카탈로그
                                </button>
                                <button class="products-btn-cad">
                                    <i class="fas fa-drafting-compass"></i>
                                    CAD도면
                                </button>
                            </div>
                        </div>
		<%				
				}
			}else{
		%>
				<div class="products-empty">
					<p>검색결과가 없습니다.</p>
				</div>
		<%
			}
		%>
                    </div>                    
                    <!-- Pagination -->
                    <div class="pagination">
                        <button class="page-btn">처음</button>
                        <button class="page-btn active">1</button>
                        <button class="page-btn">2</button>
                        <button class="page-btn">3</button>
                        <button class="page-btn">마지막</button>
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
