// Create the popup HTML content as a string
const popupHTML = `
<section class="pop-up-section">
  <div class="popup-overlay" id="popup">
    <div class="container">
      <div class="popup-content">
        <button class="close-btn" onclick="closePopup()">×</button>
        <div class="m-auto">
          <h4>Let's Build Your Success Story Together</h4>
          <p class="sub">Fill out the short form below for a free, no-obligation consultation with our Experts.</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="popup-left">
              <form>
                <input type="text" placeholder="Name" name="name" id="name" required>
                <input type="email" placeholder="Email" name="email" id="email" required>
                <input type="tel" placeholder="Phone (International format)" required>
                <select required>
                  <option value="">Service of Interest</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="seo">SEO / Digital Marketing</option>
                </select>
                <textarea placeholder="Project Details" name="message" rows="3"></textarea>
                <button type="submit">Contact Us</button>
              </form>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="popup-right">
              <img src="images/latest-images/dos-logo-svg.svg" alt="" height="30" class="mb-4">
              <p><i class="fa-solid fa-circle-check"></i>  20+ Years of Experience</p>
              <p><i class="fa-solid fa-circle-check"></i> 1300+ Projects Delivered Globally</p>
              <blockquote>“Designosoft's process was seamless, and the results were incredible.”<br>– <strong>[Client Name]</strong></blockquote>
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