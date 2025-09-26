// DOM Elements
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const searchToggle = document.getElementById("searchToggle")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeProductPage()
  initializeSearch()
  initializeCategoryButtons()
  initializeProductActions()
  initializeQuickMenu()
})

// Product Page Initialization
function initializeProductPage() {
  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile navigation toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  })

  // Sidebar navigation
  const sidebarLinks = document.querySelectorAll(".sidebar .nav-link")
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all links
      sidebarLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      link.classList.add("active")

      // Here you would typically load different product categories
      console.log("Category selected:", link.textContent.trim())
    })
  })

  // Sub navigation
  const subLinks = document.querySelectorAll(".sub-link")
  subLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all sub links
      subLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      link.classList.add("active")

      // Update main content based on selection
      updateProductList(link.textContent.trim())
    })
  })
}

// Search functionality
function initializeSearch() {
  const searchBtn = document.querySelector(".search-btn")
  const searchInput = document.querySelector(".search-input")
  const searchSelect = document.querySelector(".search-select")

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      performSearch()
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch()
      }
    })
  }

  function performSearch() {
    const query = searchInput.value.trim()
    const searchType = searchSelect.value

    if (query) {
      console.log(`Searching for: "${query}" in ${searchType}`)
      // Here you would implement actual search functionality
      filterProducts(query, searchType)
    }
  }
}

// Category buttons functionality
function initializeCategoryButtons() {
  const categoryBtns = document.querySelectorAll(".category-btn")

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryBtns.forEach((b) => b.classList.remove("active"))

      // Add active class to clicked button
      btn.classList.add("active")

      // Update product list based on category
      const category = btn.textContent.trim()
      updateProductList(category)
    })
  })
}

// Product actions (catalog, CAD download)
function initializeProductActions() {
  const catalogBtns = document.querySelectorAll(".btn-catalog")
  const cadBtns = document.querySelectorAll(".btn-cad")

  catalogBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()

      // Add loading state
      const originalText = btn.innerHTML
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 다운로드 중...'
      btn.disabled = true

      // Simulate download
      setTimeout(() => {
        btn.innerHTML = originalText
        btn.disabled = false

        // Here you would trigger actual file download
        console.log("Downloading catalog...")
        showNotification("카탈로그 다운로드가 시작되었습니다.")
      }, 1500)
    })
  })

  cadBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()

      // Add loading state
      const originalText = btn.innerHTML
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 다운로드 중...'
      btn.disabled = true

      // Simulate download
      setTimeout(() => {
        btn.innerHTML = originalText
        btn.disabled = false

        // Here you would trigger actual file download
        console.log("Downloading CAD file...")
        showNotification("CAD 도면 다운로드가 시작되었습니다.")
      }, 1500)
    })
  })

  // Print functionality
  const printBtn = document.querySelector(".btn-print")
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print()
    })
  }
}

// Quick menu functionality
function initializeQuickMenu() {
  const quickItems = document.querySelectorAll(".quick-item")
  const topBtn = document.querySelector(".btn-top")

  quickItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()

      const service = item.querySelector("span").textContent.trim()
      console.log(`Quick menu clicked: ${service}`)

      // Here you would redirect to appropriate page or open modal
      showNotification(`${service} 페이지로 이동합니다.`)
    })
  })

  // Top button functionality
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })

    // Show/hide top button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        topBtn.style.opacity = "1"
      } else {
        topBtn.style.opacity = "0.7"
      }
    })
  }
}

// Pagination functionality
document.querySelectorAll(".page-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()

    // Remove active class from all buttons
    document.querySelectorAll(".page-btn").forEach((b) => b.classList.remove("active"))

    // Add active class to clicked button (if it's a number)
    if (!isNaN(btn.textContent)) {
      btn.classList.add("active")
    }

    const page = btn.textContent.trim()
    console.log(`Loading page: ${page}`)

    // Here you would load the appropriate page
    loadPage(page)
  })
})

// Utility functions
function updateProductList(category) {
  console.log(`Updating product list for category: ${category}`)

  // Add loading state
  const productList = document.querySelector(".product-list")
  productList.style.opacity = "0.5"

  // Simulate API call
  setTimeout(() => {
    productList.style.opacity = "1"
    showNotification(`${category} 제품 목록이 업데이트되었습니다.`)
  }, 500)
}

function filterProducts(query, searchType) {
  const productItems = document.querySelectorAll(".product-item")
  let visibleCount = 0

  productItems.forEach((item) => {
    const productName = item.querySelector("h3").textContent.toLowerCase()
    const productModel = item.querySelector(".product-model").textContent.toLowerCase()
    const productDesc = item.querySelector(".product-description").textContent.toLowerCase()

    let searchText = ""
    switch (searchType) {
      case "제품명":
        searchText = productName
        break
      case "모델명":
        searchText = productModel
        break
      default:
        searchText = productName + " " + productModel + " " + productDesc
    }

    if (searchText.includes(query.toLowerCase())) {
      item.style.display = "grid"
      visibleCount++
    } else {
      item.style.display = "none"
    }
  })

  showNotification(`${visibleCount}개의 제품이 검색되었습니다.`)
}

function loadPage(page) {
  // Add loading animation
  const productList = document.querySelector(".product-list")
  productList.style.opacity = "0.5"

  // Simulate page loading
  setTimeout(() => {
    productList.style.opacity = "1"

    // Scroll to top of product list
    productList.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, 300)
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = "notification"
  notification.textContent = message
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-size: 14px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  document.body.appendChild(notification)

  // Show notification
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form validation for search
document.querySelector(".search-input").addEventListener("input", function () {
  const value = this.value.trim()
  const searchBtn = document.querySelector(".search-btn")

  if (value.length > 0) {
    searchBtn.style.background = "#2563eb"
    searchBtn.disabled = false
  } else {
    searchBtn.style.background = "#6c757d"
    searchBtn.disabled = true
  }
})

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl + F to focus search
  if (e.ctrlKey && e.key === "f") {
    e.preventDefault()
    document.querySelector(".search-input").focus()
  }

  // Escape to clear search
  if (e.key === "Escape") {
    const searchInput = document.querySelector(".search-input")
    if (searchInput === document.activeElement) {
      searchInput.value = ""
      searchInput.blur()
    }
  }
})

// Performance optimization - lazy loading for images
const observerOptions = {
  threshold: 0.1,
  rootMargin: "50px 0px",
}

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        imageObserver.unobserve(img)
      }
    }
  })
}, observerOptions)

// Observe all product images
document.querySelectorAll(".product-image img").forEach((img) => {
  imageObserver.observe(img)
})

// 사이드바 메뉴 인터렉티브 기능
document.addEventListener('DOMContentLoaded', function() {
    // 메뉴 확장/축소 기능
    const expandableLinks = document.querySelectorAll('.nav-link.expandable');
    
    expandableLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const parentItem = this.parentElement;
            const subNav = parentItem.querySelector('.sub-nav');
            const isExpanded = this.classList.contains('expanded');
            
            // 다른 메뉴들 닫기
            expandableLinks.forEach(otherLink => {
                if (otherLink !== this) {
                    otherLink.classList.remove('expanded');
                    const otherSubNav = otherLink.parentElement.querySelector('.sub-nav');
                    if (otherSubNav) {
                        otherSubNav.classList.remove('expanded');
                    }
                }
            });
            
            // 현재 메뉴 토글
            if (isExpanded) {
                this.classList.remove('expanded');
                subNav.classList.remove('expanded');
            } else {
                this.classList.add('expanded');
                subNav.classList.add('expanded');
            }
        });
    });
    
    // 서브메뉴 링크 클릭 이벤트
    const subLinks = document.querySelectorAll('.sub-link');
    subLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 이전 활성 링크 제거
            subLinks.forEach(otherLink => {
                otherLink.classList.remove('active');
            });
            
            // 현재 링크 활성화
            this.classList.add('active');
            
            // 메인 메뉴 링크도 활성화
            const parentNavLink = this.closest('.nav-item').querySelector('.nav-link');
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            parentNavLink.classList.add('active');
        });
    });
    
    // 메인 메뉴 링크 클릭 이벤트 (서브메뉴가 없는 경우)
    const mainLinks = document.querySelectorAll('.nav-link:not(.expandable)');
    mainLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 이전 활성 링크 제거
            document.querySelectorAll('.nav-link').forEach(otherLink => {
                otherLink.classList.remove('active');
            });
            document.querySelectorAll('.sub-link').forEach(subLink => {
                subLink.classList.remove('active');
            });
            
            // 현재 링크 활성화
            this.classList.add('active');
        });
    });
    
    // 다운로드 섹션 클릭 이벤트
    const downloadItem = document.querySelector('.download-item');
    if (downloadItem) {
        downloadItem.addEventListener('click', function() {
            // 실제로는 파일 다운로드 로직을 구현
            alert('파일 다운로드를 시작합니다.');
        });
    }
    
    // 홈페이지 바로가기 버튼 클릭 이벤트
    const websiteBtn = document.querySelector('.website-btn');
    if (websiteBtn) {
        websiteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제로는 홈페이지로 이동하는 로직을 구현
            window.open('https://www.kyongbo.co.kr', '_blank');
        });
    }
    
    // 스크롤 이벤트로 사이드바 고정
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        let isScrolling = false;
        
        window.addEventListener('scroll', function() {
            if (!isScrolling) {
                window.requestAnimationFrame(function() {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const heroHeight = document.querySelector('.product-hero')?.offsetHeight || 0;
                    
                    if (scrollTop > heroHeight) {
                        sidebar.style.position = 'fixed';
                        sidebar.style.top = '20px';
                        sidebar.style.zIndex = '1000';
                    } else {
                        sidebar.style.position = 'sticky';
                        sidebar.style.top = '20px';
                        sidebar.style.zIndex = 'auto';
                    }
                    
                    isScrolling = false;
                });
                
                isScrolling = true;
            }
        });
    }
    
    // 메뉴 아이템 호버 효과
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(3px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // 서브메뉴 아이템 호버 효과
    const subNavItems = document.querySelectorAll('.sub-link');
    subNavItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(5px)';
        });
    });
    
    // 키보드 네비게이션 지원
    expandableLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // 접근성 향상을 위한 ARIA 속성 설정
    expandableLinks.forEach(link => {
        link.setAttribute('aria-expanded', 'false');
        link.setAttribute('role', 'button');
        link.setAttribute('tabindex', '0');
        
        const subNav = link.parentElement.querySelector('.sub-nav');
        if (subNav) {
            subNav.setAttribute('aria-hidden', 'true');
        }
    });
    
    // 메뉴 확장/축소 시 ARIA 속성 업데이트
    const originalClick = HTMLElement.prototype.click;
    expandableLinks.forEach(link => {
        const originalHandler = link.onclick;
        link.addEventListener('click', function() {
            const isExpanded = this.classList.contains('expanded');
            const subNav = this.parentElement.querySelector('.sub-nav');
            
            this.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
            if (subNav) {
                subNav.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
            }
        });
    });
    
    // 모바일 반응형 처리
    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // 모바일에서는 모든 메뉴 닫기
            expandableLinks.forEach(link => {
                link.classList.remove('expanded');
                const subNav = link.parentElement.querySelector('.sub-nav');
                if (subNav) {
                    subNav.classList.remove('expanded');
                }
            });
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 실행
    
    // 애니메이션 효과 개선
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    // 메뉴 아이템들을 관찰
    navItems.forEach(item => {
        observer.observe(item);
    });
    
    // 검색 기능 개선
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const menuItems = document.querySelectorAll('.nav-link span, .sub-link');
            
            menuItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                const parent = item.closest('.nav-item');
                
                if (text.includes(searchTerm)) {
                    parent.style.display = 'block';
                    item.style.backgroundColor = searchTerm ? '#ffeb3b' : '';
                } else {
                    if (searchTerm) {
                        parent.style.display = 'none';
                    } else {
                        parent.style.display = 'block';
                        item.style.backgroundColor = '';
                    }
                }
            });
        });
    }
});

// 제품 카테고리 버튼 기능
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 이전 활성 버튼 제거
            categoryBtns.forEach(otherBtn => {
                otherBtn.classList.remove('active');
            });
            
            // 현재 버튼 활성화
            this.classList.add('active');
            
            // 제품 목록 필터링 (실제 구현 시 제품 데이터에 따라 조정)
            const category = this.textContent;
            console.log('선택된 카테고리:', category);
        });
    });
    
    // 제품 리스트 아이템 호버 효과
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // 제품 액션 버튼 클릭 이벤트
    const catalogBtns = document.querySelectorAll('.btn-catalog');
    const cadBtns = document.querySelectorAll('.btn-cad');
    
    catalogBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-item').querySelector('.product-link').textContent;
            alert(`${productName}의 카탈로그를 다운로드합니다.`);
        });
    });
    
    cadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-item').querySelector('.product-link').textContent;
            alert(`${productName}의 CAD 도면을 다운로드합니다.`);
        });
    });
    
    // 페이지네이션 버튼 클릭 이벤트
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            pageBtns.forEach(otherBtn => {
                otherBtn.classList.remove('active');
            });
            this.classList.add('active');
            
            const pageNumber = this.textContent;
            console.log('페이지 이동:', pageNumber);
        });
    });
    
    // 검색 기능
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                console.log('검색어:', searchTerm);
                // 실제 검색 로직 구현
                alert(`"${searchTerm}"으로 검색합니다.`);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
    
    // 인쇄 버튼 기능
    const printBtn = document.querySelector('.btn-print');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    // 퀵 메뉴 기능
    const quickItems = document.querySelectorAll('.quick-item');
    quickItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const menuName = this.querySelector('span').textContent;
            alert(`${menuName} 페이지로 이동합니다.`);
        });
    });
    
    // 스크롤 투 탑 기능
    const topBtn = document.querySelector('.btn-top');
    if (topBtn) {
        topBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 스크롤 위치에 따라 버튼 표시/숨김
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                topBtn.style.opacity = '1';
            } else {
                topBtn.style.opacity = '0.5';
            }
        });
    }
});

// 성능 최적화를 위한 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 스크롤 이벤트 최적화
const optimizedScroll = debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebar) {
        if (scrollTop > 200) {
            sidebar.classList.add('scrolled');
        } else {
            sidebar.classList.remove('scrolled');
        }
    }
}, 10);

window.addEventListener('scroll', optimizedScroll);

// 로컬 스토리지를 이용한 메뉴 상태 저장
const MenuState = {
    save: function(category, isExpanded) {
        const states = JSON.parse(localStorage.getItem('menuStates') || '{}');
        states[category] = isExpanded;
        localStorage.setItem('menuStates', JSON.stringify(states));
    },
    
    load: function(category) {
        const states = JSON.parse(localStorage.getItem('menuStates') || '{}');
        return states[category] || false;
    },
    
    restore: function() {
        const expandableLinks = document.querySelectorAll('.nav-link.expandable');
        expandableLinks.forEach(link => {
            const category = link.dataset.category;
            const isExpanded = this.load(category);
            
            if (isExpanded) {
                link.classList.add('expanded');
                const subNav = link.parentElement.querySelector('.sub-nav');
                if (subNav) {
                    subNav.classList.add('expanded');
                }
            }
        });
    }
};

// 페이지 로드 시 메뉴 상태 복원
document.addEventListener('DOMContentLoaded', function() {
    MenuState.restore();
    
    // 메뉴 상태 변경 시 저장
    const expandableLinks = document.querySelectorAll('.nav-link.expandable');
    expandableLinks.forEach(link => {
        link.addEventListener('click', function() {
            const category = this.dataset.category;
            const isExpanded = this.classList.contains('expanded');
            MenuState.save(category, !isExpanded);
        });
    });
});
