/* =====================================================
   FASHION APEX JAVASCRIPT
===================================================== */

let cart = [];


/* =====================================================
   SEARCH
===================================================== */

function openSearch() {

    document.getElementById("search-box").style.display = "block";

    document.getElementById("search-input").focus();

}


function closeSearch() {

    document.getElementById("search-box").style.display = "none";

}


function searchProducts() {

    const searchValue =
        document.getElementById("search-input")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        const text =
            product.innerText.toLowerCase();

        if (text.includes(searchValue)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* =====================================================
   PRODUCT FILTER
===================================================== */

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");

    const buttons =
        document.querySelectorAll(".filter-btn");


    buttons.forEach(button => {

        button.classList.remove("active");

    });


    event.target.classList.add("active");


    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(name, price) {

    const existingProduct =
        cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}


    updateCart();

    openCart();




/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

    }


    let total = 0;
    let count = 0;


    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        count += item.quantity;


        const div =
            document.createElement("div");

        div.className = "cart-product";


        div.innerHTML = `

            <div>

                <h4>${item.name}</h4>

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                    × ${item.quantity}
                </p>

            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${index})"
            >
                ✕
            </button>

        `;


        cartItems.appendChild(div);

    });


    cartCount.innerText = count;

    cartTotal.innerText =
        "₹" + total.toLocaleString("en-IN");

}


/* =====================================================
   REMOVE CART ITEM
===================================================== */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    document
        .getElementById("cart-sidebar")
        .classList.add("open");


    document
        .getElementById("cart-overlay")
        .classList.add("open");

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    document
        .getElementById("cart-sidebar")
        .classList.remove("open");


    document
        .getElementById("cart-overlay")
        .classList.remove("open");

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    alert(
        "Thank you for shopping with Fashion Apex!\n\n" +
        "Checkout integration will be connected here."
    );

}


/* =====================================================
   NEWSLETTER
===================================================== */

function subscribe(event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value;


    alert(
        "Thank you for subscribing to Fashion Apex!\n\n" +
        "Updates will be sent to: " + email
    );


    event.target.reset();

}


/* =====================================================
   CONTACT FORM
===================================================== */

function sendMessage(event) {

    event.preventDefault();


    alert(
        "Thank you for contacting Fashion Apex!\n\n" +
        "Our team will get back to you soon."
    );


    event.target.reset();

}


/* =====================================================
   CLOSE SEARCH WITH ESC
===================================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeSearch();

        closeCart();

    }

});
