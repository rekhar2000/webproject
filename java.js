// Sticky header on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
    // Add to Cart Functionality
    const productImages = document.querySelectorAll(".products .row img");
    const cartContainer = document.getElementById("cart");
    const cartItems = document.getElementById("cart-items");

    productImages.forEach(img => {
        img.addEventListener("click", function () {
            const product = img.closest(".row");
            const title = product.querySelector(".price h4").textContent;
            const price = product.querySelector(".price p").textContent;
            const imgSrc = img.src;

            const item = document.createElement("div");
            item.classList.add("cart-item");
            item.innerHTML = `
                <img src="${imgSrc}" alt="">
                <div>
                    <h4>${title}</h4>
                    <p>${price}</p>
                </div>
            `;
            cartItems.appendChild(item);
            cartContainer.style.display = "block";
        });
    });

    // Search Functionality
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const searchValue = this.value.toLowerCase();
            const products = document.querySelectorAll(".products .row");

            products.forEach(product => {
                const title = product.querySelector("h4").textContent.toLowerCase();
                product.style.display = title.includes(searchValue) ? "block" : "none";
            });
        });
    }
});

// Toggle user details
document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.getElementById('user-icon');
    const userDetails = document.getElementById('user-details');

    userIcon.addEventListener('click', () => {
        userDetails.style.display = userDetails.style.display === 'block' ? 'none' : 'block';
    });

    // Hide if clicked outside
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.user-dropdown')) {
            userDetails.style.display = 'none';
        }
    });
});

