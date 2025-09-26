// DOM Elements
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const searchToggle = document.getElementById("searchToggle")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeProductDetail()
  initializeNavigation()
  initializeTabs()
  initializeInteractions()
  initializeAnimations()
})

// Product Detail Page Initialization
function initializeProductDetail() {
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

  // Dropdown interactions for mobile
  const dropdownContainers = document.querySelectorAll(".dropdown-container")
  dropdownContainers.forEach((container) => {
    const navLink = container.querySelector(".nav-link")
    navLink.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault()
        container.classList.toggle("active")
      }
    })
  })
}

// Navigation Interactions
function initializeNavigation() {
  // Sidebar navigation
  const sidebarLinks = document.querySelectorAll(".sidebar .nav-link")
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all links
      sidebarLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      link.classList.add("active")

      // Add micro interaction
      link.style.transform = "scale(0.98)"
      setTimeout(() => {
        link.style.transform = ""
      }, 150)

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

      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

      console.log("Sub-category selected:", link.textContent.trim())
    })
  })

  // Dropdown links
  const dropdownLinks = document.querySelectorAll(".dropdown-link")
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Add click effect
      link.style.transform = "scale(0.95)"
      setTimeout(() => {
        link.style.transform = ""
      }, 150)

      console.log("Dropdown item clicked:", link.textContent.trim())
    })
  })
}

// Tab System
function initializeTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab")

      // Remove active class from all tabs and panes
      tabBtns.forEach((b) => b.classList.remove("active"))
      tabPanes.forEach((pane) => pane.classList.remove("active"))

      // Add active class to clicked tab and corresponding pane
      btn.classList.add("active")
      document.getElementById(targetTab).classList.add("active")

      // Add micro interaction
      btn.style.transform = "translateY(-2px)"
      setTimeout(() => {
        btn.style.transform = ""
      }, 200)

      // Scroll to tabs section
      document.querySelector(".product-tabs").scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  })
}

// Interactive Elements
function initializeInteractions() {
  // Product action buttons
  const actionBtns = document.querySelectorAll(".product-actions .glass-btn")
  actionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()

      // Add loading state
      const originalContent = btn.innerHTML
      const btnText = btn.querySelector("span").textContent

      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>처리 중...</span>'
      btn.disabled = true

      // Simulate processing
      setTimeout(() => {
        btn.innerHTML = originalContent
        btn.disabled = false

        // Show success notification
        showNotification(`${btnText} 요청이 완료되었습니다.`, "success")
      }, 2000)
    })
  })

  // Download buttons
  const downloadBtns = document.querySelectorAll(".download-btn")
  downloadBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()

      // Add download animation
      const originalContent = btn.innerHTML
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 다운로드 중...'
      btn.disabled = true

      // Simulate download
      setTimeout(() => {
        btn.innerHTML = originalContent
        btn.disabled = false

        showNotification("파일 다운로드가 시작되었습니다.", "success")
      }, 1500)
    })
  })

  // Quick menu items
  const quickItems = document.querySelectorAll(".quick-item")
  quickItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()

      const service = item.querySelector("span").textContent.trim()

      // Add click animation
      item.style.transform = "scale(0.95)"
      setTimeout(() => {
        item.style.transform = ""
      }, 150)

      showNotification(`${service} 페이지로 이동합니다.`, "info")
      console.log(`Quick menu clicked: ${service}`)
    })
  })

  // Top button
  const topBtn = document.querySelector(".btn-top")
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })

    // Show/hide based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        topBtn.style.opacity = "1"
        topBtn.style.transform = "translateY(0)"
      } else {
        topBtn.style.opacity = "0.7"
        topBtn.style.transform = "translateY(10px)"
      }
    })
  }

  // Image zoom functionality
  const zoomBtn = document.querySelector(".zoom-btn")
  if (zoomBtn) {
    zoomBtn.addEventListener("click", () => {
      const productImage = document.querySelector(".product-image img")
      openImageModal(productImage.src)
    })
  }

  // Table row hover effects
  const tableRows = document.querySelectorAll(".spec-table tr")
  tableRows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      row.style.transform = "translateX(5px)"
    })

    row.addEventListener("mouseleave", () => {
      row.style.transform = ""
    })
  })
}

// Animations and Effects
function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe cards and sections
  const animatedElements = document.querySelectorAll(".glass-card, .feature-card, .spec-card, .manual-card")
  animatedElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(el)
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroBackground = document.querySelector(".hero-background img")
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Floating animation for feature icons
  const featureIcons = document.querySelectorAll(".feature-icon, .spec-icon")
  featureIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.2}s`
    icon.addEventListener("mouseenter", () => {
      icon.style.animation = "pulse 0.6s ease"
    })
    icon.addEventListener("animationend", () => {
      icon.style.animation = ""
    })
  })
}

// Utility Functions
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`

  const colors = {
    success: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    error: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    info: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    warning: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  }

  notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        backdrop-filter: blur(20px);
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 300px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    `

  notification.textContent = message
  document.body.appendChild(notification)

  // Show notification
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Hide notification after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 400)
  }, 4000)
}

function openImageModal(imageSrc) {
  const modal = document.createElement("div")
  modal.className = "image-modal"
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(20px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        cursor: pointer;
    `

  const img = document.createElement("img")
  img.src = imageSrc
  img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `

  modal.appendChild(img)
  document.body.appendChild(modal)

  // Show modal
  setTimeout(() => {
    modal.style.opacity = "1"
    img.style.transform = "scale(1)"
  }, 10)

  // Close modal on click
  modal.addEventListener("click", () => {
    modal.style.opacity = "0"
    img.style.transform = "scale(0.8)"
    setTimeout(() => {
      document.body.removeChild(modal)
    }, 300)
  })

  // Close modal on escape key
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      modal.click()
      document.removeEventListener("keydown", handleEscape)
    }
  }
  document.addEventListener("keydown", handleEscape)
}

// Search functionality
if (searchToggle) {
  searchToggle.addEventListener("click", () => {
    showNotification("검색 기능을 준비 중입니다.", "info")
  })
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

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Alt + T to scroll to top
  if (e.altKey && e.key === "t") {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Alt + D to download catalog
  if (e.altKey && e.key === "d") {
    e.preventDefault()
    const catalogBtn = document.querySelector(".btn-primary")
    if (catalogBtn) catalogBtn.click()
  }
})

// Performance optimizations
const debouncedResize = debounce(() => {
  // Close dropdowns on resize
  const activeDropdowns = document.querySelectorAll(".dropdown-container.active")
  activeDropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active")
  })
}, 250)

window.addEventListener("resize", debouncedResize)

// Utility function for debouncing
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
  showNotification("일시적인 오류가 발생했습니다.", "error")
})

// Page load animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Animate main elements
  const mainElements = document.querySelectorAll(".product-header, .product-tabs")
  mainElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    setTimeout(
      () => {
        el.style.transition = "all 0.8s ease"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      },
      index * 200 + 300,
    )
  })
})

// Add loading styles
const loadingStyles = document.createElement("style")
loadingStyles.textContent = `
    .loaded .glass-card {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(loadingStyles)
