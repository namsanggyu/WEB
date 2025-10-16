// ############################################################
// 작업내용 : 통합 사이드바 전용 JavaScript (회사소개, 고객지원, 자료실, 채용정보)
// 작업일자 : 2025.01.27
// 작업자 : 남상규
// ############################################################

document.addEventListener('DOMContentLoaded', function() {
    console.log('Common Sidebar JS 로드됨');
    
    // 현재 페이지 URL에서 함수명 추출
    const currentPath = window.location.pathname;
    console.log('현재 경로:', currentPath);
    
    // URL 경로 → link.js 함수명 매핑 (모든 섹션)
    const pathToFunction = {
        // 회사소개 섹션
        '/company/about.jsp': 'link0101',        // 회사개요
        '/company/history.jsp': 'link0102',      // 연혁
        '/company/organization.jsp': 'link0103', // 조직도
        '/company/philosophy.jsp': 'link0104',  // 경영이념
        '/company/quality.jsp': 'link0105',      // 품질경영
        '/company/realm.jsp': 'link0106',        // 사업분야
        '/company/location.jsp': 'link0107',    // 찾아오시는길
        
        // 고객지원 섹션
        '/customer/notice_list.jsp': 'link0301',     // 공지사항
        '/customer/newProduct_list.jsp': 'link0302', // 신제품소개
        '/customer/faq_list.jsp': 'link0303',        // 자주묻는질문
        '/customer/inquiry_regist.jsp': 'link0304',  // 고객문의
        '/customer/as_write.jsp': 'link0305',        // A/S신청
        '/customer/estimate.jsp': 'link0306',         // 견적서신청
        '/customer/certificate_write.jsp': 'link0307', // 성적서신청
        '/customer/cata_write.jsp': 'link0308',       // 카탈로그신청
        '/customer/stop_list.jsp': 'link0309',        // 생산중지품목
        '/customer/agent.jsp': 'link0310',            // 판매처
        '/customer/buyrequest_write.jsp': 'link0311', // 구매신청
        
        // 자료실 섹션
        '/data/catalog_list.jsp': 'link0401',     // 카탈로그
        '/data/confirm_list.jsp': 'link0402',     // 인증서
        '/data/cad_list.jsp': 'link0403',         // CAD도면
        '/data/specifi_list.jsp': 'link0404',     // 사양서
        '/data/guide_list.jsp': 'link0405',       // 사용설명서
        '/data/report_list.jsp': 'link0406',      // 개발시험성적서
        '/data/soft_list.jsp': 'link0407',         // 소프트웨어
        '/data/tech_list.jsp': 'link0408',         // 기술자료실
        '/data/promo_list.jsp': 'link0409',        // 동영상가이드
        '/data/confirm_view.jsp': 'link0410',      // 지명원바로가기
        
        // 채용정보 섹션
        '/recruit/people.jsp': 'link0501',        // 인재상
        '/recruit/welfare.jsp': 'link0502',        // 복리후생
        '/recruit/step.jsp': 'link0503',           // 채용절차
        '/recruit/recruit_list.jsp': 'link0504'    // 채용공고
    };
    
    // 현재 페이지에 해당하는 함수명 찾기
    const currentFunction = pathToFunction[currentPath];
    console.log('현재 함수명:', currentFunction);
    
    if (currentFunction) {
        // 모든 메뉴에서 active 클래스 제거
        const allNavItems = document.querySelectorAll('.common-nav-item');
        allNavItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // 해당 함수명에 해당하는 메뉴 활성화
        const allLinks = document.querySelectorAll('.common-nav-link');
        let found = false;
        
        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(currentFunction)) {
                link.closest('.common-nav-item').classList.add('active');
                console.log('활성 메뉴 설정:', link.textContent.trim());
                found = true;
            }
        });
        
        if (!found) {
            console.log('매칭되는 링크를 찾을 수 없습니다. 현재 함수명:', currentFunction);
        }
    }
    
    // TOP 버튼 클릭 시 페이지 상단으로 스크롤
    const topButton = document.querySelector('.common-top-button');
    if (topButton) {
        topButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
