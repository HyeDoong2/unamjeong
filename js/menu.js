// =============================
// 0. 배너 관련
// =============================

const bannerBg = document.querySelector('.banner-bg');
const bannerTitle = document.querySelector('.banner .title');

const bannerImages = {
  baeksuk: "images/menu/baeksuk.png",
  meat: "images/menu/meat.png",
  meal: "images/menu/meal.png",
  season: "images/index/banner.png",
  extra: "images/index/banner.png",
  drink: "images/index/banner.png"
};

const bannerTitles = {
  baeksuk: "백숙류",
  meat: "고기류",
  meal: "식사류",
  season: "계절메뉴",
  extra: "추가메뉴",
  drink: "주류"
};

// 배너 이미지 변경 (페이드)
function changeBanner(targetId) {
  // 페이드 아웃
  bannerBg.style.opacity = 0;

  setTimeout(() => {
    // 이미지 변경
    bannerBg.style.background = `
      url('${bannerImages[targetId]}') center/cover no-repeat
    `;

    // 제목 변경
    bannerTitle.textContent = bannerTitles[targetId];

    // 페이드 인
    bannerBg.style.opacity = 1;

  }, 300);
}


// =============================
// 1. 섹션 제어 (상단 탭)
// =============================

const menuTabs = document.querySelectorAll('.menu-tab a');
const sections = document.querySelectorAll('.menu-wrap');

// 초기 상태 (백숙만 보이기)
sections.forEach(section => {
  section.style.display = 'none';
});
document.getElementById('baeksuk').style.display = 'block';

// 초기 배너 설정
changeBanner('baeksuk');

menuTabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = tab.getAttribute('href').replace('#', '');

    // 섹션 전환
    sections.forEach(section => {
      section.style.display = 'none';

      if (section.id === targetId) {
        section.style.display = 'block';
      }
    });

    // 🔥 배너 변경
    changeBanner(targetId);
  });
});


// =============================
// 2. 서브탭 제어
// =============================

const menuWraps = document.querySelectorAll('.menu-wrap');

menuWraps.forEach(wrap => {

  const tabs = wrap.querySelectorAll('.sub-tab li');
  const lists = wrap.querySelectorAll('.menu-list');

  // 서브탭 없으면 패스
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      // active 변경
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 타겟 가져오기
      const target = tab.querySelector('button').dataset.target;

      // 리스트 변경
      lists.forEach(list => {
        list.classList.remove('active');

        if (list.id === target) {
          list.classList.add('active');
        }
      });

    });
  });

});