import "./general.css";
import "./header.css";
import "./content.css";
import "./menu.css";
import "./style.css";

const contentSection = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", renderMenuContents);
homeButton.addEventListener("click", renderHomePage);

if (contentSection.innerHTML === "") {
  contentSection.classList.add("home");
  contentSection.innerHTML = `
          <section class="section">
        <div class="banner">
          <div class="left">
            <img src="/../images/dinning.jpg" class="menu1" alt="" />
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
              <img src="/../images/breakfast.jpg" alt="" />
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
              <img src="/../images/brunch.jpg" alt="" />
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
              <img src="/../images/dinner.webp" alt="" />
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
              <img src="/../images/dessert.jpg" alt="" />
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
              <img src="/../images/wines.webp" alt="" />
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
              <img src="/../images/snacks.webp" alt="" />
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
  `;
}

function renderHomePage() {
  document.body.style = `background-color: white;`;
  contentSection.classList.add("home");
  contentSection.innerHTML = `
    <section class="section">
        <div class="banner">
          <div class="left">
            <img src="/../images/dinning.jpg" class="menu1" alt="" />
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
          <h2 class= "dishes-title">Dishes</h2>
        </div>
        <div class="bottom">
          <div class="dish">
            <div class="top">
              <img src="/../images/breakfast.jpg" alt="" />
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
              <img src="/../images/brunch.jpg" alt="" />
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
              <img src="/../images/dinner.webp" alt="" />
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
              <img src="/../images/dessert.jpg" alt="" />
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
              <img src="/../images/wines.webp" alt="" />
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
              <img src="/../images/snacks.webp" alt="" />
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
  `;
}

function renderMenuContents() {
  contentSection.classList.remove("home");
  document.body.style = `background-color: aliceblue;`;
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
