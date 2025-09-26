<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<!--[s] gnb -->
<%@ include file="/menu.jsp" %>
<!--[e] gnb -->

     <!-- ========================================
          📰 메인 콘텐츠 (웹페이지의 핵심 내용)
          
          이 영역은 방문자가 실제로 보고 싶어하는 내용들이 들어있습니다.
          마치 신문의 1면 기사와 같은 역할을 합니다.
          ======================================== -->
     <main class="main-content">
        
        <!-- ========================================
             🎬 히어로 섹션 (웹페이지의 메인 화면)
             
             이 영역은 마치 영화의 오프닝과 같은 역할을 합니다.
             방문자가 처음 보는 화면으로, 회사의 첫인상을 결정하는 중요한 부분입니다.
             ======================================== -->
        <section class="hero-section" id="heroSection">
            
            <!-- 🎥 배경 영상 컨테이너 (화면 전체를 채우는 동영상) -->
            <!-- 마치 TV 화면처럼 계속 바뀌는 배경 영상을 보여줍니다 -->
            <div class="hero-video-container">
                <video class="hero-video" autoplay muted playsinline preload="metadata" id="heroVideo">
                    <source src="/video/kyongbo-hero-bg.mp4" type="video/mp4">  <!-- 기본 영상 파일 -->
                    Your browser does not support the video tag.  <!-- 영상을 지원하지 않는 브라우저용 메시지 -->
                </video>
                <div class="hero-video-overlay"></div>  <!-- 영상 위에 덮는 반투명 레이어 (글자가 잘 보이게) -->
            </div>
            
            <div class="container">
                <!-- 🎯 히어로 메인 콘텐츠 -->
                <div class="hero-content">
                    
                    <!-- 📝 히어로 텍스트 영역 (메인 메시지) -->
                    <!-- 마치 광고 포스터의 메인 카피와 같은 역할 -->
                    <div class="hero-text">
                        <h1>전력 보호의<br>새로운 기준</h1>  <!-- 메인 제목 (가장 큰 글씨) -->
                        <p>1978년부터 축적된 전문성과 혁신 기술로 안전하고 신뢰할 수 있는 전력 보호 솔루션을 제공합니다.</p>  <!-- 회사 소개 문구 -->

                        <!-- ⭐ 회사 특징들 (강점 어필) -->
                        <!-- 마치 제품 포장지의 특징 표시와 같은 역할 -->
                        <div class="hero-features">
                            <div class="hero-feature">
                                <i class="fas fa-shield-alt"></i>              <!-- 방패 아이콘 (보호 의미) -->
                                <span>40년간 축적된 전력 보호 전문성</span>      <!-- 경험과 전문성 강조 -->
                            </div>
                            <div class="hero-feature">
                                <i class="fas fa-award"></i>                   <!-- 상장 아이콘 (인증 의미) -->
                                <span>국내외 인증 완료된 신뢰성</span>          <!-- 품질 인증 강조 -->
                            </div>
                            <div class="hero-feature">
                                <i class="fas fa-cogs"></i>                    <!-- 톱니바퀴 아이콘 (기술 의미) -->
                                <span>차세대 디지털 기술 적용</span>            <!-- 최신 기술 강조 -->
                            </div>
                        </div>

                        <!-- 🎯 히어로 액션 버튼들 (주요 행동 유도) -->
                        <!-- 마치 TV 광고의 "지금 주문하세요!" 버튼과 같은 역할 -->
                        <div class="hero-buttons">
                            <a href="#" class="hero-btn primary">      <!-- 주요 버튼 (더 눈에 띄게) -->
                                <span>제품 카탈로그</span>                <!-- 제품 정보 다운로드 -->
                                <i class="fas fa-download"></i>           <!-- 다운로드 아이콘 -->
                            </a>
                            <a href="#" class="hero-btn secondary">    <!-- 보조 버튼 -->
                                <span>회사 소개</span>                   <!-- 회사 정보 보기 -->
                                <i class="fas fa-arrow-right"></i>       <!-- 오른쪽 화살표 -->
                            </a>
                        </div>
                    </div>
                    
                    <!-- 🖼️ 히어로 이미지 영역 (제품 사진들) -->
                    <!-- 마치 쇼윈도우처럼 대표 제품들을 보여주는 공간 -->
                    <div class="hero-image">
                        <div class="hero-product-showcase">
                            <!-- 📱 제품 카드들 (클릭 가능한 제품 미리보기) -->
                            <!-- 마치 상품 진열장의 진열된 제품들과 같습니다 -->
                            
                            <a href="#digital-relay" class="hero-product-card">        <!-- 디지털 계전기 카드 -->
                                <img src="/images/main_hero01.jpg" alt="K-PAM 5500">  <!-- 제품 사진 -->
                                <h4>K-PAM 5500</h4>                                   <!-- 제품명 -->
                                <p>디지털 보호 계전기</p>                              <!-- 제품 설명 -->
                            </a>
                            
                            <a href="#digital-meter" class="hero-product-card">       <!-- 디지털 계측기 카드 -->
                                <img src="/images/main_hero02.jpg" alt="K-PAM 5500"> <!-- 제품 사진 -->
                                <h4>디지털 계측기</h4>                                <!-- 제품명 -->
                                <p>고정밀 전력 측정</p>                              <!-- 제품 설명 -->
                            </a>
                            
                            <a href="#voltage-transformer" class="hero-product-card"> <!-- 변압기 카드 -->
                                <img src="/images/main_hero03.jpg" alt="K-PAM 5500"> <!-- 제품 사진 -->
                                <h4>계기용 변압기</h4>                               <!-- 제품명 -->
                                <p>안전한 전압 변환</p>                              <!-- 제품 설명 -->
                            </a>
                            
                            <a href="#current-transformer" class="hero-product-card"> <!-- 변류기 카드 -->
                                <img src="/images/main_hero04.jpg" alt="K-PAM 5500"> <!-- 제품 사진 -->
                                <h4>계기용 변류기</h4>                               <!-- 제품명 -->
                                <p>정확한 전류 측정</p>                              <!-- 제품 설명 -->
                            </a>                                                                                                
                        </div>
                    </div>                    
                </div>
            </div>
        </section>

        <!-- ========================================
             📚 제품 인덱스 & 자료실 섹션 (제품 카테고리와 자료들)
             
             이 영역은 마치 도서관의 분류 시스템과 같은 역할을 합니다.
             제품들을 종류별로 나누고, 필요한 자료들을 쉽게 찾을 수 있게 도와줍니다.
             ======================================== -->
        <section class="product-resources-section">
            <div class="container">
                
                <!-- 🗂️ 제품 인덱스 네비게이션 (제품 카테고리 빠른 이동) -->
                <!-- 마치 백과사전의 색인처럼 원하는 제품을 빨리 찾을 수 있게 해주는 메뉴 -->
                <div class="product-index-nav">
                    <!-- 📋 제목 영역 -->
                    <div class="product-nav-left">
                        <h2><i class="fas fa-th-large"></i> Product Index 바로가기</h2>  <!-- 격자 아이콘 + 제목 -->                        
                    </div>
                    
                    <!-- 🏷️ 제품 카테고리 버튼들 -->
                    <!-- 마치 도서관의 분야별 안내판과 같은 역할 -->
                    <div class="product-nav-categories">
                        <a href="#" class="category-btn">RELAY</a>        <!-- 계전기 카테고리 -->
                        <a href="#" class="category-btn">ELD/GFR</a>      <!-- 누전경보기 카테고리 -->
                        <a href="#" class="category-btn">METER</a>        <!-- 계측기 카테고리 -->
                        <a href="#" class="category-btn">TRANSDUCER</a>   <!-- 변환기 카테고리 -->
                        <a href="#" class="category-btn">V.T/C.T</a>      <!-- 변성기 카테고리 -->
                        <button class="search-product-btn"><i class="fas fa-search"></i></button>  <!-- 제품 검색 버튼 -->
                    </div>
                    
                    <!-- 📖 더보기 버튼 -->
                    <div class="content-more">
                        <button class="content-more-btn">
                            <span>컨텐츠 더보기</span>                      <!-- 더 많은 내용 보기 -->
                            <i class="fas fa-chevron-down"></i>           <!-- 아래 화살표 -->
                        </button>
                    </div>
                </div>

                <!-- 📊 자료실과 제품 정보 메인 콘텐츠 영역 -->
                <div class="resources-content">
                    
                    <!-- 📁 자료실 섹션 (왼쪽 영역) -->
                    <!-- 마치 회사의 자료 보관함과 같은 역할 - 필요한 문서들을 모아놓은 곳 -->
                    <div class="resources-left">
                        <div class="section-header">
                            <h3>자료실</h3>  <!-- 섹션 제목 -->
                        </div>
                        
                        <!-- 📂 자료실 격자 (자료 종류들을 격자 모양으로 배치) -->
                        <div class="resources-grid">
                            <!-- 📋 각 자료 종류별 아이템들 -->
                            <!-- 마치 파일 캐비닛의 서랍들과 같은 역할 -->
                            
                            <div class="resource-item">
                                <div class="resource-icon">
                                    <i class="fas fa-file-pdf"></i>  <!-- PDF 파일 아이콘 -->
                                </div>
                                <span>카탈로그</span>              <!-- 제품 카탈로그 (제품 소개서) -->
                            </div>
                            
                            <div class="resource-item">
                                <div class="resource-icon">
                                    <i class="fas fa-certificate"></i>  <!-- 인증서 아이콘 -->
                                </div>
                                <span>인증서</span>                <!-- 품질 인증서들 -->
                            </div>
                            
                            <div class="resource-item">
                                <div class="resource-icon">
                                    <i class="fas fa-drafting-compass"></i>  <!-- 설계 도구 아이콘 -->
                                </div>
                                <span>CAD 도면</span>              <!-- 제품 설계 도면 -->
                            </div>
                            
                            <div class="resource-item">
                                <div class="resource-icon">
                                    <i class="fas fa-file-alt"></i>  <!-- 문서 아이콘 -->
                                </div>
                                <span>사양서</span>                <!-- 제품 상세 스펙 -->
                            </div>
                            
                            <div class="resource-item">
                                <div class="resource-icon">
                                    <i class="fas fa-book"></i>      <!-- 책 아이콘 -->
                                </div>
                                <span>사용설명서</span>             <!-- 제품 사용법 -->
                            </div>
                            
                            <div class="resource-item">
                                <div class="resource-icon">
                                    <i class="fas fa-code"></i>      <!-- 코드 아이콘 -->
                                </div>
                                <span>소프트웨어</span>             <!-- 제품 관련 프로그램 -->
                            </div>
                            
                            <div class="resource-item">
                                <div class="resource-icon">
                                    <i class="fas fa-chart-bar"></i> <!-- 차트 아이콘 -->
                                </div>
                                <span>개발성적서</span>             <!-- 제품 테스트 결과서 -->
                            </div>
                            
                            <div class="resource-item">
                                <div class="resource-icon">
                                    <i class="fas fa-database"></i>  <!-- 데이터베이스 아이콘 -->
                                </div>
                                <span>기술자료실</span>             <!-- 기술 관련 자료들 -->
                            </div>
                        </div>
                        
                        <!-- 신제품 섹션-->
                        <div class="section-header">
                            <h3>신제품</h3>                            
                        </div>
                        <div class="new-product-banner">
                            <div class="banner-content">
                                <div class="banner-text">
                                    <h4>광각형 멀티 파워 미터</h4>
                                    <h2>K-MAC MDM100</h2>
                                    <p>Digital Multi Power Meter</p>
                                    <p>차기전력 표기 시 소수점 둘째 자리까지 표시</p>
                                    <button class="detail-btn">자세히 보기</button>
                                </div>
                                <div class="banner-image">
                                    <img src="/images/MDM100_370.png" alt="K-MAC MDM100">
                                </div>
                            </div>                            
                        </div>

                        <!-- 주요제품 섹션 -->
                        <div class="section-header">
                            <h3>주요제품</h3>                                                
                        </div>
                        <div class="main-products-grid">
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="/images/thmb_main1.jpg" alt="K-PAM 5500">
                                </div>
                                <h4>k-PAM 5500</h4>
                            </div>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="/images/thmb_main2.jpg" alt="K-PAM 5500">
                                </div>
                                <h4>유도형 계전기</h4>
                            </div>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="/images/thmb_main3.jpg" alt="K-PAM 5500">
                                </div>
                                <h4>누전경보기</h4>
                            </div>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="/images/thmb_main4.jpg" alt="K-PAM 5500">
                                </div>
                                <h4>누전계전기</h4>
                            </div>                                                                                    
                        </div>
                    </div>

                    <!-- 우측 사이드바 -->
                    <div class="sidebar-right">
                        <!-- 고객센터 -->
                        <div class="sidebar-section customer-center">
                            <h3>고객센터</h3>
                            <div class="contact-main">
                                <div class="phone-icon">
                                    <i class="fas fa-phone"></i>                         
                                </div>
                                <div class="contact-details">
                                    <div class="main-phone">02-465-1133</div>
                                    <div class="fax">FAX: 02-465-1333</div>
                                    <div class="emergency2">
                                        <span class="emergency2-label">비상연락망</span>
                                        <span class="emergency2-number">010-4758-1133</span>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-buttons">
                                <button class="contact-btn primary">찾아오는 길</button>
                                <button class="contact-btn secondary">판매처 안내</button>
                            </div>
                        </div>

                        <!-- 공지사항 -->
                        <div class="sidebar-section notice-section">
                            <div class="section-title">
                                <h3>공지사항</h3>
                                <div class="nav-arrows">
                                    <button class="nav-arrow"><i class="fas fa-chevron-up"></i></button>
                                    <button class="nav-arrow"><i class="fas fa-chevron-down"></i></button>
                                </div>
                            </div>
                            <ul class="notice-list">
                                <li><span class="notice-dot">●</span> 2025년 여름휴가 안내</li>
                                <li><span class="notice-dot">●</span> 2025년 5월 2일(금) 휴무</li>
                                <li><span class="notice-dot">●</span> 2025년 설 연휴 휴무안내</li>
                                <li><span class="notice-dot">●</span> 10월1일(화) 임시업무 휴일</li>
                            </ul>
                        </div>

                        <!-- QUICK MENU -->
                        <div class="sidebar-section quick-menu">
                            <h3>QUICK MENU</h3>
                            <div class="quick-menu-grid">
                                <div class="quick-item">
                                    <div class="quick-icon">
                                        <i class="fas fa-question-circle"></i>                                
                                    </div>
                                    <span>자주묻는 질문</span>
                                </div>
                                <div class="quick-item">
                                    <div class="quick-icon">
                                        <i class="fas fa-file-invoice"></i>
                                    </div>
                                    <span>견적서 신청</span>
                                </div>
                                <div class="quick-item">
                                    <div class="quick-icon">
                                        <i class="fas fa-microphone"></i>
                                    </div>
                                    <span>고객의 소리</span>
                                </div>
                                <div class="quick-item">
                                    <div class="quick-icon">
                                        <i class="fas fa-book"></i>
                                    </div>
                                    <span>카탈로그신청</span>
                                </div>
                                <div class="quick-item">
                                    <div class="quick-icon">
                                        <i class="fas fa-tools"></i>
                                    </div>
                                    <span>A/S 신청</span>
                                </div>
                                <div class="quick-item">
                                    <div class="quick-icon">
                                        <i class="fas fa-certificate"></i>
                                    </div>
                                    <span>성적서 신청</span>
                                </div>
                                <div class="quick-item">
                                    <div class="quick-icon">
                                        <i class="fas fa-comment"></i>
                                    </div>
                                    <span>카카오톡 상담</span>
                                </div>
                                <div class="quick-item">
                                    <div class="quick-icon">
                                        <i class="fab fa-youtube"></i>
                                    </div>
                                    <span>동영상 가이드</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>            
     </main>
 <!--[s] footer -->
<%@ include file="/footer.jsp" %>
<!--[e] footer -->