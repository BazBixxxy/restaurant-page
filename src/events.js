const contentSection = document.getElementById("content");

const aboutButton = document.getElementById("aboutUs");
const contactButton = document.getElementById("contact");
const arrowButton = document.querySelector("arrow");

aboutButton.addEventListener("click", renderContactPage);
contactButton.addEventListener("click", renderContactPage);
arrowButton.addEventListener("click", renderContactPage);

function renderContactPage() {
  contentSection.classList.remove("home");
  document.querySelector("header").style = `
  box-shadow: none;
  `;
  document.body.style = `background-color: aliceblue;`;
  contentSection.innerHTML = `
    <div class="contact-banner">
        <h2>We Are Foodies</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores dicta
          voluptatem sit? Quae ipsa eaque repellat sapiente amet ratione alias.
          eligendi. Atque nemo ipsum error distinctio facere reprehenderit
          voluptas vel necessitatibus corporis.
        </p>
        <button>Reservations</button>
      </div>
      <div class="about-banner">
        <div class="top">
          <div class="left-line"></div>
          <h2>Contact Us</h2>
          <div class="right-line"></div>
        </div>
        <p>
          We are situated on Kololo Avenue, Kampala <br />
          For any inquiries, reach out to us.
        </p>
        <div class="bottom">
          <i class="fa-solid fa-phone"></i>
          <i class="fa-solid fa-envelope"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
      </div>
  `;
}

export default renderContactPage;
