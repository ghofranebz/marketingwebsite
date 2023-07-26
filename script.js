// Add your custom JavaScript here

// Navigation Menu Toggle
const MenuItems = document.querySelector(".navbar ul");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  MenuItems.classList.toggle("show");
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
// Like buttons functionality
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

// CART FONCTION
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    renderCartItems();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCartItems();
}

function renderCartItems() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button class="remove-from-cart-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = `Total Price: $${total.toFixed(2)}`;
}

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        addToCart(name, price);
    });
});


