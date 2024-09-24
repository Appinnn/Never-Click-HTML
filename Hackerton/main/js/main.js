document.addEventListener('DOMContentLoaded', () => {
    let zoomLevel = 100; // 초기 화면 비율
    const zoomPercent = document.getElementById('zoom-percent');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    // 확대 버튼 클릭 시
    zoomInBtn.addEventListener('click', () => {
        if (zoomLevel < 200) {
            zoomLevel += 25;
            updateZoom();
        }
    });

    // 축소 버튼 클릭 시
    zoomOutBtn.addEventListener('click', () => {
        if (zoomLevel > 25) {
            zoomLevel -= 25;
            updateZoom();
        }
    });

    // 화면 크기 업데이트 (글씨 크기 조정)
    function updateZoom() {
        document.body.style.fontSize = `${zoomLevel / 100}rem`;
        zoomPercent.textContent = `${zoomLevel}%`;
    }

    // 초기 비율 설정
    updateZoom();

    // 통합된 서브메뉴 컨테이너 생성
    const submenuContainer = document.createElement('div');
    submenuContainer.classList.add('submenu-container');
    submenuContainer.style.display = 'none'; // 처음에는 숨김
    document.body.appendChild(submenuContainer);

    // 메뉴 클릭 시 서브메뉴 통합
    const menuItems = document.querySelectorAll(".main-menu > ul > li");

    menuItems.forEach(item => {
        const submenuItems = item.getAttribute('data-submenu').split(', '); // 서브 카테고리 가져오기

        item.addEventListener("mouseenter", function() {
            // 서브메뉴 내용 설정
            submenuContainer.innerHTML = submenuItems.map(subItem => `<div>${subItem}</div>`).join('');
            submenuContainer.style.display = 'block'; // 서브메뉴 표시
            submenuContainer.style.left = `${item.getBoundingClientRect().left}px`; // 메인 메뉴 위치에 맞춤
            submenuContainer.style.top = `${item.getBoundingClientRect().bottom}px`; // 메인 메뉴 아래에 위치
        });

        item.addEventListener("mouseleave", function() {
            submenuContainer.style.display = 'none'; // 마우스가 나가면 숨김
        });
    });

    // 서브메뉴 컨테이너가 마우스 오버 시에도 숨기지 않도록 처리
    submenuContainer.addEventListener("mouseenter", () => {
        submenuContainer.style.display = 'block'; // 서브메뉴 표시
    });

    submenuContainer.addEventListener("mouseleave", () => {
        submenuContainer.style.display = 'none'; // 마우스가 나가면 숨김
    });

    // 프로필 자동 전환 기능
    const profiles = document.querySelectorAll('.profile');
    let currentIndex = 0;

    // 자동 전환 함수
    function showNextProfile() {
        profiles.forEach((profile, index) => {
            profile.classList.remove('active'); // 모든 프로필 숨김
            profile.style.opacity = '0.5'; // 모든 프로필 반투명하게 설정
        });
        
        currentIndex = (currentIndex + 1) % profiles.length; // 다음 프로필 인덱스
        profiles[currentIndex].classList.add('active'); // 다음 프로필 보임
        profiles[currentIndex].style.opacity = '1'; // 현재 프로필은 불투명하게
    }

    // 3초마다 프로필 변경
    setInterval(showNextProfile, 3000); // 3000ms = 3초
});
