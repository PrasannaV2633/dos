
  document.addEventListener("DOMContentLoaded", function () {
    const cardsPerPage = 3;
    const cards = document.querySelectorAll('.hire-dev-cards');
    const paginationLinks = document.querySelectorAll('.pagination .page-link');

    function showPage(page) {
      const start = (page - 1) * cardsPerPage;
      const end = start + cardsPerPage;

      cards.forEach((card, index) => {
        card.closest('.col-lg-4').style.display = (index >= start && index < end) ? 'block' : 'none';
      });
    }

    paginationLinks.forEach((link, index) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const label = this.getAttribute('aria-label');
        const currentPage = parseInt(document.querySelector('.pagination .active')?.textContent || "1");
        let newPage = currentPage;

        if (label === "Previous") {
          newPage = Math.max(1, currentPage - 1);
        } else if (label === "Next") {
          newPage = Math.min(Math.ceil(cards.length / cardsPerPage), currentPage + 1);
        } else {
          newPage = parseInt(this.textContent);
        }

        // Remove active class
        paginationLinks.forEach(el => el.classList.remove('active'));
        // Add active to current number page
        paginationLinks.forEach(el => {
          if (el.textContent == newPage) el.classList.add('active');
        });

        showPage(newPage);
      });
    });

    // Init
    showPage(1);
    paginationLinks.forEach(el => {
      if (el.textContent === "1") el.classList.add('active');
    });
  });

