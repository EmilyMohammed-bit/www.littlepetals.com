function addToCart() {
    alert("Item added to cart!");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let terms = document.getElementById("terms").checked;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all required fields");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return false;
    }

    if (!terms) {
        alert("You must agree to the terms");
        return false;
    }

    alert("Account created successfully!");
    return true;
}
function filterProducts() {
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let occasion = document.getElementById("occasion").value;

    let products = document.querySelectorAll(".card");

    products.forEach(card => {
        let show = true;

        let productPrice = parseInt(card.dataset.price);

        // CATEGORY
        if (category !== "all" && card.dataset.category !== category) {
            show = false;
        }

        // PRICE LOGIC (FIXED)
        if (price === "low" && productPrice >= 50) {
            show = false;
        }

        if (price === "high" && productPrice < 50) {
            show = false;
        }

        // OCCASION
        if (occasion !== "all" && card.dataset.occasion !== occasion) {
            show = false;
        }

        card.style.display = show ? "block" : "none";
    });
}
if (!show) {
    card.style.display = "none";
} else {
    card.style.display = "block";
}