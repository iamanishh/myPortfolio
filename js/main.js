/* =========== Show Navbar =========== */
const navBar = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("show");
});
window.addEventListener("scroll", () => {
  navBar.classList.remove("show");
});

/* =========== User Data =========== */

/* ========== Swiper =========== */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ========== Scroll To Top =========== */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

/* ========== Scroll Reveal ============ */
const scroll = ScrollReveal({
  distance: "60px",
  duration: "2500",
  delay: 300,
  reset: true,
});
scroll.reveal(".hero .col:last-child", { delay: 600 });

// scroll.reveal(".about-1 .col:last-child h3, .about-1 .col:last-child p", {
//   origin: "bottom",
//   interval: 100,
// });
scroll.reveal(".hero .col h1, .hero .col p,.hero .col .img2, .hero .col .btn", {
  origin: "top",
  interval: 100,
});
scroll.reveal(`.about-1 .col:first-child img`, {
  origin: "top",
});

// scroll.reveal(`.footer .col div, .footer .col p`, {
//   origin: "top",
//   interval: 100,
// });
