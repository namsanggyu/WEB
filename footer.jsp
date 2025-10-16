<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!-- ========================================
          🦶 푸터 (웹페이지 맨 아래쪽 정보 영역)
          
          이 영역은 마치 명함의 뒷면과 같은 역할을 합니다.
          회사의 상세 정보, 연락처, 법적 정보 등을 모아놓은 곳입니다.
          ======================================== -->
     <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-grid">
                    
                    <!-- 🏢 회사 기본 정보 섹션 -->
                    <!-- 마치 회사 소개서의 첫 페이지와 같은 역할 -->
                    <div class="footer-section">
                        <div class="company-info">
                            <!-- 🏷️ 푸터 로고 영역 -->
                            <div class="logo-footer">
                                <img src="/images/KBLOGO2.png" alt="KyongBo Electric" class="logo-image">  <!-- 회사 로고 -->
                                <div class="logo-text">
                                    <span class="logo-main">경보전기</span>      <!-- 회사명 -->
                                    <span class="logo-sub">전력 보호의 혁신</span> <!-- 회사 슬로건 -->
                                </div>
                            </div>
                            
                            <!-- 📝 회사 소개 문구 -->
                            <p>1978년 설립 이래 전력 보호 분야의 선도기업으로서 혁신적인 기술과 신뢰할 수 있는 제품을 제공하고 있습니다. 고객의 안전과 만족을 최우선으로 하는 KyongBo Electric입니다.</p>
                            
                            <!-- 📞 상세 연락처 정보 -->
                            <!-- 마치 명함의 연락처 부분과 같은 역할 -->
                            <div class="contact-info-footer">
                                <div class="contact-item">
                                    <i class="fas fa-map-marker-alt"></i>       <!-- 위치 아이콘 -->
                                    <span>서울특별시 성동구 성수일로 12가길 5(성수동 2가)</span>  <!-- 회사 주소 -->
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-phone"></i>               <!-- 전화 아이콘 -->
                                    <span>02-465-1133</span>                   <!-- 대표 전화번호 -->
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-fax"></i>                 <!-- 팩스 아이콘 -->
                                    <span>02-465-1134</span>                   <!-- 팩스 번호 -->
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-envelope"></i>            <!-- 이메일 아이콘 -->
                                    <span>webmaster@kyongbo.co.kr</span>       <!-- 이메일 주소 -->
                                </div>
                            </div>
                            
                            <!-- 🌐 소셜 미디어 링크들 -->
                            <!-- 마치 SNS 아이콘 모음과 같은 역할 -->
                            <div class="social-links">
                                <a href="#" class="social-link youtube"><i class="fab fa-youtube"></i></a>  <!-- 유튜브 -->
                                <a href="#" class="social-link kakao"><i class="fas fa-comment"></i></a>   <!-- 카카오톡 -->
                            </div>
                        </div>
                    </div>

                    <!-- 제품 카테고리 -->
                    <div class="footer-section">
                        <h3>제품 카테고리</h3>
                        <ul>
                            <li><a href="javascript:link0203('A0201');"><i class="fas fa-microchip"></i>디지털 계전기</a></li>
                            <li><a href="javascript:link0204('A0301');"><i class="fas fa-cogs"></i>유도형 계전기</a></li>
                            <li><a href="javascript:link0206('A0501');"><i class="fas fa-exclamation-triangle"></i>누전 경보기/G.F.R</a></li>
                            <li><a href="javascript:link0207('A0601');"><i class="fas fa-tachometer-alt"></i>지시전기 계기</a></li>
                            <li><a href="javascript:link0208('A0701');"><i class="fas fa-calculator"></i>디지털 계기</a></li>
                            <li><a href="javascript:link0209('A0801');"><i class="fas fa-sync-alt"></i>전력용 변환기</a></li>
                            <li><a href="javascript:link0210('A0901');"><i class="fas fa-plug"></i>계기용 변압기(VT/MOF)</a></li>
                            <li><a href="javascript:link0211('A1001');"><i class="fas fa-bolt"></i>계기용 변류기(C.T)</a></li>
                        </ul>
                    </div>

                    <!-- 고객 지원 -->
                    <div class="footer-section">
                        <h3>고객 지원</h3>
                        <ul>
                            <li><a href="javascript:link0301();"><i class="fas fa-bell"></i>공지사항</a></li>
                            <li><a href="javascript:link0303();"><i class="fas fa-question-circle"></i>자주묻는질문</a></li>
                            <li><a href="javascript:link0304();"><i class="fas fa-headset"></i>고객문의</a></li>
                            <li><a href="javascript:link0305();"><i class="fas fa-wrench"></i>A/S 신청</a></li>
                            <li><a href="javascript:link0306();"><i class="fas fa-file-invoice-dollar"></i>견적서 신청</a></li>
                            <li><a href="javascript:link0308();"><i class="fas fa-file-pdf"></i>카탈로그 신청</a></li>
                            <li><a href="javascript:link0309();"><i class="fas fa-ban"></i>생산중지 제품</a></li>
                            <li><a href="javascript:link0310();"><i class="fas fa-map-marker-alt"></i>판매처 안내</a></li>
                        </ul>
                    </div>

                    <!-- 회사 안내 -->
                    <div class="footer-section">
                        <h3>회사 안내</h3>
                        <ul>
                            <li><a href="javascript:link0101();"><i class="fas fa-building"></i>회사 개요</a></li>
                            <li><a href="javascript:link0102();"><i class="fas fa-history"></i>연혁</a></li>
                            <li><a href="javascript:link0103();"><i class="fas fa-sitemap"></i>조직도</a></li>
                            <li><a href="javascript:link0104();"><i class="fas fa-lightbulb"></i>경영이념</a></li>
                            <li><a href="javascript:link0105();"><i class="fas fa-award"></i>품질경영</a></li>
                            <li><a href="javascript:link0107();"><i class="fas fa-map-marker-alt"></i>찾아오시는 길</a></li>
                            <li><a href="javascript:link0504();"><i class="fas fa-briefcase"></i>채용정보</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="footer-links">
                        <a href="javascript:link0801();">개인정보처리방침</a>
                        <a href="#">이용약관</a>
                        <a href="#">사이트맵</a>
                        <a href="#">이메일무단수집거부</a>
                    </div>
                    <p>&copy; 2025 KyongBo Electric Co., Ltd. All rights reserved. | 사업자등록번호: 218-81-00537</p>
                </div>
            </div>  
        </div>
     </footer>    
</html>