import "./styles/general.css";
import "./styles/header.css";
import "./styles/content.css";
import "./styles/menu.css";
import "./styles/about.css";
import "./styles/media.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

const contentSection = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menuButton");

const phoneHomeButton = document.querySelector(".phone-home");
const phoneMenuButton = document.querySelector(".phone-menu");

menuButton.addEventListener("click", renderMenuContents);
homeButton.addEventListener("click", renderHomePage);

phoneHomeButton.addEventListener("click", () => {
  renderHomePage();
  document.querySelector(".phone-sidebar").classList.toggle("show");
});

phoneMenuButton.addEventListener("click", () => {
  renderMenuContents();
  document.querySelector(".phone-sidebar").classList.toggle("show");
});

// function toggleTheme() {
//   const rootElement = document.documentElement;
//   const theme = rootElement.className === "dark" ? "light" : "dark";
//   rootElement.className = theme;
// }

// document.querySelector(".name").addEventListener("click", toggleTheme);

if (contentSection.innerHTML === "") {
  contentSection.classList.add("home");
  contentSection.innerHTML = `
      <section class="section">
        <div class="banner">
          <div class="left">
           
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
            <div class="top"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
  `;
}

function renderHomePage() {
  contentSection.classList.add("home");
  contentSection.innerHTML = `
      <section class="section">
        <div class="banner">
          <div class="left"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
            <div class="top"></div>
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
  `;
}

function renderMenuContents() {
  contentSection.classList.remove("home");
  contentSection.innerHTML = `
    <div class="menu">
      <div class="menu-container">
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
        <div class="middle-section"></div>
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
  `;
}
