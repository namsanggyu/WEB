// DOM Elements
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const themeToggle = document.getElementById("themeToggle")
const searchToggle = document.getElementById("searchToggle")
const searchOverlay = document.getElementById("searchOverlay")
const searchClose = document.getElementById("searchClose")
const searchInput = document.getElementById("searchInput")
const productSlider = document.getElementById("productSlider")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const sliderDots = document.querySelectorAll(".dot")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme()
  initializeAnimations()
  initializeCounters()
  initializeProductShowcase()
  initializeProductSlider()
  initializeParticles()
})

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)

  // Add transition effect
  document.body.style.transition = "all 0.3s ease"
  setTimeout(() => {
    document.body.style.transition = ""
  }, 300)
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i")
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
}

themeToggle.addEventListener("click", toggleTheme)

// Navigation
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Update active navigation link
  updateActiveNavLink()
})

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

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

// Mobile dropdown toggle
document.querySelectorAll(".nav-item").forEach((item) => {
  const link = item.querySelector(".nav-link")
  const dropdown = item.querySelector(".dropdown-menu")

  if (dropdown) {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault()
        item.classList.toggle("active")

        // Close other dropdowns
        document.querySelectorAll(".nav-item").forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })
      }
    })
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href")

    // Only handle section links, not dropdown toggles
    if (targetId && targetId.startsWith("#") && document.querySelector(targetId)) {
      e.preventDefault()
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      // Close mobile menu
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  })
})

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item")) {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active")
    })
  }
})

// Search Functionality
searchToggle.addEventListener("click", () => {
  searchOverlay.classList.add("active")
  searchInput.focus()
})

searchClose.addEventListener("click", () => {
  searchOverlay.classList.remove("active")
  searchInput.value = ""
})

searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    searchOverlay.classList.remove("active")
    searchInput.value = ""
  }
})

// Search suggestions
document.querySelectorAll(".suggestion-item").forEach((item) => {
  item.addEventListener("click", () => {
    searchInput.value = item.textContent
    // Here you would typically trigger a search
    console.log("Searching for:", item.textContent)
  })
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (searchOverlay.classList.contains("active")) {
      searchOverlay.classList.remove("active")
      searchInput.value = ""
    }
  }

  if (e.key === "/" && !searchOverlay.classList.contains("active")) {
    e.preventDefault()
    searchOverlay.classList.add("active")
    searchInput.focus()
  }
})

// Counter Animation
function initializeCounters() {
  const counters = document.querySelectorAll(".stat-number")
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        counterObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  counters.forEach((counter) => {
    counterObserver.observe(counter)
  })
}

function animateCounter(element) {
  const target = Number.parseInt(element.dataset.target)
  const duration = 2000
  const step = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += step
    element.textContent = Math.floor(current)

    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    }
  }, 16)
}

// Product Showcase
function initializeProductShowcase() {
  const showcaseItems = document.querySelectorAll(".product-card")
  const controlBtns = document.querySelectorAll(".control-btn")
  let currentIndex = 0

  function showProduct(index) {
    showcaseItems.forEach((item, i) => {
      item.classList.remove("active")
      if (i === index) {
        item.classList.add("active")
      }
    })

    controlBtns.forEach((btn, i) => {
      btn.classList.remove("active")
      if (i === index) {
        btn.classList.add("active")
      }
    })
  }

  controlBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      currentIndex = index
      showProduct(currentIndex)
    })
  })

  // Auto-rotate showcase
  setInterval(() => {
    currentIndex = (currentIndex + 1) % showcaseItems.length
    showProduct(currentIndex)
  }, 5000)
}

// Product Slider
function initializeProductSlider() {
  const slides = document.querySelectorAll(".product-slide")
  let currentSlide = 0

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active")
      if (i === index) {
        slide.classList.add("active")
      }
    })

    sliderDots.forEach((dot, i) => {
      dot.classList.remove("active")
      if (i === index) {
        dot.classList.add("active")
      }
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    showSlide(currentSlide)
  }

  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)

  sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Auto-advance slider
  setInterval(nextSlide, 8000)
}

// Particles Animation
function initializeParticles() {
  const particlesContainer = document.getElementById("particles")
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer)
  }
}

function createParticle(container) {
  const particle = document.createElement("div")
  particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 107, 53, 0.3);
        border-radius: 50%;
        pointer-events: none;
    `

  // Random position
  particle.style.left = Math.random() * 100 + "%"
  particle.style.top = Math.random() * 100 + "%"

  // Random animation
  const duration = 10 + Math.random() * 20
  const delay = Math.random() * 5

  particle.style.animation = `floatParticle ${duration}s linear ${delay}s infinite`

  container.appendChild(particle)
}

// Add particle animation keyframes
const particleStyles = document.createElement("style")
particleStyles.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`
document.head.appendChild(particleStyles)

// Scroll Animations
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease forwards"
        entry.target.style.opacity = "1"
      }
    })
  }, observerOptions)

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll(".category-card, .support-card, .section-header")
  animatableElements.forEach((el) => {
    el.style.opacity = "0"
    observer.observe(el)
  })
}

// Button Interactions
document.addEventListener("click", (e) => {
  // Category card clicks
  if (e.target.closest(".category-card")) {
    const card = e.target.closest(".category-card")
    const category = card.dataset.category

    // Add click effect
    card.style.transform = "scale(0.98)"
    setTimeout(() => {
      card.style.transform = ""
    }, 150)

    console.log("Category clicked:", category)
    // Here you would typically navigate to the category page
  }

  // Hero action buttons
  if (e.target.closest("#exploreBtn")) {
    document.querySelector("#products").scrollIntoView({
      behavior: "smooth",
    })
  }

  if (e.target.closest("#videoBtn")) {
    // Here you would typically open a video modal
    console.log("Video button clicked")
  }
})

// Parallax Effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".hero-shapes")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Performance optimizations
const debouncedResize = debounce(() => {
  // 리사이즈 관련 다른 로직이 필요하면 여기에 추가
}, 250)

window.addEventListener("resize", debouncedResize)

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

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
})

// Service Worker registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Animate hero elements
  const heroElements = document.querySelectorAll(".hero-content > *")
  heroElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    setTimeout(() => {
      el.style.transition = "all 0.8s ease"
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    }, index * 200)
  })
})

// Add CSS for fade in animation
const fadeInStyles = document.createElement("style")
fadeInStyles.textContent = `
    @keyframes fadeInUp {
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
document.head.appendChild(fadeInStyles)
