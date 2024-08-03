var cartVisible = false;
var cartItems = [];

// Check if there are any cart items stored in localStorage
var storedCartItems = localStorage.getItem("cartItems");
if (storedCartItems) {
    try {
        cartItems = JSON.parse(storedCartItems);
        if (!Array.isArray(cartItems)) {
            cartItems = [];
        }
    } catch (error) {
        cartItems = [];
    }
    updateCart();
};

// alert message
var alertQueue = []; // Queue to store the alert messages
function showAlert(message) {
    alertQueue.push(message); // Add the message to the queue

    if (!document.getElementById("alert").classList.contains("show")) {
        displayNextAlert();
    }
}
function displayNextAlert() {
    var alertElement = document.getElementById("alert");
    var alertMessage = document.getElementById("alert-message");

    if (alertQueue.length > 0) {
        var message = alertQueue.shift(); // Get the next message from the queue

        alertMessage.textContent = message;
        alertElement.classList.add("show");

        setTimeout(function () {
            alertElement.classList.remove("show");
            alertElement.classList.add("hide");

            setTimeout(function () {
                alertElement.classList.remove("hide");
                displayNextAlert(); // Display the next alert in the queue
            }, 300); // Delay before showing the next alert
        }, 3000); // Time for each alert to be displayed
    }
}

function saveCartItems() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
    saveCartItems(); // Save cart items to localStorage
  }

function updateCart() {
    var cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";
    var total = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var listItem = document.createElement("li");
        listItem.classList.add("cart-item");

        var productImage = document.createElement("img");
        productImage.src = cartItems[i].imageSrc;
        productImage.alt = cartItems[i].title;
        listItem.appendChild(productImage);

        var detailsContainer = document.createElement("div");
        detailsContainer.classList.add("cart-item-details");

        var productName = document.createElement("h4");
        productName.textContent = cartItems[i].title;
        detailsContainer.appendChild(productName);

        var productPrice = document.createElement("span");
        productPrice.textContent = "$" + cartItems[i].price + ".00";
        detailsContainer.appendChild(productPrice);
        total = total + cartItems[i].price;

        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        let index = i
        removeButton.addEventListener("click", function () {
            removeFromCart(index);
        });
        document.getElementById("cart-total").innerHTML = "Total: ₹" + total + ".00";
        detailsContainer.appendChild(removeButton);

        listItem.appendChild(detailsContainer);
        cartItemsList.appendChild(listItem);
    }
    if (cartItems.length == 0) {
        document.getElementById("cart-total").innerHTML = "Cart is Empty!";

    }
}
function toggleCart() {
    var cart = document.getElementById("cart");
    var cartButton = document.getElementById("cart-button");
  
    if (cartVisible) {
      cart.classList.remove("cart-visible");
      cart.classList.add("cart-hidden");
      // cartButton.innerHTML = "Cart";
    } else {
      cart.classList.remove("cart-hidden");
      cart.classList.add("cart-visible");
      // cartButton.innerHTML = "Close Cart";
    }
  
    cartVisible = !cartVisible;
  }

function addToCart(data) {
    showAlert("Added to cart successfully!");
    cartItems.push(data);
    updateCart();
    saveCartItems(); // Save cart items to localStorage
}
function clearCart() {
    total = 0;
    document.getElementById("cart-total").innerHTML = "Cart is Empty!";
    cartItems = [];
    updateCart();
    saveCartItems(); // Save cart items to localStorage
  }
function placeOrder(){
    window.location.href = "order form.html"
}