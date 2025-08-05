 
// this animation is used in brochure portfolio page

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".brochure-img");

    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        if (card.querySelector(".wrapper")) return; // prevent duplicate

        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        for (let i = 0; i < 7; i++) {
          const dotContainer = document.createElement("div");
          const dot = document.createElement("span");
          dot.classList.add("dot");
          dotContainer.appendChild(dot);
          wrapper.appendChild(dotContainer);
        }

        card.appendChild(wrapper);
      });

      card.addEventListener("mouseleave", () => {
        const wrapper = card.querySelector(".wrapper");
        if (wrapper) wrapper.remove();
      });
    });
  });
