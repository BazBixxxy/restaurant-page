const contentSection = document.getElementById("content");

const aboutButton = document.getElementById("aboutUs");
const phoneAboutButton = document.querySelector(".phone-about");

aboutButton.addEventListener("click", renderContactPage);

phoneAboutButton.addEventListener("click", () => {
  renderContactPage();
  document.querySelector(".phone-sidebar").classList.toggle("show");
});

function renderContactPage() {
  contentSection.classList.remove("home");
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

const phoneNavButton = document.querySelector(".phone-nav");
const phoneNav = document.querySelector(".phone-sidebar");


const show = () => phoneNav.classList.toggle("show");

document.querySelector(".phone-nav").addEventListener("click", () => {
  // show();
  document.querySelector(".phone-sidebar").classList.toggle("show");
});

function toggleTheme() {
  const rootElement = document.documentElement;
  const theme = rootElement.className === "dark" ? "light" : "dark";
  rootElement.className = theme;
}

document.querySelector(".name").addEventListener("click", toggleTheme);

var loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  loader.style = "display: none;";
});

// document.onreadystatechange = () => {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style = "visibility: hidden;";
//     document.getElementById("preloader").style = "visibility: visible;";
//   } else {
//     document.getElementById("preloader").style = "display: none;";
//     document.querySelector("body").style = "visibility: visible;";
//   }
// };
