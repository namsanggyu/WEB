// TOP 버튼 클릭 시 페이지 상단으로 스크롤
document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.querySelector('.common-top-button');
    if (topButton) {
        topButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 좌측 서브메뉴 1차 메뉴 클릭 시 확장/축소 및 보색 반전 효과
    const expandableLinks = document.querySelectorAll('.product-nav-link.expandable');
    expandableLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 현재 클릭된 메뉴의 부모 nav-item
            const navItem = this.closest('.product-nav-item');
            const subNav = navItem.querySelector('.product-sub-nav');
            const expandIcon = this.querySelector('.expand-icon');
            
            // 다른 메뉴들의 expanded 클래스 제거
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
            
            // 현재 메뉴 토글
            this.classList.toggle('expanded');
            
            if (subNav) {
                if (this.classList.contains('expanded')) {
                    subNav.style.maxHeight = subNav.scrollHeight + 'px';
                    if (expandIcon) {
                        expandIcon.style.transform = 'rotate(180deg)';
                    }
                } else {
                    subNav.style.maxHeight = '0';
                    if (expandIcon) {
                        expandIcon.style.transform = 'rotate(0deg)';
                    }
                }
            }
        });
    });
});