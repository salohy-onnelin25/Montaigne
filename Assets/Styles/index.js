document.addEventListener("DOMContentLoaded", function () {
  const headerIcon = document.querySelector(".header-icon");
  const scrollThreshold = 100;

  const headerBottom = document.querySelector(".header-bottom");
  let stickyOffset = 0;
  let headerBottomHeight = 0;

  const placeholder = document.createElement("div");
  placeholder.classList.add("header-bottom-placeholder");
  headerBottom.after(placeholder);

  function calculatePositions() {
    headerBottomHeight = headerBottom.offsetHeight;
    stickyOffset = headerBottom.offsetTop;

    placeholder.style.height = headerBottomHeight + "px";

    if (!headerBottom.classList.contains("is-sticky")) {
      placeholder.style.display = "none";
    }
  }

  function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > scrollThreshold) {
      headerIcon.classList.add("is-hidden");
    } else {
      headerIcon.classList.remove("is-hidden");
    }
    if (scrollPosition > stickyOffset) {
      headerBottom.classList.add("is-sticky");
      placeholder.style.display = "block";
    } else {
      headerBottom.classList.remove("is-sticky");
      placeholder.style.display = "none";
    }
  }

  calculatePositions();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", calculatePositions);
  handleScroll();
});
