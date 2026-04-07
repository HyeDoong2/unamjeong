document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    const header = document.querySelector("header");

    if (el && header) {
      setTimeout(() => {
        const headerHeight = header.offsetHeight;
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;

        window.scrollTo(0, y);
      }, 300);
    }
  }
});