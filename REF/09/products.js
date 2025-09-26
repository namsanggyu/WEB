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
