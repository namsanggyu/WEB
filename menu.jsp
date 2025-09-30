<!--
    🏢 경보전기 웹사이트 메인 페이지
    ================================
    📝 작성자: 남상규
    📅 작성일: 2025.08.29
    🎯 주요기능: 
        - 인터렙티브 (사용자와 상호작용하는 기능들)
        - 크로스 브라우징 (모든 브라우저에서 동일하게 작동)
        - 모바일 대응 (스마트폰에서도 완벽하게 작동)
    ⏰ 개발 기간: 2025.01.01 ~ 2025.12.31
    
    💡 이 파일은 경보전기 회사의 첫 페이지입니다.
    마치 회사의 얼굴과 같은 역할을 하며, 방문자가 처음 보는 화면입니다.
-->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html lang="ko">
<head>
    <!-- 🌐 웹페이지 기본 정보 설정 -->
    <meta charset="UTF-8">    <!-- 한글 등 모든 문자가 깨지지 않게 하는 설정 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- 스마트폰에서 화면 크기 자동 조정 -->
    
    <!-- 📋 웹페이지 제목 (브라우저 탭에 표시되는 이름) -->
    <title>KyongBo Electric - 전력 보호의 혁신</title>
    
    <!-- 🎨 스타일시트 연결 (웹페이지를 예쁘게 꾸미는 파일들) -->
    <link rel="stylesheet" href="/common/kb.css">  <!-- 우리가 만든 메인 스타일 파일 -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">  <!-- 구글 한글 폰트 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">  <!-- 아이콘 폰트 (돋보기, 햄버거 메뉴 등) -->
    
    <!-- ⚡ JavaScript 파일 연결 (defer로 HTML 파싱 완료 후 실행) -->
    <script src="/common/kb.js" defer></script>  <!-- kb.js 파일 연결 (모든 JavaScript 기능 포함) -->
    <script src="/common/link.js" defer></script>  <!-- link.js 파일 연결 (모든 JavaScript 기능 포함) -->

</head>
<body>
    <!-- 
        🏗️ 웹페이지의 실제 내용이 시작되는 곳
        마치 집의 구조처럼 header(머리) → main(몸통) → footer(발) 순서로 구성됩니다.
    -->
    <!-- ========================================
         🏠 네비게이션 헤더 (웹사이트 맨 위쪽 메뉴 영역)
         
         이 영역은 마치 건물의 간판과 같은 역할을 합니다.
         방문자가 어디로 갈지 안내하고, 회사 정보를 보여줍니다.
         ======================================== -->
     <header class="header" id="header">
        
        <!-- 📞 상단 연락처 바 (헤더 맨 위쪽 얇은 영역) -->
        <!-- 마치 명함의 연락처 부분과 같은 역할 -->
        <div class="top-bar">
            <div class="container">
                <span class="top-bar-content">
                    <!-- 📧 연락처 정보 (이메일, 전화번호) -->
                    <div class="contact-info">
                        <span><i class="fas fa-envelope"></i> webmaster@kyongbo.co.kr</span>  <!-- 이메일 주소 -->
                        <span><i class="fas fa-phone"></i> 02-465-1133</span>                <!-- 전화번호 -->
                    </div>
                    
                    <!-- 🔗 상단 링크들 (홈, 사이트맵 등 빠른 링크) -->
                    <div class="top-bar-links">
                        <a href="javascript:link0000()" class="top-link">HOME</a>      <!-- 홈페이지로 -->
                        <a href="javascript:link0000()" class="top-link">SITEMAP</a>   <!-- 사이트맵 (전체 메뉴 보기) -->
                        <a href="javascript:link0000()" class="top-link">LOGIN</a>     <!-- 로그인 -->
                        <a href="javascript:link0000()" class="top-link">JOIN</a>      <!-- 회원가입 -->
                    </div>
                </span>
            </div>
        </div>

        <!-- 🧭 메인 네비게이션 바 (실제 메뉴들이 있는 곳) -->
        <!-- 마치 식당의 메뉴판과 같은 역할을 합니다 -->
        <nav class="navbar">
            <div class="container">
                <div class="nav-container">
                    
                    <!-- 🏢 회사 로고 영역 -->
                    <!-- 마치 회사의 이름표와 같은 역할 -->
                     <div class="nav-brand">
                        <a href="javascript:link0000()" class="logo-container">  <!-- 로고 클릭하면 홈페이지로 이동 -->
                            <img src="/images/KBLOGO.png" alt="KyongBo Electric" class="logo-image">  <!-- 회사 로고 이미지 -->
                        </a>
                    </div>

                    <!-- ========================================
                         📋 메인 네비게이션 메뉴 (주요 메뉴들)
                         
                         마치 백화점의 층별 안내판과 같은 역할입니다.
                         각 메뉴를 클릭하면 하위 메뉴들이 펼쳐집니다.
                         ======================================== -->
                    <div class="nav-menu" id="navMenu">
                        
                        <!-- 🏢 회사소개 메뉴 -->
                        <!-- 마치 회사 안내 책자와 같은 역할 - 회사에 대한 모든 정보 제공 -->
                        <div class="nav-item" data-menu="company">
                            <a href="#" class="nav-link">
                                <span>회사소개</span>
                                <i class="fas fa-chevron-down nav-arrow"></i>  <!-- 아래 화살표 (하위 메뉴 있다는 표시) -->
                            </a>
                            
                            <!-- 📂 드롭다운 메뉴 (마우스 올리면 나타나는 하위 메뉴들) -->
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <!-- 📋 드롭다운 제목 영역 -->
                                    <div class="dropdown-header">
                                        <h3>회사소개</h3>
                                        <p>KyongBo Electric의 모든 것을 알아보세요</p>
                                    </div>
                                    
                                    <!-- 📊 드롭다운 내용을 격자로 배치 -->
                                    <div class="dropdown-grid">
                                        <!-- 🏢 회사 기본 정보 섹션 -->
                                        <div class="dropdown-section">
                                            <h4>회사 정보</h4>
                                            <ul>
                                                <li><a href="javascript:link0101()"><i class="fas fa-building"></i>회사개요</a></li>      <!-- 회사 소개 -->
                                                <li><a href="javascript:link0102()"><i class="fas fa-history"></i>연혁</a></li>         <!-- 회사 역사 -->
                                                <li><a href="javascript:link0103()"><i class="fas fa-sitemap"></i>조직도</a></li>       <!-- 회사 구조 -->
                                                <li><a href="javascript:link0104()"><i class="fas fa-lightbulb"></i>경영이념</a></li>    <!-- 회사 철학 -->
                                            </ul>
                                        </div>
                                        
                                        <!-- ⚙️ 경영 관련 정보 섹션 -->
                                        <div class="dropdown-section">
                                            <h4>경영 시스템</h4>
                                            <ul>
                                                <li><a href="javascript:link0105()"><i class="fas fa-award"></i>품질경영</a></li>           <!-- 품질 관리 -->
                                                <li><a href="javascript:link0106()"><i class="fas fa-chart-line"></i>사업분야</a></li>       <!-- 사업 영역 -->
                                                <li><a href="javascript:link0107()"><i class="fas fa-map-marker-alt"></i>찾아오시는 길</a></li> <!-- 회사 위치 -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- ⚡ 제품정보 메뉴 (회사에서 만드는 모든 제품들) -->
                        <!-- 마치 전자제품 매장의 제품 카탈로그와 같은 역할 -->
                        <div class="nav-item" data-menu="products">
                            <a href="javascript:link0201()" class="nav-link">
                                <span>제품정보</span>
                                <i class="fas fa-chevron-down nav-arrow"></i>  <!-- 아래 화살표 -->
                            </a>
                            
                            <!-- 📋 대형 드롭다운 메뉴 (제품이 많아서 큰 메뉴 사용) -->
                            <div class="dropdown-menu mega-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-header">
                                        <h3>제품정보</h3>
                                        <p>혁신적인 전력 보호 솔루션을 만나보세요</p>
                                    </div>
                                    
                                    <!-- 🏪 제품 카테고리들을 격자로 배치 -->
                                    <div class="dropdown-grid mega-grid">
                                        <!-- ⚡ 보호 계전기 카테고리 -->
                                        <!-- 전력 사고를 막아주는 장비들 -->
                                        <div class="dropdown-section">
                                            <h4>보호 계전기</h4>
                                            <ul>
                                                <li><a href="javascript:link0203('A0201');"><i class="fas fa-microchip"></i>디지털 계전기</a></li>      <!-- 디지털 계전기 -->
                                                <li><a href="javascript:link0204('A0301');"><i class="fas fa-cog"></i>유도형 계전기</a></li>           <!-- 유도형 계전기 -->
                                                <li><a href="javascript:link0206('A0501');"><i class="fas fa-shield-alt"></i>누전 경보기/G.F.R</a></li> <!-- 누전 경보기/G.F.R -->
                                            </ul>
                                        </div>
                                        
                                        <!-- 📊 계측 장비 카테고리 -->
                                        <!-- 전력을 측정하는 장비들 -->
                                        <div class="dropdown-section">
                                            <h4>계측 장비</h4>
                                            <ul>
                                                <li><a href="javascript:link0207('A0601');"><i class="fas fa-tachometer-alt"></i>지시전기 계기</a></li> <!-- 지시전기 계기 -->
                                                <li><a href="javascript:link0208('A0701');"><i class="fas fa-calculator"></i>디지털 계기</a></li>       <!-- 디지털 계기 -->
                                                <li><a href="javascript:link0209('A0801');"><i class="fas fa-exchange-alt"></i>전력용 변환기</a></li>    <!-- 전력용 변환기 -->
                                            </ul>
                                        </div>
                                        
                                        <!-- 🔌 변성기 카테고리 -->
                                        <!-- 전압과 전류를 안전하게 바꿔주는 장비들 -->
                                        <div class="dropdown-section">
                                            <h4>변성기</h4>
                                            <ul>
                                                <li><a href="javascript:link0210('A0901');"><i class="fas fa-plug"></i>계기용 변압기(V.T/MOF)</a></li>  <!-- 계기용 변압기(V.T/MOF) -->
                                                <li><a href="javascript:link0211('A1001');"><i class="fas fa-bolt"></i>계기용 변류기(C.T)</a></li>      <!-- 전류 변환기 -->
                                            </ul>
                                        </div>
                                        
                                        <!-- 🌟 추천 제품 섹션 -->
                                        <!-- 마치 매장의 베스트셀러 코너와 같은 역할 -->
                                        <div class="dropdown-section featured">
                                            <div class="featured-product">
                                                <img src="/images/main_hero01.jpg" alt="K-PAM 5500">  <!-- 제품 이미지 -->
                                                <h5>K-PAM 5500</h5>                                    <!-- 제품명 -->
                                                <p>차세대 디지털<BR>보호 계전기</p>                    <!-- 제품 설명 -->
                                                <a href="javascript:link0202('A0202');">자세히 보기</a>                           <!-- 상세 페이지 링크 -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 고객지원 -->
                        <div class="nav-item" data-menu="support">
                            <a href="#" class="nav-link">
                                <span>고객지원</span>
                                <i class="fas fa-chevron-down nav-arrow"></i>
                            </a>
                            <div class="dropdown-menu mega-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-header">
                                        <h3>고객지원</h3>
                                        <p>언제나 고객과 함께하는 KyongBo Electric</p>
                                    </div>
                                    <div class="dropdown-grid mega-grid">
                                        <div class="dropdown-section">
                                            <h4>고객 서비스</h4>
                                            <ul>
                                                <li><a href="javascript:link0301();"><i class="fas fa-bullhorn"></i>공지사항</a></li>
                                                <li><a href="javascript:link0302();"><i class="fas fa-star"></i>신제품 소개</a></li>
                                                <li><a href="javascript:link0303();"><i class="fas fa-question-circle"></i>자주묻는질문</a></li>
                                                <li><a href="javascript:link0304();"><i class="fas fa-comments"></i>고객문의</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4>서비스 신청</h4>
                                            <ul>
                                                <li><a href="javascript:link0305();"><i class="fas fa-tools"></i>A/S 신청</a></li>
                                                <li><a href="javascript:link0306();"><i class="fas fa-file-invoice"></i>견적서 신청</a></li>
                                                <li><a href="javascript:link0307();"><i class="fas fa-clipboard-list"></i>성적서 신청</a></li>
                                                <li><a href="javascript:link0308();"><i class="fas fa-book"></i>카탈로그 신청</a></li>
                                                <li><a href="javascript:link0309();"><i class="fas fa-drafting-compass"></i>생산중지 제품</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4>파트너 정보</h4>
                                            <ul>                                                
                                                <li><a href="javascript:link0310();"><i class="fas fa-store"></i>판매처 안내</a></li>
                                            </ul>
                                        </div>                                        
                                        <div class="dropdown-section contact-section">
                                            <div class="contact-card">
                                                <i class="fas fa-headset"></i>
                                                <h5>고객센터</h5>
                                                <p><strong>02-465-1133</strong></p>
                                                <p>평일 09:00 - 18:00</p>
                                                <div class="emergency">
                                                    <i class="fas fa-exclamation-triangle"></i>
                                                    <p>비상연락처</p>
                                                    <p><strong>010-4758-1133</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 자료실 -->
                        <div class="nav-item" data-menu="resources">
                            <a href="#" class="nav-link">
                                <span>자료실</span>
                                <i class="fas fa-chevron-down nav-arrow"></i>
                            </a>
                            <div class="dropdown-menu mega-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-header">
                                        <h3>자료실</h3>
                                        <p>필요한 모든 기술 자료를 한 곳에서</p>
                                    </div>
                                    <div class="dropdown-grid mega-grid">
                                        <div class="dropdown-section">
                                            <h4>제품 자료</h4>
                                            <ul>
                                                <li><a href="javascript:link0401();"><i class="fas fa-file-pdf"></i>카탈로그</a></li>
                                                <li><a href="javascript:link0402();"><i class="fas fa-certificate"></i>인증서</a></li>
                                                <li><a href="javascript:link0403();"><i class="fas fa-drafting-compass"></i>CAD 도면</a></li>
                                                <li><a href="javascript:link0404();"><i class="fas fa-file-alt"></i>사양서</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4>기술 문서</h4>
                                            <ul>
                                                <li><a href="javascript:link0405();"><i class="fas fa-book"></i>사용설명서</a></li>
                                                <li><a href="javascript:link0406();"><i class="fas fa-chart-bar"></i>개발시험성적서</a></li>
                                                <li><a href="javascript:link0407();"><i class="fas fa-code"></i>소프트웨어</a></li>
                                                <li><a href="javascript:link0408();"><i class="fas fa-database"></i>기술자료실</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4>멀티미디어</h4>
                                            <ul>
                                                <li><a href="javascript:link0409();"><i class="fas fa-play-circle"></i>동영상가이드</a></li>
                                                <li><a href="javascript:link0410();"><i class="fas fa-exchange-alt"></i>지명원 바로기</a></li>
                                            </ul>
                                        </div>
                                        <div class="download-section">
                                            <div class="download-card">
                                                <i class="fas fa-download"></i>
                                                <h5>다운로드 센터</h5>
                                                <p>모든 자료를 한 번에</p>
                                                <a href="#" class="download-btn">
                                                    <i class="fas fa-cloud-download-alt"></i>
                                                    <span>통합 카탈로그</span>
                                                </a>                                         
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 채용정보 -->
                        <div class="nav-item" data-menu="careers">
                            <a href="#" class="nav-link">
                                <span>채용정보</span>
                                <i class="fas fa-chevron-down nav-arrow"></i>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-header">
                                        <h3>채용정보</h3>
                                        <p>함께 성장할 인재를 찾습니다</p>
                                    </div>
                                    <div class="dropdown-grid">
                                        <div class="dropdown-section">
                                            <h4>채용 안내</h4>
                                            <ul>
                                                <li><a href="javascript:link0501();"><i class="fas fa-user-tie"></i>인재상</a></li>
                                                <li><a href="javascript:link0502();"><i class="fas fa-heart"></i>복리후생</a></li>
                                                <li><a href="javascript:link0503();"><i class="fas fa-clipboard-check"></i>채용절차</a></li>
                                                <!--<li><a href="#"><i class="fas fa-briefcase"></i>채용공고</a></li>-->
                                            </ul>
                                        </div>
                                        <div class="career-highlight">
                                            <div class="career-card">
                                                <i class="fas fa-rocket"></i>
                                                <h5>지금 지원하세요!</h5>
                                                <p>전력 보호 분야의 전문가</p>
                                                <a href="javascript:link0504();" class="career-btn">
                                                    <i class="fas fa-external-link-alt"></i>
                                                    <span>채용공고 보기</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Menu Toggle -->
                    <div class="nav-toggle" id="navToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <!-- Mobile Menu -->
                    <div class="mobile-menu" id="mobileMenu">
                        <div class="mobile-menu-header">
                            <img src="/IMAGES/KBLOGO.png" alt="KyongBo Electric" class="mobile-logo">
                            <button class="mobile-close" id="mobileClose">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        
                        <div class="mobile-nav">
                            <!-- 회사소개 -->
                            <div class="mobile-nav-item">
                                <div class="mobile-nav-header" data-toggle="company">
                                    <span>회사소개</span>
                                    <i class="fas fa-chevron-down mobile-arrow"></i>
                                </div>
                                <div class="mobile-dropdown" id="mobile-company">
                                    <div class="mobile-section">
                                        <h4>회사 정보</h4>
                                        <ul>
                                            <li><a href="javascript:link0101();"><i class="fas fa-building"></i>회사개요</a></li>
                                            <li><a href="javascript:link0102();"><i class="fas fa-history"></i>연혁</a></li>
                                            <li><a href="javascript:link0103();"><i class="fas fa-sitemap"></i>조직도</a></li>
                                            <li><a href="javascript:link0104();"><i class="fas fa-lightbulb"></i>경영이념</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-section">
                                        <h4>경영 시스템</h4>
                                        <ul>
                                            <li><a href="javascript:link0105();"><i class="fas fa-award"></i>품질경영</a></li>
                                            <li><a href="javascript:link0106();"><i class="fas fa-chart-line"></i>사업분야</a></li>
                                            <li><a href="javascript:link0107();"><i class="fas fa-map-marker-alt"></i>찾아오시는 길</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- 제품정보 -->
                            <div class="mobile-nav-item">
                                <div class="mobile-nav-header" data-toggle="products">
                                    <span>제품정보</span>
                                    <i class="fas fa-chevron-down mobile-arrow"></i>
                                </div>
                                <div class="mobile-dropdown" id="mobile-products">
                                    <div class="mobile-section">
                                        <h4>보호 계전기</h4>
                                        <ul>
                                            <li><a href="javascript:link0202('A0201');"><i class="fas fa-microchip"></i>디지털 계전기</a></li>
                                            <li><a href="javascript:link0202('A0202');"><i class="fas fa-cog"></i>유도형 계전기</a></li>
                                            <li><a href="javascript:link0202('A0204');"><i class="fas fa-shield-alt"></i>누전 경보기/G.F.R</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-section">
                                        <h4>계측 장비</h4>
                                        <ul>
                                            <li><a href="javascript:link0203('A0205');"><i class="fas fa-tachometer-alt"></i>지시전기 계기</a></li>
                                            <li><a href="javascript:link0203('A0206');"><i class="fas fa-digital-tachograph"></i>디지털 계기</a></li>
                                            <li><a href="javascript:link0209('A0207');"><i class="fas fa-exchange-alt"></i>전력용 변환기</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-section">
                                        <h4>변성기</h4>
                                        <ul>
                                            <li><a href="javascript:link0208('A0208');"><i class="fas fa-plug"></i>계기용 변압기(V.T/MOF)</a></li>
                                            <li><a href="javascript:link0208('A0209');"><i class="fas fa-bolt"></i>계기용 변류기(C.T)</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-featured">
                                        <div class="mobile-featured-product">
                                            <img src="/IMAGES/5500TS.png" alt="K-PAM 5500">
                                            <h5>K-PAM 5500</h5>
                                            <p>차세대 디지털 보호 계전기</p>
                                            <a href="javascript:link0202('A020101');" class="mobile-featured-btn">자세히 보기</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 고객지원 -->
                            <div class="mobile-nav-item">
                                <div class="mobile-nav-header" data-toggle="support">
                                    <span>고객지원</span>
                                    <i class="fas fa-chevron-down mobile-arrow"></i>
                                </div>
                                <div class="mobile-dropdown" id="mobile-support">
                                    <div class="mobile-section">
                                        <h4>고객 서비스</h4>
                                        <ul>
                                            <li><a href="javascript:link0301();"><i class="fas fa-bullhorn"></i>공지사항</a></li>
                                            <li><a href="javascript:link0302();"><i class="fas fa-star"></i>신제품 소개</a></li>
                                            <li><a href="javascript:link0303();"><i class="fas fa-question-circle"></i>자주묻는질문</a></li>
                                            <li><a href="javascript:link0304();"><i class="fas fa-comments"></i>고객문의</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-section">
                                        <h4>서비스 신청</h4>
                                        <ul>
                                            <li><a href="javascript:link0305();"><i class="fas fa-tools"></i>A/S 신청</a></li>
                                            <li><a href="javascript:link0306();"><i class="fas fa-file-invoice"></i>견적서 신청</a></li>
                                            <li><a href="javascript:link0307();"><i class="fas fa-clipboard-list"></i>성적서 신청</a></li>
                                            <li><a href="javascript:link0308();"><i class="fas fa-book"></i>카탈로그 신청</a></li>
                                            <li><a href="javascript:link0309();"><i class="fas fa-drafting-compass"></i>생산중지 제품</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-section">
                                        <h4>파트너 정보</h4>
                                        <ul>
                                            <li><a href="javascript:link0310();"><i class="fas fa-store"></i>판매처 안내</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-contact">
                                        <div class="mobile-contact-card">
                                            <i class="fas fa-headset"></i>
                                            <h5>고객센터</h5>
                                            <p><strong>02-465-1133</strong></p>
                                            <p>평일 09:00 - 18:00</p>
                                            <div class="mobile-emergency">
                                                <p>비상연락처: <strong>010-4758-1133</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 자료실 -->
                            <div class="mobile-nav-item">
                                <div class="mobile-nav-header" data-toggle="resources">
                                    <span>자료실</span>
                                    <i class="fas fa-chevron-down mobile-arrow"></i>
                                </div>
                                <div class="mobile-dropdown" id="mobile-resources">
                                    <div class="mobile-section">
                                        <h4>제품 자료</h4>
                                        <ul>
                                            <li><a href="javascript:link0401();"><i class="fas fa-file-pdf"></i>카탈로그</a></li>
                                            <li><a href="javascript:link0402();"><i class="fas fa-certificate"></i>인증서</a></li>
                                            <li><a href="javascript:link0403();"><i class="fas fa-drafting-compass"></i>CAD 도면</a></li>
                                            <li><a href="javascript:link0404();"><i class="fas fa-file-alt"></i>사양서</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-section">
                                        <h4>기술 문서</h4>
                                        <ul>
                                            <li><a href="javascript:link0405();"><i class="fas fa-book"></i>사용설명서</a></li>
                                            <li><a href="javascript:link0406();"><i class="fas fa-chart-bar"></i>개발시험성적서</a></li>
                                            <li><a href="javascript:link0407();"><i class="fas fa-code"></i>소프트웨어</a></li>
                                            <li><a href="javascript:link0408();"><i class="fas fa-database"></i>기술자료실</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-section">
                                        <h4>멀티미디어</h4>
                                        <ul>
                                            <li><a href="javascript:link0409();"><i class="fas fa-play-circle"></i>동영상가이드</a></li>
                                            <li><a href="javascript:link0410();"><i class="fas fa-exchange-alt"></i>지명원 바로기</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-download">
                                        <div class="mobile-download-card">
                                            <i class="fas fa-download"></i>
                                            <h5>다운로드 센터</h5>
                                            <a href="#" class="mobile-download-btn">
                                                <i class="fas fa-cloud-download-alt"></i>
                                                <span>통합 카탈로그</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 채용정보 -->
                            <div class="mobile-nav-item">
                                <div class="mobile-nav-header" data-toggle="careers">
                                    <span>채용정보</span>
                                    <i class="fas fa-chevron-down mobile-arrow"></i>
                                </div>
                                <div class="mobile-dropdown" id="mobile-careers">
                                    <div class="mobile-section">
                                        <h4>채용 안내</h4>
                                        <ul>
                                            <li><a href="javascript:link0501();"><i class="fas fa-user-tie"></i>인재상</a></li>
                                            <li><a href="javascript:link0502();"><i class="fas fa-heart"></i>복리후생</a></li>
                                            <li><a href="javascript:link0503();"><i class="fas fa-clipboard-check"></i>채용절차</a></li>
                                        </ul>
                                    </div>
                                    <div class="mobile-career">
                                        <div class="mobile-career-card">
                                            <i class="fas fa-rocket"></i>
                                            <h5>지금 지원하세요!</h5>
                                            <p>전력 보호 분야의 전문가</p>
                                            <a href="javascript:link0504();" class="mobile-career-btn">
                                                <i class="fas fa-external-link-alt"></i>
                                                <span>채용공고 보기</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Contact Info -->
                        <div class="mobile-footer">
                            <div class="mobile-contact-info">
                                <p><i class="fas fa-envelope"></i> webmaster@kyongbo.co.kr</p>
                                <p><i class="fas fa-phone"></i> 02-465-1133</p>
                            </div>
                            <div class="mobile-links">
                                <a href="javascript:link0000();">HOME</a>
                                <a href="javascript:link0701();">SITEMAP</a>
                                <a href="javascript:link0601();">LOGIN</a>
                                <a href="javascript:link0603();">JOIN</a>
                            </div>
                        </div>
                    </div>

                    <!-- 🔧 헤더 우측 액션 버튼들 (검색, 언어 선택) -->
                    <!-- 마치 TV 리모컨의 기능 버튼들과 같은 역할 -->
                    <div class="nav-actions">
                        <!-- 🔍 검색 버튼 (돋보기 모양) -->
                        <button class="search-btn" id="searchBtn">
                            <i class="fas fa-search"></i>  <!-- 돋보기 아이콘 -->
                        </button>
                        
                        <!-- 🌐 언어 선택기 -->
                        <!-- 마치 지구본처럼 여러 나라 언어 중에서 선택할 수 있게 해주는 버튼 -->
                        <div class="language-selector">
                            <button class="lang-btn">
                                <span>KOR</span>                            <!-- 현재 선택된 언어 -->
                                <i class="fas fa-chevron-down"></i>         <!-- 아래 화살표 (메뉴 있다는 표시) -->
                            </button>
                            <!-- 🗣️ 언어 선택 드롭다운 -->
                            <div class="lang-dropdown">
                                <a href="#">한국어</a>   <!-- 한국어 -->
                                <a href="#">English</a> <!-- 영어 -->
                                <a href="#">中文</a>     <!-- 중국어 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
     </header>

     <!-- ========================================
          🔍 검색 오버레이 (검색창이 나타나는 전체 화면)
          
          이 영역은 검색 버튼을 클릭했을 때 나타나는 검색 기능입니다.
          마치 스마트폰에서 검색 앱을 열었을 때처럼 전체 화면을 덮습니다.
          ======================================== -->
     <div class="search-overlay" id="searchOverlay">
         <!-- 📦 검색 컨테이너 (실제 검색창이 들어있는 흰색 박스) -->
         <div class="search-container">
             <!-- 🔍 검색 입력 박스 -->
             <!-- 마치 도서관의 검색대와 같은 역할 -->
             <div class="search-box">
                 <i class="fas fa-search"></i>  <!-- 돋보기 아이콘 -->
                 <input type="text" placeholder="제품명, 모델명을 검색하세요..." id="searchInput">  <!-- 실제 검색어 입력창 -->
                 <button class="search-close" id="searchClose">  <!-- 검색창 닫기 버튼 -->
                     <i class="fas fa-times"></i>  <!-- X 아이콘 -->
                 </button>
             </div>
             
             <!-- 💡 검색 제안 영역 (인기 검색어 보여주는 곳) -->
             <!-- 마치 검색 포털의 실시간 검색어와 같은 역할 -->
             <div class="search-suggestions">
                 <h4>인기 검색어</h4>  <!-- 제목 -->
                 <div class="suggestion-tags">
                     <!-- 🏷️ 클릭 가능한 인기 검색어 태그들 -->
                     <span class="tag">K-PAM 5500</span>      <!-- 대표 제품명 -->
                     <span class="tag">디지털 계전기</span>     <!-- 제품 카테고리 -->
                     <span class="tag">누전 경보기</span>      <!-- 제품 카테고리 -->
                     <span class="tag">계기용 변압기</span>     <!-- 제품 카테고리 -->
                     <span class="tag">전력용 변환기</span>     <!-- 제품 카테고리 -->
                     <span class="tag">유도형 계전기</span>     <!-- 제품 카테고리 -->
                 </div>
             </div>
         </div>
     </div>
    