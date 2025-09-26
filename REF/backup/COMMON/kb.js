/*
 * 경보전기 웹사이트 자바스크립트 파일
 * 작성자: 남상규
 * 작성일: 2025.08.29
 * 주요기능: 모바일 메뉴, 랜덤 영상 재생, 검색 기능
 * 
 * 이 파일은 웹사이트의 모든 움직이는 기능들을 담당합니다.
 * 마치 리모컨처럼 버튼을 누르면 화면이 바뀌고, 메뉴가 나타나고, 
 * 검색창이 열리는 모든 동작을 제어합니다.
 */

// ========================================
// 📱 모바일 메뉴 기능 (스마트폰용 메뉴)
// ========================================

// 📋 HTML에서 필요한 요소들을 찾아서 변수에 저장
// 마치 TV 리모컨의 버튼들을 찾는 것과 같습니다
const navToggle = document.getElementById('navToggle');     // 햄버거 메뉴 버튼 (≡ 모양)
const mobileMenu = document.getElementById('mobileMenu');   // 모바일에서 나타나는 전체 메뉴
const mobileClose = document.getElementById('mobileClose'); // 메뉴 닫기 버튼 (X 모양)
const body = document.body;                                 // 웹페이지 전체 영역

// 🔄 모바일 메뉴를 열고 닫는 함수 (토글 = 스위치 on/off 같은 기능)
function toggleMobileMenu() {
    // 햄버거 버튼에 'active' 클래스를 추가하거나 제거 (애니메이션 효과)
    navToggle.classList.toggle('active');
    
    // 모바일 메뉴에 'active' 클래스를 추가하거나 제거 (메뉴 보이기/숨기기)
    mobileMenu.classList.toggle('active');
    
    // 메뉴가 열려있으면 배경 스크롤 막기, 닫혀있으면 스크롤 허용
    // 메뉴가 열려있을 때 뒤에 있는 페이지가 움직이지 않게 하는 기능
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// ❌ 모바일 메뉴를 닫는 함수
function closeMobileMenu() {
    // 모든 활성화된 효과들을 제거 (원래 상태로 되돌리기)
    navToggle.classList.remove('active');   // 햄버거 버튼 원래대로
    mobileMenu.classList.remove('active');  // 메뉴 숨기기
    body.style.overflow = '';               // 배경 스크롤 다시 허용
}

// 👆 버튼 클릭 이벤트 연결 (버튼을 누르면 함수가 실행되도록)
// 만약 버튼이 존재한다면 클릭 이벤트를 연결
if (navToggle) navToggle.addEventListener('click', toggleMobileMenu);  // 햄버거 버튼 클릭시
if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu); // X 버튼 클릭시

// 🖱️ 메뉴 바깥쪽을 클릭하면 메뉴 닫기
if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
        // 클릭한 곳이 메뉴 배경(바깥쪽)이면 메뉴 닫기
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });
}

// 📂 모바일 메뉴 안의 드롭다운 기능 (메뉴 안의 또 다른 메뉴들)
const mobileNavHeaders = document.querySelectorAll('.mobile-nav-header');

// 각 메뉴 제목들에 클릭 이벤트 추가
mobileNavHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // 클릭한 메뉴가 어떤 드롭다운을 열어야 하는지 확인
        const toggleTarget = header.getAttribute('data-toggle');
        const dropdown = document.getElementById(`mobile-${toggleTarget}`);
        
        // 🔄 다른 열려있는 드롭다운들은 모두 닫기 (한 번에 하나만 열리도록)
        mobileNavHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {  // 지금 클릭한 것이 아닌 다른 메뉴들
                otherHeader.classList.remove('active');
                const otherToggle = otherHeader.getAttribute('data-toggle');
                const otherDropdown = document.getElementById(`mobile-${otherToggle}`);
                if (otherDropdown) {
                    otherDropdown.classList.remove('active');
                }
            }
        });
        
        // 📂 현재 클릭한 드롭다운 열기/닫기
        header.classList.toggle('active');
        if (dropdown) {
            dropdown.classList.toggle('active');
        }
    });
});

// 📱➡️💻 화면 크기가 커지면 모바일 메뉴 자동으로 닫기
// 스마트폰에서 컴퓨터 화면으로 바뀔 때 모바일 메뉴가 계속 열려있으면 이상하니까
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {  // 화면 너비가 1024px보다 크면 (컴퓨터 화면)
        closeMobileMenu();
    }
});

// 📱 모바일에서 터치 스크롤 제어
// 메뉴가 열려있을 때 뒤쪽 페이지가 스크롤되지 않도록 막는 기능
document.addEventListener('touchmove', (e) => {
    // 메뉴가 열려있고, 터치한 곳이 메뉴 영역이 아니면 스크롤 막기
    if (mobileMenu && mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target)) {
        e.preventDefault();  // 스크롤 동작 취소
    }
}, { passive: false });

// ========================================
// 🎬 랜덤 배경 영상 재생 시스템 (메인 화면 배경 영상 관리)
// ========================================

// 🎭 영상 플레이어 클래스 - 마치 영화관의 영사기 같은 역할
class RandomVideoPlayer {
    // 🏗️ 생성자 - 영상 플레이어를 만들 때 처음 실행되는 부분
    constructor() {
        // 📁 재생할 영상 파일들의 목록 (배열 = 여러 개를 순서대로 담는 상자)
        // VIDEO 폴더 안에 있는 9개의 영상 파일들
        this.videoSources = [
            './VIDEO/kyongbo-hero-bg9.mp4',  // 영상 1번
            './VIDEO/kyongbo-hero-bg2.mp4',  // 영상 2번
            './VIDEO/kyongbo-hero-bg3.mp4',  // 영상 3번
            './VIDEO/kyongbo-hero-bg4.mp4',  // 영상 4번
            './VIDEO/kyongbo-hero-bg5.mp4',  // 영상 5번
            './VIDEO/kyongbo-hero-bg6.mp4',  // 영상 6번
            './VIDEO/kyongbo-hero-bg7.mp4',  // 영상 7번
            './VIDEO/kyongbo-hero-bg8.mp4',  // 영상 8번
            './VIDEO/kyongbo-hero-bg.mp4'    // 영상 9번
        ];
        
        // 📊 현재 재생 중인 영상의 번호 (0부터 시작)
        this.currentVideoIndex = 0;
        
        // 🎥 HTML에서 영상을 보여주는 태그를 찾아서 저장
        this.videoElement = document.getElementById('heroVideo');
        
        // 📝 이미 재생한 영상들을 기록하는 목록 (같은 영상이 연속으로 나오지 않게)
        this.playedVideos = [];
        
        // 🚀 초기화 함수 실행 (영상 플레이어 준비 완료!)
        this.init();
    }
    
    // 🚀 초기화 함수 - 영상 플레이어를 사용할 준비를 하는 함수
    init() {
        // ❗ 영상 태그가 없으면 에러 메시지 출력하고 종료
        if (!this.videoElement) {
            console.error('영상 태그를 찾을 수 없습니다!');
            return;
        }
        
        // 🎲 첫 번째 영상을 랜덤으로 선택해서 재생
        this.playRandomVideo();
        
        // 🔚 영상이 끝났을 때 자동으로 다음 영상 재생
        this.videoElement.addEventListener('ended', () => {
            console.log('🎬 영상이 끝났습니다. 다음 랜덤 영상을 재생합니다.');
            this.playNextRandomVideo();
        });
        
        // 🔄 영상이 자동으로 반복되지 않도록 설정 제거
        this.videoElement.removeAttribute('loop');
            
        // ❌ 영상 로드 중 에러가 발생하면 다음 영상으로 넘어가기
        this.videoElement.addEventListener('error', (e) => {
            console.warn('영상 로드 중 에러 발생:', e);
            this.playNextRandomVideo();
        });
        
        // ✅ 영상이 성공적으로 로드되었을 때 알림
        this.videoElement.addEventListener('loadeddata', () => {
            console.log('영상 로드 완료:', this.getCurrentVideoPath());
        });
    }
    
    // 🎲 랜덤 번호 생성기 (같은 영상이 연속으로 나오지 않게 하는 기능)
    getRandomVideoIndex() {
        // 📚 모든 영상을 다 봤으면 목록 초기화 (처음부터 다시)
        if (this.playedVideos.length >= this.videoSources.length) {
            this.playedVideos = [];
        }
        
        // 🔍 아직 보지 않은 영상들만 골라내기
        const availableIndices = this.videoSources
            .map((_, index) => index)  // 모든 영상의 번호를 만들고
            .filter(index => !this.playedVideos.includes(index));  // 이미 본 것은 제외
        
        // 🎯 남은 영상들 중에서 랜덤으로 하나 선택
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        return availableIndices[randomIndex];
    }
    
    // 🎲 랜덤 영상 재생하기
    playRandomVideo() {
        // 🎯 랜덤으로 영상 번호 선택
        const randomIndex = this.getRandomVideoIndex();
        this.currentVideoIndex = randomIndex;
        
        // 📝 선택한 영상을 '이미 본 목록'에 추가
        this.playedVideos.push(randomIndex);
        
        // 🎬 선택된 영상의 파일 경로 가져오기
        const videoPath = this.videoSources[randomIndex];
        
        // 🔄 영상 소스 변경해서 재생
        this.changeVideoSource(videoPath);
    }
    
    // ➡️ 다음 랜덤 영상으로 넘어가기 (부드러운 전환 효과 포함)
    playNextRandomVideo() {
        // 🌅 현재 영상을 서서히 흐리게 만들고
        this.fadeOut(() => {
            // 🎲 새로운 랜덤 영상 재생하고
            this.playRandomVideo();
            // 🌄 다시 선명하게 만들기
            this.fadeIn();
        });
    }
    
    // 🔄 영상 파일 바꾸기 (새로운 영상으로 교체하는 함수)
    changeVideoSource(newSource) {
        try {
            // 🗑️ 기존 영상 파일 정보들 모두 삭제
            const sources = this.videoElement.querySelectorAll('source');
            sources.forEach(source => source.remove());
            
            // 📄 새로운 영상 파일 정보 만들기
            const sourceElement = document.createElement('source');
            sourceElement.src = newSource;           // 영상 파일 경로
            sourceElement.type = 'video/mp4';       // 영상 파일 형식
            
            // 📎 새로운 영상 정보를 영상 태그에 추가
            this.videoElement.appendChild(sourceElement);
            
            // 🔄 영상 다시 로드하기
            this.videoElement.load();
            
            // ▶️ 영상 자동 재생 시작
            const playPromise = this.videoElement.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('영상 재생 시작:', newSource);
                    })
                    .catch(error => {
                        console.warn('영상 재생 실패:', error);
                    });
            }
        } catch (error) {
            console.error('영상 소스 변경 중 에러:', error);
        }
    }
    
    // 📍 현재 재생 중인 영상 파일 경로 알아내기
    getCurrentVideoPath() {
        return this.videoSources[this.currentVideoIndex];
    }
    
    // 🌅 페이드 아웃 효과 (영상을 서서히 흐리게 만들기)
    fadeOut(callback) {
        // 🎨 0.5초 동안 서서히 투명하게 만들기
        this.videoElement.style.transition = 'opacity 0.5s ease-in-out';
        this.videoElement.style.opacity = '0.3';  // 30%만 보이게
        
        // ⏰ 0.5초 후에 다음 작업 실행
        setTimeout(() => {
            if (callback) callback();  // 전달받은 함수 실행
        }, 500);
    }
    
    // 🌄 페이드 인 효과 (영상을 서서히 선명하게 만들기)
    fadeIn() {
        // ⏰ 0.1초 후에 다시 선명하게 만들기
        setTimeout(() => {
            this.videoElement.style.opacity = '1';  // 100% 선명하게
        }, 100);
    }
    
    // 🎯 특정 번호의 영상 바로 재생하기 (개발자용 기능)
    playSpecificVideo(index) {
        // 📊 유효한 영상 번호인지 확인
        if (index >= 0 && index < this.videoSources.length) {
            this.currentVideoIndex = index;
            this.changeVideoSource(this.videoSources[index]);
        }
    }
    
    // 📊 현재 영상 플레이어 상태 정보 가져오기 (개발자용)
    getStatus() {
        return {
            currentIndex: this.currentVideoIndex,           // 현재 영상 번호
            currentVideo: this.getCurrentVideoPath(),       // 현재 영상 파일 경로
            playedVideos: [...this.playedVideos],          // 이미 본 영상 목록
            totalVideos: this.videoSources.length          // 전체 영상 개수
        };
    }
}

// ========================================
// 🔍 검색 기능 구현 (웹사이트에서 원하는 내용 찾기)
// ========================================

// 🔎 검색 관리자 클래스 - 마치 도서관 사서처럼 검색을 도와주는 역할
class SearchManager {
    // 🏗️ 생성자 - 검색 기능을 만들 때 처음 실행되는 부분
    constructor() {
        // 🔍 HTML에서 검색 관련 요소들을 찾아서 저장
        this.searchBtn = document.getElementById("searchBtn")                    // 메인 검색 버튼
        this.searchProductBtn = document.querySelector(".search-product-btn")   // 제품 검색 버튼
        this.searchOverlay = document.getElementById("searchOverlay")           // 검색창 배경 (전체 화면)
        this.searchClose = document.getElementById("searchClose")               // 검색창 닫기 버튼 (X)
        this.searchInput = document.getElementById("searchInput")               // 검색어 입력하는 곳
        this.searchContainer = document.querySelector(".search-container")      // 검색창 전체 박스
        
        // 📊 검색창이 열려있는지 확인하는 상태 변수 (true = 열림, false = 닫힘)
        this.isSearchOpen = false
        
        // 🚀 초기화 함수 실행 (검색 기능 준비 완료!)
        this.init()
    }
    
    // 🚀 초기화 함수 - 모든 검색 기능들을 준비하는 함수
    init() {
        this.initializeSearchEvents()      // 버튼 클릭 등 이벤트 설정
        this.initializeKeyboardShortcuts() // 키보드 단축키 설정 (Ctrl+K 등)
        this.initializeAccessibility()     // 장애인 접근성 기능 설정
        this.initializeAdvancedEffects()   // 예쁜 애니메이션 효과 설정
    }
    
    // 🎯 검색 관련 이벤트들 설정하기 (버튼 클릭하면 뭘 할지 정하기)
    initializeSearchEvents() {
        // 🔍 메인 검색 버튼 클릭했을 때
        if (this.searchBtn) {
            this.searchBtn.addEventListener("click", (e) => {
                this.addRippleEffect(e)  // 버튼 클릭시 물결 효과
                this.openSearch()        // 검색창 열기
            })
        }
        
        // 🔍 제품 검색 버튼 클릭했을 때 (메인 검색과 같은 동작)
        if (this.searchProductBtn) {
            this.searchProductBtn.addEventListener("click", (e) => {
                this.addRippleEffect(e)  // 버튼 클릭시 물결 효과
                this.openSearch()        // 검색창 열기
            })
        }
        
        // ❌ 검색창 닫기 버튼 클릭했을 때
        if (this.searchClose) {
            this.searchClose.addEventListener("click", () => this.closeSearch())
        }
        
        // 🖱️ 검색창 배경(바깥쪽)을 클릭하면 검색창 닫기
        if (this.searchOverlay) {
            this.searchOverlay.addEventListener("click", (e) => {
                // 클릭한 곳이 정확히 배경이면 (검색창 내부가 아니면) 닫기
                if (e.target === this.searchOverlay) {
                    this.closeSearch()
                }
            })
        }
        
        // ⌨️ 검색어 입력할 때마다 실행되는 기능
        if (this.searchInput) {
            this.searchInput.addEventListener("input", (e) => this.handleSearch(e.target.value))
        }
        
        // 🏷️ 인기 검색어 태그들 클릭했을 때 (예: "K-PAM 5500" 클릭)
        const suggestionTags = document.querySelectorAll(".tag")
        suggestionTags.forEach((tag) => {
            tag.addEventListener("click", () => {
                // 클릭한 태그의 텍스트를 검색창에 입력
                this.searchInput.value = tag.textContent
                // 그 검색어로 검색 실행
                this.handleSearch(tag.textContent)
            })
        })
    }
    
    // 🔓 검색창 열기 함수
    openSearch() {
        // ❗ 검색 오버레이가 없으면 함수 종료
        if (!this.searchOverlay) return
        
        // 🎨 검색창에 'active' 클래스 추가 (CSS로 보이게 만들기)
        this.searchOverlay.classList.add("active")
        
        // 🚫 검색창이 열려있을 때 뒤쪽 페이지 스크롤 막기
        document.body.style.overflow = "hidden"
        
        // 📊 검색창이 열려있다고 상태 변경
        this.isSearchOpen = true
        
        // ⏰ 0.3초 후에 검색 입력창에 자동으로 커서 이동
        setTimeout(() => {
            if (this.searchInput) {
                this.searchInput.focus()   // 커서 이동
                this.searchInput.select()  // 기존 텍스트 모두 선택
            }
        }, 300)
    }
    
    // 🔒 검색창 닫기 함수
    closeSearch() {
        // ❗ 검색 오버레이가 없으면 함수 종료
        if (!this.searchOverlay) return
        
        // 🎨 검색창에서 'active' 클래스 제거 (CSS로 숨기기)
        this.searchOverlay.classList.remove("active")
        
        // ✅ 뒤쪽 페이지 스크롤 다시 허용
        document.body.style.overflow = "auto"
        
        // 🗑️ 검색 입력창 내용 지우기
        if (this.searchInput) {
            this.searchInput.value = ""
        }
        
        // 📊 검색창이 닫혀있다고 상태 변경
        this.isSearchOpen = false
    }
    
    // 🔍 검색어 처리 함수 (사용자가 검색어를 입력할 때마다 실행)
    handleSearch(query) {
        // 📝 검색어가 3글자 이상일 때만 처리 (너무 짧으면 의미 없으니까)
        if (query.length > 2) {
            console.log("검색어:", query)
            // 🔧 실제 검색 로직은 여기에 구현 (지금은 없음)
            this.showSearchFeedback(query)  // 시각적 피드백 보여주기
        }
    }
    
    // ✨ 검색 실행 함수 (Enter 키를 눌렀을 때 실행)
    executeSearch() {
        // ❗ 검색 입력창이 없으면 함수 종료
        if (!this.searchInput) return
        
        // 📝 입력된 검색어 가져오기 (앞뒤 공백 제거)
        const query = this.searchInput.value.trim()
        
        if (query) {  // 검색어가 있으면
            console.log("검색 실행:", query)
            
            // 🎨 검색 실행 중임을 보여주는 파란색 배경 효과
            this.searchInput.style.background = "linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%)"
            
            // ✅ 검색 성공 체크 아이콘 애니메이션 보여주기
            this.showSearchSuccess()
            
            // ⏰ 1초 후에 검색창 닫고 검색 결과 페이지로 이동 (예시)
            setTimeout(() => {
                this.searchInput.style.background = ""  // 배경색 원래대로
                this.closeSearch()  // 검색창 닫기
                // 🔗 실제 검색 결과 페이지로 이동 (지금은 주석 처리)
                // window.location.href = `/search?q=${encodeURIComponent(query)}`
            }, 1000)
        }
    }
    
    // 💡 검색 입력시 시각적 피드백 보여주기
    showSearchFeedback(query) {
        if (this.searchInput) {
            // 🎨 검색창 왼쪽에 파란색 테두리 표시 (입력 중임을 알려줌)
            this.searchInput.style.borderLeft = "4px solid #1976d2"
            
            // ⏰ 1초 후에 테두리 원래대로 되돌리기
            setTimeout(() => {
                this.searchInput.style.borderLeft = ""
            }, 1000)
        }
    }
    
    // ✅ 검색 성공 애니메이션 보여주기
    showSearchSuccess() {
        // 📄 체크 아이콘을 담을 HTML 요소 만들기
        const successIcon = document.createElement('div')
        successIcon.innerHTML = '<i class="fas fa-check-circle"></i>'  // 체크 아이콘
        successIcon.className = 'search-success-icon'
        
        // 🎨 아이콘의 위치와 스타일 설정
        successIcon.style.cssText = `
            position: absolute;        /* 절대 위치 */
            top: 50%;                 /* 세로 중앙 */
            right: 60px;              /* 오른쪽에서 60px */
            transform: translateY(-50%);  /* 정확한 세로 중앙 정렬 */
            color: #4caf50;           /* 초록색 */
            font-size: 20px;          /* 크기 */
            opacity: 0;               /* 처음엔 투명 */
            animation: searchSuccess 1.5s ease-out forwards;  /* 애니메이션 */
        `
        
        // 📎 검색창에 체크 아이콘 추가
        if (this.searchContainer) {
            this.searchContainer.appendChild(successIcon)
            
            // ⏰ 1.5초 후에 아이콘 제거 (메모리 정리)
            setTimeout(() => {
                successIcon.remove()
            }, 1500)
        }
    }
    
    // 🌊 리플 효과 추가하기 (버튼 클릭시 물결 애니메이션)
    addRippleEffect(e) {
        // 🎯 클릭된 버튼 찾기
        const button = e.currentTarget
        
        // 📏 버튼의 위치와 크기 정보 가져오기
        const rect = button.getBoundingClientRect()
        
        // 📐 리플 효과의 크기 계산 (버튼의 가로/세로 중 더 큰 값)
        const size = Math.max(rect.width, rect.height)
        
        // 📍 클릭한 위치 계산 (버튼 내에서의 상대적 위치)
        const x = e.clientX - rect.left - size / 2  // 가로 위치
        const y = e.clientY - rect.top - size / 2   // 세로 위치
        
        // 🎨 리플 효과를 만들 HTML 요소 생성
        const ripple = document.createElement('div')
        ripple.style.cssText = `
            position: absolute;                          /* 절대 위치 */
            width: ${size}px;                           /* 가로 크기 */
            height: ${size}px;                          /* 세로 크기 */
            left: ${x}px;                               /* 가로 위치 */
            top: ${y}px;                                /* 세로 위치 */
            background: rgba(255, 255, 255, 0.3);      /* 반투명 흰색 */
            border-radius: 50%;                         /* 원형 모양 */
            transform: scale(0);                        /* 처음엔 크기 0 */
            animation: ripple 0.6s linear;              /* 0.6초 애니메이션 */
            pointer-events: none;                       /* 클릭 방해하지 않음 */
        `
        
        // 🏗️ 버튼을 리플 효과를 위해 준비
        button.style.position = 'relative'  // 상대 위치로 설정
        button.style.overflow = 'hidden'    // 버튼 밖으로 넘치는 부분 숨기기
        
        // 📎 버튼에 리플 효과 추가
        button.appendChild(ripple)
        
        // ⏰ 0.6초 후에 리플 효과 제거 (메모리 정리)
        setTimeout(() => {
            ripple.remove()
        }, 600)
    }
    
    // ⌨️ 키보드 단축키 설정하기
    initializeKeyboardShortcuts() {
        // 🎹 키보드를 눌렀을 때 실행되는 이벤트
        document.addEventListener("keydown", (e) => {
            // 🔍 Ctrl + K 또는 Cmd + K로 검색창 열기 (구글처럼)
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault()  // 브라우저 기본 동작 막기
                this.openSearch()   // 검색창 열기
            }
            
            // ❌ ESC 키로 검색창 닫기
            if (e.key === "Escape") {
                if (this.isSearchOpen) {  // 검색창이 열려있을 때만
                    this.closeSearch()
                }
            }
            
            // ✨ Enter 키로 검색 실행
            if (e.key === "Enter" && this.isSearchOpen) {
                this.executeSearch()
            }
        })
    }
    
    // ♿ 접근성 기능 설정하기 (장애인도 쉽게 사용할 수 있도록)
    initializeAccessibility() {
        // 🏷️ 검색 버튼에 설명 라벨 추가 (화면 읽기 프로그램용)
        if (this.searchBtn) {
            this.searchBtn.setAttribute("aria-label", "검색창 열기")
        }
        if (this.searchProductBtn) {
            this.searchProductBtn.setAttribute("aria-label", "제품 검색")
        }
    }
    
    // ✨ 고급 애니메이션 효과 설정하기
    initializeAdvancedEffects() {
        // 🖱️ 검색 버튼에 마우스 올렸을 때 효과
        [this.searchBtn, this.searchProductBtn].forEach(btn => {
            if (btn) {
                // 🔼 마우스 올렸을 때: 버튼이 위로 올라가고 커지고 그림자 생김
                btn.addEventListener("mouseenter", () => {
                    btn.style.transform = "translateY(-2px) scale(1.05)"  // 2px 위로, 5% 확대
                    btn.style.boxShadow = "0 8px 25px rgba(25, 118, 210, 0.3)"  // 파란 그림자
                })
                
                // 🔽 마우스 벗어났을 때: 원래대로 돌아가기
                btn.addEventListener("mouseleave", () => {
                    btn.style.transform = "translateY(0) scale(1)"  // 원래 위치, 원래 크기
                    btn.style.boxShadow = ""  // 그림자 제거
                })
            }
        })
        
        // 🎯 검색창에 커서가 들어갔을 때 효과
        if (this.searchInput) {
            // 📝 검색창에 포커스됐을 때: 검색창 전체가 살짝 커지고 그림자 생김
            this.searchInput.addEventListener("focus", () => {
                if (this.searchContainer) {
                    this.searchContainer.style.transform = "scale(1.02)"  // 2% 확대
                    this.searchContainer.style.boxShadow = "0 15px 35px rgba(25, 118, 210, 0.15)"  // 파란 그림자
                }
            })
            
            // 📝 검색창에서 포커스가 벗어났을 때: 원래대로 돌아가기
            this.searchInput.addEventListener("blur", () => {
                if (this.searchContainer) {
                    this.searchContainer.style.transform = "scale(1)"  // 원래 크기
                    this.searchContainer.style.boxShadow = ""  // 그림자 제거
                }
            })
        }
    }
}

// ========================================
// 🚀 페이지 로드 완료 후 초기화 (웹페이지가 완전히 준비된 후 실행)
// ========================================

// 📄 HTML 문서가 완전히 로드되면 실행되는 이벤트
document.addEventListener('DOMContentLoaded', () => {
    // 🎬 랜덤 영상 플레이어 시작하기
    // window.randomVideoPlayer = 전역 변수로 만들어서 어디서든 사용 가능하게
    window.randomVideoPlayer = new RandomVideoPlayer();
    
    // 🔍 검색 기능 시작하기
    // window.searchManager = 전역 변수로 만들어서 어디서든 사용 가능하게
    window.searchManager = new SearchManager();
    
    // 📢 개발자용 메시지 - 콘솔에서 상태 확인 가능
    console.log('🎬 랜덤 영상 플레이어가 준비되었습니다!');
    console.log('🔍 검색 기능이 준비되었습니다!');
    console.log('📹 사용 가능한 영상 목록:', window.randomVideoPlayer.videoSources);
    
    // 🎮 개발자용 숨겨진 기능: Ctrl + V로 수동 영상 변경 (테스트용)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'v') {  // Ctrl + V 키 조합
            console.log('🔄 개발자 모드: 수동으로 다음 영상으로 변경합니다');
            window.randomVideoPlayer.playNextRandomVideo();
        }
    });
    
    // 🎉 모든 초기화 완료!
    console.log('✅ 경보전기 웹사이트의 모든 기능이 준비되었습니다!');
    console.log('💡 사용 가능한 기능들:');
    console.log('   🔍 검색: Ctrl+K 또는 검색 버튼 클릭');
    console.log('   📱 모바일 메뉴: 햄버거 버튼 클릭');
    console.log('   🎬 영상: 자동으로 랜덤 재생');
    console.log('   🎮 개발자 모드: Ctrl+V로 영상 변경');
});
