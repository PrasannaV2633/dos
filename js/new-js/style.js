

document.addEventListener("DOMContentLoaded", function () {

  
  let menuLinks = document.querySelectorAll(".mobile-menu__nav-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      let panelId = this.getAttribute("aria-controls");
      let panel = document.getElementById(panelId);
      if (panel) {
        panel.classList.toggle("active");
      }
    });
  });
});

// for Previous step

document.addEventListener("DOMContentLoaded", function () {
  
  const backButton = document.querySelectorAll(".mobile-menu__back-button");
  backButton.forEach((button) => {
    button.addEventListener("click", function () {
      const currentPanel = this.closest(".mobile-menu__panel.is-nested");
      if (currentPanel) {
        currentPanel.classList.remove("active");
        const parentPanelId = currentPanel.getAttribute("data-parent-panel-id");
        const parentPanel = document.getElementById(parentPanelId);
        if (parentPanel) {
          parentPanel.classList.add("active");
        }
      }
    });
  });
});




  window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const triggerPoint = 100;

  if (window.scrollY > triggerPoint) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});








  //  swiper porfolio section

// var swiper = new Swiper(".swiper", {
//   effect: "coverflow",
//   centeredSlides: true,
//   initialSlide: 0,
//   slidesPerView: 5,
//   grabCursor: true,
//   spaceBetween: 40,
//   loop: true,
//   // loopAdditionalSlides: 5,
//   autoplay: {
//     delay: 2000, // ⏱️ Time between slides in milliseconds
//     disableOnInteraction: false, // 👆 Keeps autoplay even after user interaction
//   },
//   coverflowEffect: {
//     rotate: 25,
//     stretch: 0,
//     depth: 50,
//     modifier: 1,
//     slideShadows: false,
//   },
//   breakpoints: {
//   320: {
//     slidesPerView: 2,
//   },
//   576: {
//     slidesPerView: 2,
//   },
//   768: {
//     slidesPerView: 3,
//   },
//   992: {
//     slidesPerView: 4,
//   },
//   1200: {
//     slidesPerView: 5,
//   },
// }
// });
