window.addEventListener("load", () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    const header = document.querySelector("header");

    if (el && header) {
      const headerHeight = header.offsetHeight;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
});