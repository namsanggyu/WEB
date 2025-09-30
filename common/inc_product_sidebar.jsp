<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!-- ========================================
          좌측 사이드 메뉴바 
          ======================================== -->
            <aside class="product-sidebar">
                <div class="product-sidebar-header">
                    <h3>제품정보</h3>                    
                </div>
                <nav class="product-sidebar-nav">
                    <ul class="product-nav-list">
                        <li class="product-nav-item">
                            <a href="#" class="product-nav-link expandable<%if(flg1.equals("A02")){out.println(" active");}%>" data-category="digital-relay">
                                <i class="fas fa-microchip"></i>
                                <span>디지털 계전기</span>
                                <i class="fas fa-chevron-down expand-icon"></i>
                            </a>
                            <ul class="product-sub-nav">
                                <li><a href="javascript:link0202('A0201');" class="product-sub-link<%if(flg2.equals("A0201")){out.println(" active");}%>">K-PAM 5500 Series</a></li>
                                <li><a href="javascript:link0202('A0202');" class="product-sub-link<%if(flg2.equals("A0202")){out.println(" active");}%>">K-PAM 10 Series</a></li>
                                <li><a href="javascript:link0202('A0203');" class="product-sub-link<%if(flg2.equals("A0203")){out.println(" active");}%>">K-IED Series</a></li>
                                <li><a href="javascript:link0202('A0204');" class="product-sub-link<%if(flg2.equals("A0204")){out.println(" active");}%>">GD Series</a></li>
                                <li><a href="javascript:link0202('A0205');" class="product-sub-link<%if(flg2.equals("A0205")){out.println(" active");}%>">K-PAM 3300 Series</a></li>
                                <li><a href="javascript:link0202('A0206');" class="product-sub-link<%if(flg2.equals("A0206")){out.println(" active");}%>">K-PAM F300</a></li>
                                <li><a href="javascript:link0202('A0207');" class="product-sub-link<%if(flg2.equals("A0207")){out.println(" active");}%>">GDR Series</a></li>
                                <li><a href="javascript:link0202('A0208');" class="product-sub-link<%if(flg2.equals("A0208")){out.println(" active");}%>">K-PAM 500 Series</a></li>
                            </ul>
                        </li>
                        <li class="product-nav-item">
                            <a href="#" class="product-nav-link expandable<%if(flg1.equals("A03")){out.println(" active");}%>" data-category="inductive-relay">
                                <i class="fas fa-cogs"></i>
                                <span>유도형 계전기</span>
                                <i class="fas fa-chevron-down expand-icon"></i>
                            </a>
                            <ul class="product-sub-nav">
                                <li><a href="javascript:link0203('A0301');" class="product-sub-link<%if(flg2.equals("A0301")){out.println(" active");}%>">전류 계전기</a></li>
                                <li><a href="javascript:link0203('A0302');" class="product-sub-link<%if(flg2.equals("A0302")){out.println(" active");}%>">전압 계전기</a></li>
                                <li><a href="javascript:link0203('A0303');" class="product-sub-link<%if(flg2.equals("A0303")){out.println(" active");}%>">방향지락 계전기</a></li>
                                <li><a href="javascript:link0203('A0304');" class="product-sub-link<%if(flg2.equals("A0304")){out.println(" active");}%>">한류 저항기</a></li>
                                <li><a href="javascript:link0203('A0305');" class="product-sub-link<%if(flg2.equals("A0305")){out.println(" active");}%>">전력 계전기</a></li>
                                <li><a href="javascript:link0203('A0306');" class="product-sub-link<%if(flg2.equals("A0306")){out.println(" active");}%>">결상 계전기</a></li>                                
                                <li><a href="javascript:link0203('A0307');" class="product-sub-link<%if(flg2.equals("A0307")){out.println(" active");}%>">비율차동 계전기</a></li>
                                <li><a href="javascript:link0203('A0308');" class="product-sub-link<%if(flg2.equals("A0308")){out.println(" active");}%>">디지털 계전기 대체 제품</a></li>
                            </ul>   
                        </li>
                        <li class="product-nav-item">
                            <a href="#" class="product-nav-link expandable<%if(flg1.equals("A05")){out.println(" active");}%>" data-category="gfr-relay">
                                <i class="fas fa-exclamation-triangle"></i>
                                <span>누전 경보기/G.F.R</span>
                                <i class="fas fa-chevron-down expand-icon"></i>
                            </a>
                            <ul class="product-sub-nav">
                                <li><a href="javascript:link0206('A0501');" class="product-sub-link<%if(flg2.equals("A0501")){out.println(" active");}%>">누전 경보기(E.L.D)</a></li>
                                <li><a href="javascript:link0206('A0502');" class="product-sub-link<%if(flg2.equals("A0502")){out.println(" active");}%>">누전 계전기(G.F.R)</a></li>
                            </ul>
                        </li>
                        <li class="product-nav-item">
                            <a href="#" class="product-nav-link expandable<%if(flg1.equals("A06")){out.println(" active");}%>" data-category="auto-switch">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>지시전기 계기</span>
                                <i class="fas fa-chevron-down expand-icon"></i>
                            </a>
                            <ul class="product-sub-nav">
                                <li><a href="javascript:link0207('A0601');" class="product-sub-link<%if(flg2.equals("A0601")){out.println(" active");}%>">전류계</a></li>
                                <li><a href="javascript:link0207('A0602');" class="product-sub-link<%if(flg2.equals("A0602")){out.println(" active");}%>">전압계</a></li>
                                <li><a href="javascript:link0207('A0603');" class="product-sub-link<%if(flg2.equals("A0603")){out.println(" active");}%>">전력계</a></li>
                                <li><a href="javascript:link0207('A0604');" class="product-sub-link<%if(flg2.equals("A0604")){out.println(" active");}%>">무효전력계</a></li>
                                <li><a href="javascript:link0207('A0605');" class="product-sub-link<%if(flg2.equals("A0605")){out.println(" active");}%>">역률계</a></li>
                                <li><a href="javascript:link0207('A0606');" class="product-sub-link<%if(flg2.equals("A0606")){out.println(" active");}%>">주파수계</a></li>
                                <li><a href="javascript:link0205('A0607');" class="product-sub-link<%if(flg2.equals("A0607")){out.println(" active");}%>">최대지시계</a></li>
                                <li><a href="javascript:link0207('A0608');" class="product-sub-link<%if(flg2.equals("A0608")){out.println(" active");}%>">메타릴레이</a></li>
                                <li><a href="javascript:link0207('A0609');" class="product-sub-link<%if(flg2.equals("A0609")){out.println(" active");}%>">절연저항 메타릴레이</a></li>
                                <li><a href="javascript:link0207('A0610');" class="product-sub-link<%if(flg2.equals("A0610")){out.println(" active");}%>">수신지시계</a></li>
                            </ul>
                        </li>
                        <li class="product-nav-item">
                            <a href="#" class="product-nav-link expandable<%if(flg1.equals("A07")){out.println(" active");}%>" data-category="digital-meter">
                                <i class="fas fa-digital-tachograph"></i>
                                <span>디지털 계기</span>
                                <i class="fas fa-chevron-down expand-icon"></i>
                            </a>
                            <ul class="product-sub-nav">
                                <li><a href="javascript:link0208('A0701');" class="product-sub-link<%if(flg2.equals("A0701")){out.println(" active");}%>">집중표시제어장치</a></li>
                                <li><a href="javascript:link0208('A0702');" class="product-sub-link<%if(flg2.equals("A0702")){out.println(" active");}%>">전류계</a></li>
                                <li><a href="javascript:link0208('A0703');" class="product-sub-link<%if(flg2.equals("A0703")){out.println(" active");}%>">전압계</a></li>
                                <li><a href="javascript:link0208('A0704');" class="product-sub-link<%if(flg2.equals("A0704")){out.println(" active");}%>">전력계</a></li>
                                <li><a href="javascript:link0208('A0705');" class="product-sub-link<%if(flg2.equals("A0705")){out.println(" active");}%>">무효전력계</a></li>
                                <li><a href="javascript:link0208('A0706');" class="product-sub-link<%if(flg2.equals("A0706")){out.println(" active");}%>">역률계</a></li>
                                <li><a href="javascript:link0208('A0707');" class="product-sub-link<%if(flg2.equals("A0707")){out.println(" active");}%>">주파수계</a></li>
                                <li><a href="javascript:link0208('A0708');" class="product-sub-link<%if(flg2.equals("A0708")){out.println(" active");}%>">수신지시계</a></li>
                                <li><a href="javascript:link0208('A0709');" class="product-sub-link<%if(flg2.equals("A0709")){out.println(" active");}%>">전력량계/무효전력량계카운터</a></li>
                                <li><a href="javascript:link0208('A0710');" class="product-sub-link<%if(flg2.equals("A0710")){out.println(" active");}%>">전력/전력량계&무효전력/전력량계</a></li>
                                <li><a href="javascript:link0208('A0711');" class="product-sub-link<%if(flg2.equals("A0711")){out.println(" active");}%>">통신메타</a></li>
                                <li><a href="javascript:link0208('A0712');" class="product-sub-link<%if(flg2.equals("A0712")){out.println(" active");}%>">최대/최소지시계</a></li>
                                <li><a href="javascript:link0208('A0713');" class="product-sub-link<%if(flg2.equals("A0713")){out.println(" active");}%>">멀티파워메타</a></li>
                                <li><a href="javascript:link0208('A0714');" class="product-sub-link<%if(flg2.equals("A0714")){out.println(" active");}%>">DC메타</a></li>
                            </ul>
                        </li>
                        <li class="product-nav-item">
                            <a href="#" class="product-nav-link expandable<%if(flg1.equals("A08")){out.println(" active");}%>" data-category="power-converter">
                                <i class="fas fa-exchange-alt"></i>
                                <span>전력용 변환기</span>
                                <i class="fas fa-chevron-down expand-icon"></i>
                            </a>
                            <ul class="product-sub-nav">
                                <li><a href="javascript:link0209('A0801');" class="product-sub-link<%if(flg2.equals("A0801")){out.println(" active");}%>">복합형 변환기</a></li>
                                <li><a href="javascript:link0209('A0802');" class="product-sub-link<%if(flg2.equals("A0802")){out.println(" active");}%>">전류 변환기</a></li>
                                <li><a href="javascript:link0209('A0803');" class="product-sub-link<%if(flg2.equals("A0803")){out.println(" active");}%>">전압 변환기</a></li>
                                <li><a href="javascript:link0209('A0804');" class="product-sub-link<%if(flg2.equals("A0804")){out.println(" active");}%>">전력 변환기</a></li>
                                <li><a href="javascript:link0209('A0805');" class="product-sub-link<%if(flg2.equals("A0805")){out.println(" active");}%>">전력량 변환기</a></li>
                                <li><a href="javascript:link0209('A0806');" class="product-sub-link<%if(flg2.equals("A0806")){out.println(" active");}%>">전력/전력량 변환기</a></li>                                
                                <li><a href="javascript:link0209('A0807');" class="product-sub-link<%if(flg2.equals("A0807")){out.println(" active");}%>">무효전력 변환기</a></li>
                                <li><a href="javascript:link0209('A0808');" class="product-sub-link<%if(flg2.equals("A0808")){out.println(" active");}%>">무효전력량 변환기</a></li>
                                <li><a href="javascript:link0209('A0809');" class="product-sub-link<%if(flg2.equals("A0809")){out.println(" active");}%>">무효전력/무효전력량변환기</a></li>
                                <li><a href="javascript:link0209('A0810');" class="product-sub-link<%if(flg2.equals("A0810")){out.println(" active");}%>">역률 변환기</a></li>
                                <li><a href="javascript:link0209('A0811');" class="product-sub-link<%if(flg2.equals("A0811")){out.println(" active");}%>">주파수 변환기</a></li>
                                <li><a href="javascript:link0209('A0812');" class="product-sub-link<%if(flg2.equals("A0812")){out.println(" active");}%>">직류 변환기</a></li>
                            </ul>
                        </li>
                        <li class="product-nav-item">
                            <a href="#" class="product-nav-link expandable<%if(flg1.equals("A09")){out.println(" active");}%>" data-category="meter-transformer">
                                <i class="fas fa-plug"></i>
                                <span>계기용 변압기(V.T/MOF)</span>
                                <i class="fas fa-chevron-down expand-icon"></i>
                            </a>
                            <ul class="product-sub-nav">
                                <li><a href="javascript:link0210('A0901');" class="product-sub-link<%if(flg2.equals("A0901")){out.println(" active");}%>">1.15kV</a></li>
                                <li><a href="javascript:link0210('A0902');" class="product-sub-link<%if(flg2.equals("A0902")){out.println(" active");}%>">1.15kV 3상용</a></li>
                                <li><a href="javascript:link0210('A0903');" class="product-sub-link<%if(flg2.equals("A0903")){out.println(" active");}%>">3.45kV</a></li>
                                <li><a href="javascript:link0210('A0904');" class="product-sub-link<%if(flg2.equals("A0904")){out.println(" active");}%>">7.2kV</a></li>
                                <li><a href="javascript:link0210('A0905');" class="product-sub-link<%if(flg2.equals("A0905")){out.println(" active");}%>">12kV</a></li>
                                <li><a href="javascript:link0210('A0911');" class="product-sub-link<%if(flg2.equals("A0911")){out.println(" active");}%>">17.5kV</a></li>
                                <li><a href="javascript:link0210('A0906');" class="product-sub-link<%if(flg2.equals("A0906")){out.println(" active");}%>">25.8kV</a></li>
                                <li><a href="javascript:link0210('A0907');" class="product-sub-link<%if(flg2.equals("A0907")){out.println(" active");}%>">표준용 변압기(표준V.T)</a></li>
                                <li><a href="javascript:link0210('A0908');" class="product-sub-link<%if(flg2.equals("A0908")){out.println(" active");}%>">단상전원용 변압기</a></li>
                                <li><a href="javascript:link0210('A0909');" class="product-sub-link<%if(flg2.equals("A0909")){out.println(" active");}%>">가스절연접지 변압기</a></li>
                                <li><a href="javascript:link0210('A0910');" class="product-sub-link<%if(flg2.equals("A0910")){out.println(" active");}%>">MOF(계기용변압변류기)</a></li>
                            </ul>   
                        </li>
                        <li class="product-nav-item">
                            <a href="#" class="product-nav-link expandable<%if(flg1.equals("A10")){out.println(" active");}%>" data-category="current-transformer">
                                <i class="fas fa-bolt"></i>
                                <span>계기용 변류기(C.T)</span>
                                <i class="fas fa-chevron-down expand-icon"></i>
                            </a>
                            <ul class="product-sub-nav">
                                <li><a href="javascript:link0211('A1001');" class="product-sub-link<%if(flg2.equals("A1001")){out.println(" active");}%>">1.15kV</a></li>
                                <li><a href="javascript:link0211('A1002');" class="product-sub-link<%if(flg2.equals("A1002")){out.println(" active");}%>">7.2kV</a></li>
                                <li><a href="javascript:link0211('A1003');" class="product-sub-link<%if(flg2.equals("A1003")){out.println(" active");}%>">12kV</a></li>
                                <li><a href="javascript:link0211('A1004');" class="product-sub-link<%if(flg2.equals("A1004")){out.println(" active");}%>">25.8kV</a></li>
                                <li><a href="javascript:link0211('A1005');" class="product-sub-link<%if(flg2.equals("A1005")){out.println(" active");}%>">표준용 변류기(표준C.T)</a></li>
                                <li><a href="javascript:link0211('A1006');" class="product-sub-link<%if(flg2.equals("A1006")){out.println(" active");}%>">영상 변류기(Z.C.T)</a></li>
                                <li><a href="javascript:link0211('A1007');" class="product-sub-link<%if(flg2.equals("A1007")){out.println(" active");}%>">부싱형 변류기(B.C.T)</a></li>
                                <li><a href="javascript:link0211('A1008');" class="product-sub-link<%if(flg2.equals("A1008")){out.println(" active");}%>">분할형 변류기(분할형C.T)</a></li>
                                <li><a href="javascript:link0211('A1009');" class="product-sub-link<%if(flg2.equals("A1009")){out.println(" active");}%>">한전용 변류기(C.T)</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <!-- 계기용 변류기 Section Start -->
                    <div class="product-CT-section">
                        <div class="product-CT-item">
                            <i class="fas fa-file-pdf"></i>
                            <div class="product-CT-info">
                                <h4>계기용 변류기(C.T)</h4>
                                <p>최고회로 전압별 TYPE 선정표</p>
                            </div>
                        </div>
                    </div>
                <!-- 계기용 변류기 Section End -->

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