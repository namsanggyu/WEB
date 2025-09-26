// DOM Elements
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const searchBtn = document.getElementById("searchBtn")
const searchOverlay = document.getElementById("searchOverlay")
const searchClose = document.getElementById("searchClose")
const searchInput = document.getElementById("searchInput")

// Navigation state
let isMenuOpen = false
let activeDropdown = null

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  initializeSearch()
  initializeMobileMenu()
  initializeScrollEffects()
})

// Navigation Initialization
function initializeNavigation() {
  const navItems = document.querySelectorAll(".nav-item")

  navItems.forEach((item) => {
    const link = item.querySelector(".nav-link")
    const dropdown = item.querySelector(".dropdown-menu")

    if (dropdown) {
      // Desktop hover effects
      if (window.innerWidth > 768) {
        item.addEventListener("mouseenter", () => {
          showDropdown(item, dropdown)
        })

        item.addEventListener("mouseleave", () => {
          hideDropdown(item, dropdown)
        })
      }

      // Mobile click effects
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault()
          toggleMobileDropdown(item, dropdown)
        }
      })
    }
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) {
      hideAllDropdowns()
    }
  })
}

// Dropdown Functions
function showDropdown(item, dropdown) {
  // Hide other dropdowns first
  hideAllDropdowns()

  // Show current dropdown
  dropdown.style.opacity = "1"
  dropdown.style.visibility = "visible"
  dropdown.style.transform = "translateY(0)"

  // Add active class
  item.classList.add("active")
  activeDropdown = item

  // Animate dropdown items
  animateDropdownItems(dropdown, "in")
}

function hideDropdown(item, dropdown) {
  dropdown.style.opacity = "0"
  dropdown.style.visibility = "hidden"
  dropdown.style.transform = "translateY(-10px)"

  item.classList.remove("active")

  if (activeDropdown === item) {
    activeDropdown = null
  }
}

function hideAllDropdowns() {
  const navItems = document.querySelectorAll(".nav-item")
  navItems.forEach((item) => {
    const dropdown = item.querySelector(".dropdown-menu")
    if (dropdown) {
      hideDropdown(item, dropdown)
    }
  })
}

function toggleMobileDropdown(item, dropdown) {
  const isVisible = dropdown.style.display === "block"

  // Hide all other dropdowns
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.style.display = "none"
  })

  // Toggle current dropdown
  if (isVisible) {
    dropdown.style.display = "none"
    item.classList.remove("active")
  } else {
    dropdown.style.display = "block"
    item.classList.add("active")
    animateDropdownItems(dropdown, "in")
  }
}

// Animate dropdown items
function animateDropdownItems(dropdown, direction) {
  const items = dropdown.querySelectorAll(".dropdown-section a")
  const delay = direction === "in" ? 50 : 0

  items.forEach((item, index) => {
    setTimeout(() => {
      if (direction === "in") {
        item.style.opacity = "0"
        item.style.transform = "translateX(-20px)"
        item.style.transition = "all 0.3s ease"

        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "translateX(0)"
        }, 10)
      }
    }, index * delay)
  })
}

// Search Functionality
function initializeSearch() {
  searchBtn.addEventListener("click", openSearch)
  searchClose.addEventListener("click", closeSearch)

  // Close search on overlay click
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeSearch()
    }
  })

  // Search input functionality
  searchInput.addEventListener("input", handleSearch)

  // Suggestion tags
  const suggestionTags = document.querySelectorAll(".tag")
  suggestionTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      searchInput.value = tag.textContent
      handleSearch()
    })
  })

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearch()
      hideAllDropdowns()
    }

    if (e.key === "/" && !searchOverlay.classList.contains("active")) {
      e.preventDefault()
      openSearch()
    }

    if (e.ctrlKey && e.key === "k") {
      e.preventDefault()
      openSearch()
    }
  })
}

function openSearch() {
  searchOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
  setTimeout(() => {
    searchInput.focus()
  }, 300)
}

function closeSearch() {
  searchOverlay.classList.remove("active")
  document.body.style.overflow = "auto"
  searchInput.value = ""
}

function handleSearch() {
  const query = searchInput.value.toLowerCase()
  console.log("Searching for:", query)

  // Here you would typically implement actual search functionality
  // For demo purposes, we'll just log the search query

  if (query.length > 2) {
    // Simulate search results
    showSearchResults(query)
  }
}

function showSearchResults(query) {
  // This would typically show search results
  // For demo purposes, we'll just update the suggestions
  const suggestions = document.querySelector(".search-suggestions")
  const existingResults = suggestions.querySelector(".search-results")

  if (existingResults) {
    existingResults.remove()
  }

  const resultsDiv = document.createElement("div")
  resultsDiv.className = "search-results"
  resultsDiv.innerHTML = `
        <h4>검색 결과: "${query}"</h4>
        <div class="result-items">
            <div class="result-item">
                <i class="fas fa-microchip"></i>
                <span>K-PAM 5500 디지털 계전기</span>
            </div>
            <div class="result-item">
                <i class="fas fa-bolt"></i>
                <span>보호 계전기 시리즈</span>
            </div>
            <div class="result-item">
                <i class="fas fa-tachometer-alt"></i>
                <span>전력 계측기</span>
            </div>
        </div>
    `

  suggestions.appendChild(resultsDiv)
}

// Mobile Menu
function initializeMobileMenu() {
  navToggle.addEventListener("click", toggleMobileMenu)

  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768 && !link.querySelector(".nav-arrow")) {
        closeMobileMenu()
      }
    })
  })
}

function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen
  navMenu.classList.toggle("active", isMenuOpen)
  navToggle.classList.toggle("active", isMenuOpen)

  // Prevent body scroll when menu is open
  document.body.style.overflow = isMenuOpen ? "hidden" : "auto"

  // Animate menu items
  if (isMenuOpen) {
    animateMobileMenuItems("in")
  }
}

function closeMobileMenu() {
  isMenuOpen = false
  navMenu.classList.remove("active")
  navToggle.classList.remove("active")
  document.body.style.overflow = "auto"

  // Hide all mobile dropdowns
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.style.display = "none"
  })
}

function animateMobileMenuItems(direction) {
  const navItems = document.querySelectorAll(".nav-item")
  const delay = direction === "in" ? 100 : 0

  navItems.forEach((item, index) => {
    setTimeout(() => {
      if (direction === "in") {
        item.style.opacity = "0"
        item.style.transform = "translateX(-30px)"
        item.style.transition = "all 0.4s ease"

        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "translateX(0)"
        }, 10)
      }
    }, index * delay)
  })
}

// Scroll Effects
function initializeScrollEffects() {
  let lastScrollY = window.scrollY
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    // Hide/show header on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.style.transform = "translateY(-100%)"
    } else {
      header.style.transform = "translateY(0)"
    }

    // Add shadow on scroll
    if (currentScrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    lastScrollY = currentScrollY
  })
}

// Language Selector
const languageSelector = document.querySelector(".language-selector")
if (languageSelector) {
  const langBtn = languageSelector.querySelector(".lang-btn")
  const langDropdown = languageSelector.querySelector(".lang-dropdown")

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    langDropdown.style.opacity = langDropdown.style.opacity === "1" ? "0" : "1"
    langDropdown.style.visibility = langDropdown.style.visibility === "visible" ? "hidden" : "visible"
  })

  // Language selection
  const langOptions = langDropdown.querySelectorAll("a")
  langOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault()
      const selectedLang = option.textContent
      langBtn.querySelector("span").textContent =
        selectedLang === "한국어" ? "KOR" : selectedLang === "English" ? "ENG" : "CHN"

      // Hide dropdown
      langDropdown.style.opacity = "0"
      langDropdown.style.visibility = "hidden"

      console.log("Language changed to:", selectedLang)
    })
  })
}

// Resize Handler
window.addEventListener(
  "resize",
  debounce(() => {
    if (window.innerWidth > 768) {
      closeMobileMenu()
      hideAllDropdowns()

      // Reset mobile dropdown styles
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = ""
      })
    }
  }, 250),
)

// Utility Functions
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

// Performance Optimization
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observe demo cards for animation
document.querySelectorAll(".demo-card").forEach((card) => {
  observer.observe(card)
})

// Add CSS for animations
const animationStyles = document.createElement("style")
animationStyles.textContent = `
    .animate-in {
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
    
    .search-results {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--gray-200);
    }
    
    .search-results h4 {
        color: var(--gray-900);
        margin-bottom: 1rem;
        font-size: 1.125rem;
    }
    
    .result-items {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .result-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background: var(--gray-50);
        border-radius: var(--radius-lg);
        cursor: pointer;
        transition: all var(--transition-normal);
    }
    
    .result-item:hover {
        background: var(--accent-500);
        color: var(--white);
        transform: translateX(5px);
    }
    
    .result-item i {
        color: var(--accent-500);
        width: 16px;
        text-align: center;
    }
    
    .result-item:hover i {
        color: var(--white);
    }
    
    .header.scrolled {
        box-shadow: var(--shadow-xl);
    }
`
document.head.appendChild(animationStyles)

// Error Handling
window.addEventListener("error", (e) => {
  console.error("Navigation error:", e.error)
})

// Accessibility Enhancements
document.addEventListener("keydown", (e) => {
  // Tab navigation for dropdowns
  if (e.key === "Tab" && activeDropdown) {
    const focusableElements = activeDropdown.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  // Arrow key navigation
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    const focusedElement = document.activeElement
    if (focusedElement.closest(".dropdown-menu")) {
      e.preventDefault()
      const links = Array.from(focusedElement.closest(".dropdown-menu").querySelectorAll("a"))
      const currentIndex = links.indexOf(focusedElement)

      if (e.key === "ArrowDown") {
        const nextIndex = (currentIndex + 1) % links.length
        links[nextIndex].focus()
      } else {
        const prevIndex = (currentIndex - 1 + links.length) % links.length
        links[prevIndex].focus()
      }
    }
  }
})

// Initialize tooltips for better UX
function initializeTooltips() {
  const tooltipElements = document.querySelectorAll("[data-tooltip]")

  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", showTooltip)
    element.addEventListener("mouseleave", hideTooltip)
  })
}

function showTooltip(e) {
  const text = e.target.getAttribute("data-tooltip")
  const tooltip = document.createElement("div")
  tooltip.className = "tooltip"
  tooltip.textContent = text
  document.body.appendChild(tooltip)

  const rect = e.target.getBoundingClientRect()
  tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px"
  tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px"
}

function hideTooltip() {
  const tooltip = document.querySelector(".tooltip")
  if (tooltip) {
    tooltip.remove()
  }
}

// Initialize all features
initializeTooltips()

console.log("KyongBo Electric Navigation System Initialized Successfully! 🚀")
