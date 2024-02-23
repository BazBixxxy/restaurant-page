import "./general.css";
import "./header.css";
import "./content.css";
import "./menu.css";
import "./style.css";

const homeButton = document.getElementById("home");
const aboutButton = document.getElementById("about");
const menuButton = document.getElementById("menu");
const backHomeButton = document.querySelector(".home-button");
const contactButton = document.getElementById("contact");
const headingSection = document.querySelector(".heading");

window.addEventListener("scroll", () => {
  headingSection.classList.toggle("sticky", window.scrollY > 0);
});

homeButton.addEventListener("click", renderHomePage);
menuButton.addEventListener("click", renderMenuPage);
backHomeButton.addEventListener("click", renderHomePage);

function renderHomePage() {
  document.body.innerHTML = `
        <header>
      <div class="left">
        <i class="fa-solid fa-bowl-food"></i>
        <div class="name">Foodies</div>
      </div>
      <div class="right">
        <nav>
          <button>Home</button>
          <button>About Us</button>
          <button>Menu</button>
          <button>Contact</button>
        </nav>
      </div>
    </header>
    <div id="content" class="content">
      <section class="section">
        <div class="banner">
          <div class="left">
            <img src="../images/dinning.jpg" class="menu1" alt="" />
          </div>
          <div class="right">
            <h2>Welcome To Foodies Restuarant</h2>
            <p>
              Where every bite is a symphony of flavors, artfully crafted to
              delight. Immerse yourself in a culinary adventure of elegance and
              taste perfection. Your extraordinary dining experience begins here
            </p>
            <div class="arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="top">
          <h2>Dishes</h2>
        </div>
        <div class="bottom">
          <div class="dish">
            <div class="top">
              <img src="../images/breakfast.jpg" alt="" />
            </div>
            <div class="bottom">
              <div class="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="title">
                <h3>Breakfast</h3>
              </div>
            </div>
          </div>
          <div class="dish">
            <div class="top">
              <img src="../images/brunch.jpg" alt="" />
            </div>
            <div class="bottom">
              <div class="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="title">
                <h3>Brunch</h3>
              </div>
            </div>
          </div>
          <div class="dish">
            <div class="top">
              <img src="../images/dinner.webp" alt="" />
            </div>
            <div class="bottom">
              <div class="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="title">
                <h3>Dinner</h3>
              </div>
            </div>
          </div>
          <div class="dish">
            <div class="top">
              <img src="../images/dessert.jpg" alt="" />
            </div>
            <div class="bottom">
              <div class="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="title">
                <h3>Desserts</h3>
              </div>
            </div>
          </div>
          <div class="dish">
            <div class="top">
              <img src="../images/wines.webp" alt="" />
            </div>
            <div class="bottom">
              <div class="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="title">
                <h3>Wines and Beverages</h3>
              </div>
            </div>
          </div>
          <div class="dish">
            <div class="top">
              <img src="../images/snacks.webp" alt="" />
            </div>
            <div class="bottom">
              <div class="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="title">
                <h3>Snacks</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <script src="main.js"></script>
  `;
}

function renderMenuPage() {
  document.querySelector("body").classList.add("menupage");
  document.body.innerHTML = `
  <div class="menupage">
        <div class="heading">
      <h1>Food Menu</h1>
    </div>
    <div class="home-button">Home</div>
    <div class="middle-section">
      <a href="#breakfast">
        <div>
          <div class="food-pic"></div>
          <div class="food-name">Breakfast</div>
        </div>
      </a>
      <a href="#brunch">
        <div>
          <div class="food-pic"></div>
          <div class="food-name">Brunch</div>
        </div>
      </a>
      <a href="#dinner">
        <div>
          <div class="food-pic"></div>
          <div class="food-name">Dinner</div>
        </div>
      </a>
      <a href="#wines">
        <div>
          <div class="food-pic"></div>
          <div class="food-name">Wines</div>
        </div>
      </a>
    </div>
    <div class="menu">
      <div class="left-section">
        <section id="breakfast">
          <div class="top-line"></div>
          <h4>Breakfast</h4>
          <div class="bottom-line"></div>
          <div class="content">
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
          </div>
        </section>
        <section id="brunch">
          <div class="top-line"></div>
          <h4>Brunch</h4>
          <div class="bottom-line"></div>
          <div class="content">
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
          </div>
        </section>
        <section></section>
        <section>
          <div class="top-line"></div>
          <h4>Snacks and Fries</h4>
          <div class="bottom-line"></div>
          <div class="content">
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="right-section">
        <section id="dinner">
          <div class="top-line"></div>
          <h4>Dinner</h4>
          <div class="bottom-line"></div>
          <div class="content">
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
          </div>
        </section>
        <section></section>
        <section>
          <div class="top-line"></div>
          <h4>Desserts</h4>
          <div class="bottom-line"></div>
          <div class="content">
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
          </div>
        </section>
        <section id="wines">
          <div class="top-line"></div>
          <h4>Beverages</h4>
          <div class="bottom-line"></div>
          <div class="content">
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
            <div class="food-container">
              <div class="left">
                <div class="food">Chicken Soup</div>
                <div class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio modi nisi incidunt recusandae neque.
                </div>
              </div>
              <div class="right">
                <div class="price">$4 .56</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
    <script src="main.js"></script>
  `;
}
