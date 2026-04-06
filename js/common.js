// 페이지 들어올 때
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

// 페이지 나갈 때
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // 외부링크 / # 제외
    if (href && !href.startsWith("#") && !link.target) {
      e.preventDefault();

      document.body.classList.remove("show");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});