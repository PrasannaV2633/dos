// Create the popup HTML content as a string
const popupHTML = `
<section class="pop-up-section pop-up-section-2">
    <div class="popup-overlay" id="popup">
      <div class="container">
        <div class="popup-content">
          <button class="close-btn" onclick="closePopup()">×</button>
          <div class="m-auto">
            <h4>Let's Build Your Success Story Together</h4>
            <p class="sub">Fill out the short form below for a free, no-obligation consultation with our Experts.</p>
          </div>
          <div class="row">
            <div class="col-lg-6">     <div class="popup-left">
            <form action="enquiry.php" method="POST">
        <input type="text" placeholder="Name" name="name" id="name" required>
        <input type="email" placeholder="Email" name="email" id="email" required>
        <input type="tel" placeholder="Phone" name="phone" required>
        <select name="service" required>
        <option value="">Service of Interest</option>
        <option value="web-design">Web Designs</option>
        <option value="web-development">Web Development</option>
        <option value="mobile-app">Mobile App Development</option>
        <option value="ecommerce">Ecommerce</option>
        <option value="seo">SEO / Digital Marketing</option>
        <option value="graphic-design">Graphic Design</option>
        <option value="cms">Content Management System</option>
        <option value="outsource">OutSource Project</option>
        <option value="product-photography">Product Photography</option>
        <option value="website-hosting">Web Hosting</option>
        <option value="others">Others</option>
    </select>
    <textarea placeholder="Project Details" name="message" rows="3"></textarea>

      <div class="row mb-3">
      <div class="col-md-12 justify-content-start d-flex mt-2">
                              <div class="g-recaptcha" data-sitekey="6LdkF4YUAAAAAArRpJtrS-o7Ui8Y380S6WLYnKqG"></div>
                            </div>
  </div>
    <button type="submit">Let's Get Started </button>
</form>
            </div>
          </div>
          <div class="col-lg-6">    <div class="popup-right">
            <img src="images/latest-images/desig-o-soft-white-logo.svg" alt="" height="40" class="mb-4 pop-up-right-logo" loading="lazy">
            <p> <i class="fa-solid fa-circle-check"></i>  20+ Years of Experience</p>
            <p> <i class="fa-solid fa-circle-check"></i> 1300+ Projects Delivered Globally</p>
            <p> <i class="fa-solid fa-circle-check"></i> +91 9843059955</p>
            <p> <i class="fa-solid fa-circle-check"></i> info@designosoft.com</p>

            <img src="images/latest-images/contact/contact-pop-up-img-2.webp" alt="" style="width: 100%;" class="pop-up-big-img">
         
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</section>
`;

// Insert it into the page
document.getElementById('popup-container').innerHTML = popupHTML;

// Add popup open/close functions
function openPopup() {
  document.getElementById("popup").style.display = "flex";
  document.body.classList.add("modal-open");
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.body.classList.remove("modal-open");
}