var ROOT_URL = "/";

/* main */
	function link0000(){location.href= ROOT_URL+"index.jsp"}

/* compnay */
	function link0101(){location.href= ROOT_URL+"company/about.jsp"}		//회사개요
	function link0102(){location.href= ROOT_URL+"company/history.jsp"}		//연혁
	function link0103(){location.href= ROOT_URL+"company/organization.jsp"}	//조직도
	function link0104(){location.href= ROOT_URL+"company/philosophy.jsp"}	//경영이념
	function link0105(){location.href= ROOT_URL+"company/quality.jsp"}		//품질경영
	function link0106(){location.href= ROOT_URL+"company/realm.jsp"}		//사업분야
	function link0107(){location.href= ROOT_URL+"company/location.jsp"}		//찾아오시는 길

/* product */
	function link0201(){location.href= ROOT_URL+"product/index.jsp"}		//제품정보	
	function link0202(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A01&flg2="+tmp_flg2;}	// 전력자동화시스템	
	function link0203(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A02&flg2="+tmp_flg2;}	// 디지털 계전기
	function link0204(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A03&flg2="+tmp_flg2;}	// 유도형 계전기
	function link0205(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A04&flg2="+tmp_flg2;}	// 정지형 계전기
	function link0206(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A05&flg2="+tmp_flg2;}	// 누전 경보기/계전기
	function link0207(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A06&flg2="+tmp_flg2;}	// 지시전기 계기
	function link0208(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A07&flg2="+tmp_flg2;}	// 디지털 계기
	function link0209(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A08&flg2="+tmp_flg2;}	// 전력용 변환기
	function link0210(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A09&flg2="+tmp_flg2;}	// 계기용 변류기(C.T)
	function link0211(tmp_flg2){if(tmp_flg2==null){tmp_flg2="-";}location.href= ROOT_URL+"product/product_list.jsp?flg1=A10&flg2="+tmp_flg2;}	// 계기용 변압기(V.T)	
	function link0212(){location.href= ROOT_URL+"product/typeChart.jsp"}				// 과전류별 TYPE 선정표	

/* customer */
	function link0301(){location.href= ROOT_URL+"customer/notice_list.jsp"}		//공지사항
	function link0302(){location.href= ROOT_URL+"customer/newProduct_list.jsp"}	//신제품소개
	function link0303(){location.href= ROOT_URL+"customer/faq_list.jsp"}		//자주 묻는 질문
	//function link0304(){location.href= ROOT_URL+"customer/inquiry_list.jsp"}	//고객문의
	function link0304(){location.href= ROOT_URL+"customer/inquiry_regist.jsp"}	//고객문의
	function link0305(){location.href= ROOT_URL+"customer/as_write.jsp"}		//A/S 신청
	function link0306(){location.href= ROOT_URL+"customer/estimate.jsp"}		//견적서 신청
	function link0307(){location.href= ROOT_URL+"customer/certificate_write.jsp"}	//성적서 신청
	function link0308(){location.href= ROOT_URL+"customer/cata_write.jsp"}		//카탈로그 신청
	function link0309(){location.href= ROOT_URL+"customer/stop_list.jsp"}		//생산중지 품목
	function link0310(){location.href= ROOT_URL+"customer/agent.jsp"}			//판매처
	function link0311(){location.href= ROOT_URL+"customer/buyrequest_write.jsp"}	//구매신청

/* data */
	function link0401(){location.href= ROOT_URL+"data/catalog_list.jsp"}	//카탈로그
	function link0402(){location.href= ROOT_URL+"data/confirm_list.jsp"}	//인증서
	function link0403(){location.href= ROOT_URL+"data/cad_list.jsp"}	//CAD도면
	function link0404(){location.href= ROOT_URL+"data/specifi_list.jsp"}	//사양서
	function link0405(){location.href= ROOT_URL+"data/guide_list.jsp"}	//사용설명서
	function link0406(){location.href= ROOT_URL+"data/report_list.jsp"}	//개발시험성적서
	function link0407(){location.href= ROOT_URL+"data/soft_list.jsp"}	//소프트웨어
	function link0408(){location.href= ROOT_URL+"data/tech_list.jsp"}	//기술자료실
	function link0409(){location.href= ROOT_URL+"data/promo_list.jsp"}	//동영상가이드
	function link0410(){location.href= ROOT_URL+"data/confirm_view.jsp?bseq=A400051"}	//지명원 바로가기

/* recruit */
	function link0501(){location.href= ROOT_URL+"recruit/people.jsp"}	//인재상
	function link0502(){location.href= ROOT_URL+"recruit/welfare.jsp"}	//복리후생
	function link0503(){location.href= ROOT_URL+"recruit/step.jsp"}	//채용절차
	function link0504(){location.href= ROOT_URL+"recruit/recruit_list.jsp"}	//채용공고

/* member */
	function link0601(){location.href= ROOT_URL+"member/login.jsp"}	//로그인
	function link0602(){location.href= ROOT_URL+"member/find.jsp"}	//아이디/비밀번호 찾기
	function link0603(){location.href= ROOT_URL+"member/join.jsp"}	//회원가입
	function link0604(){location.href= ROOT_URL+"member/modify.jsp"}	//정보수정
	function link0605(){location.href= ROOT_URL+"member/leave.jsp"}	//회원탈퇴

/* etc */
	function link0701(){location.href= ROOT_URL+"etc/sitemap.jsp"}	//사이트맵
	function link0801(){location.href= ROOT_URL+"etc/privercy.jsp"}	//개인정보처리방침
	function link0802(){location.href= ROOT_URL+"etc/prodGuide.jsp"}	//제품소개 이용안내
	function link0803(){location.href= ROOT_URL+"etc/estimateGuide.jsp"}	//견적 이용안내
	function link0804(){window.open('https://www.youtube.com/@kyongbo6545','kyongbo','height=' + screen.height + ',width=' + screen.width + 'fullscreen=yes');}	//유투브 링크
	function link0805(){window.open('http://pf.kakao.com/_xkMbBG','kyongbo','height=1100px,width=900px');}	//경보 카카오채널 링크