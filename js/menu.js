
// 배너 관련

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

// 배너 이미지 변경
function changeBanner(targetId) {
  bannerBg.style.opacity = 0;

  setTimeout(() => {
    bannerBg.style.background = `url('${bannerImages[targetId]}') center/cover no-repeat`;
    bannerTitle.textContent = bannerTitles[targetId];
    bannerBg.style.opacity = 1;
  }, 300);
}


//  섹션 제어 (상단 탭)


const menuTabs = document.querySelectorAll('.menu-tab a');
const sections = document.querySelectorAll('.menu-wrap');

//  URL 해시 가져오기
const hash = window.location.hash.replace('#', '');

//  기본 섹션 결정
let initialSection = 'baeksuk';

if (hash) {
  if (hash.startsWith('meal')) {
    initialSection = 'meal';
  } else {
    initialSection = hash;
  }
}

//  섹션 초기 상태 설정
sections.forEach(section => {
  section.style.display = 'none';
});

document.getElementById(initialSection).style.display = 'block';

//  배너 초기 설정
changeBanner(initialSection);


// 상단 탭 클릭
menuTabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = tab.getAttribute('href').replace('#', '');

    sections.forEach(section => {
      section.style.display = 'none';

      if (section.id === targetId) {
        section.style.display = 'block';
      }
    });

    changeBanner(targetId);
  });
});



//  서브탭 제어

const menuWraps = document.querySelectorAll('.menu-wrap');

menuWraps.forEach(wrap => {

  const tabs = wrap.querySelectorAll('.sub-tab li');
  const lists = wrap.querySelectorAll('.menu-list');

  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.querySelector('button').dataset.target;

      lists.forEach(list => {
        list.classList.remove('active');

        if (list.id === target) {
          list.classList.add('active');
        }
      });
    });
  });
});






window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;

  // 식사류 진입 
  if (hash.includes("meal")) {

    document.querySelectorAll('.menu-wrap').forEach(el => {
      el.style.display = 'none';
    });

    document.getElementById('meal').style.display = 'block';
    changeBanner('meal');
  }

  // soup 탭 강제 활성화
  if (hash === "#meal-soup") {

    // 메뉴 내용
    document.querySelectorAll("#meal .menu-list").forEach(el => {
      el.classList.remove("active");
    });

    document.querySelector("#soup").classList.add("active");

    // 탭 버튼
    document.querySelectorAll("#meal .sub-tab li").forEach(li => {
      li.classList.remove("active");
    });

    document.querySelector('#meal button[data-target="soup"]')
      .parentElement.classList.add("active");

    // 스크롤 이동
    document.querySelector("#meal").scrollIntoView();
  }
});