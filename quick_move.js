// TOP 버튼 클릭 시 페이지 상단으로 스크롤
document.addEventListener('DOMContentLoaded', function() {
    console.log('Quick Move JS 로드됨');
    
    // TOP 버튼 이벤트
    const topButton = document.querySelector('.common-top-button');
    if (topButton) {
        topButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 1차 메뉴 클릭 시 확장/축소 처리
    const expandableLinks = document.querySelectorAll('.product-nav-link.expandable');
    expandableLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 서브메뉴 링크 클릭인 경우 이벤트 처리 중단
            if (e.target.closest('.product-sub-link')) {
                return; // 서브메뉴 클릭은 여기서 처리하지 않음
            }
            
            e.preventDefault();
            console.log('1차 메뉴 클릭:', this.textContent.trim());
            console.log('현재 expanded 상태:', this.classList.contains('expanded'));
            
            const navItem = this.closest('.product-nav-item');
            const subNav = navItem.querySelector('.product-sub-nav');
            const expandIcon = this.querySelector('.expand-icon');
            
            // 다른 메뉴들 축소
            expandableLinks.forEach(otherLink => {
                if (otherLink !== this) {
                    otherLink.classList.remove('expanded');
                    const otherNavItem = otherLink.closest('.product-nav-item');
                    const otherSubNav = otherNavItem.querySelector('.product-sub-nav');
                    const otherExpandIcon = otherLink.querySelector('.expand-icon');
                    
                    if (otherSubNav) {
                        otherSubNav.style.maxHeight = '0';
                    }
                    if (otherExpandIcon) {
                        otherExpandIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // 현재 메뉴 강제 확장 (토글 대신)
            this.classList.add('expanded');
            
            if (subNav) {
                subNav.style.maxHeight = subNav.scrollHeight + 'px';
                if (expandIcon) {
                    expandIcon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });

    // 서브메뉴 클릭 시 페이지 이동 처리
    const subLinks = document.querySelectorAll('.product-sub-link');
    subLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('서브메뉴 클릭:', this.href);
            // 이벤트 버블링 차단하여 부모 1차 메뉴 이벤트 방지
            e.stopPropagation();
            // 서브메뉴는 기본 동작 허용 (페이지 이동)
            // preventDefault를 호출하지 않음
        });
    });

    // 서버사이드에서 active 클래스가 적용된 메뉴 자동 확장
    const activeSubLink = document.querySelector('.product-sub-link.active');
    const activeNavLink = document.querySelector('.product-nav-link.expandable.active');
    
    console.log('Active Sub Link:', activeSubLink);
    console.log('Active Nav Link:', activeNavLink);
    console.log('Total expandable links:', expandableLinks.length);
    console.log('Total sub links:', subLinks.length);
    
    // URL 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const flg1 = urlParams.get('flg1');
    const flg2 = urlParams.get('flg2');
    console.log('URL Parameters - flg1:', flg1, 'flg2:', flg2);
    
    // 확장할 1차 메뉴 결정
    let targetNavLink = null;
    
    if (activeNavLink) {
        // 1차 메뉴가 직접 active인 경우
        targetNavLink = activeNavLink;
    } else if (activeSubLink) {
        // 2차 메뉴가 active인 경우, 부모 1차 메뉴 찾기
        const parentNavItem = activeSubLink.closest('.product-nav-item');
        targetNavLink = parentNavItem.querySelector('.product-nav-link.expandable');
    }
    
    // 확장할 메뉴가 있고 아직 확장되지 않은 경우
    if (targetNavLink && !targetNavLink.classList.contains('expanded')) {
        // 다른 모든 1차 메뉴들을 축소
        expandableLinks.forEach(otherLink => {
            if (otherLink !== targetNavLink) {
                otherLink.classList.remove('expanded');
                const otherNavItem = otherLink.closest('.product-nav-item');
                const otherSubNav = otherNavItem.querySelector('.product-sub-nav');
                const otherExpandIcon = otherLink.querySelector('.expand-icon');
                
                if (otherSubNav) {
                    otherSubNav.style.maxHeight = '0';
                }
                if (otherExpandIcon) {
                    otherExpandIcon.style.transform = 'rotate(0deg)';
                }
            }
        });
        
        // 현재 1차 메뉴 확장
        targetNavLink.classList.add('expanded');
        const navItem = targetNavLink.closest('.product-nav-item');
        const subNav = navItem.querySelector('.product-sub-nav');
        const expandIcon = targetNavLink.querySelector('.expand-icon');
        
        if (subNav) {
            subNav.style.maxHeight = subNav.scrollHeight + 'px';
        }
        if (expandIcon) {
            expandIcon.style.transform = 'rotate(180deg)';
        }
    }
});