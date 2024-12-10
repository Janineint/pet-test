let mealChoice = "";
let dietChoice = "";
let dishChoice = "";
const resultText = document.getElementById("result-text");
const foodSuggestion = document.getElementById("food-suggestion");
const cuisineType = document.getElementById("cuisine-type");
const resultDiv = document.getElementById("result");

function updateResult() {
    if (mealChoice && dietChoice && dishChoice) {
        let suggestion = "";
        let imageUrl = ""; 

        // เช็คแต่ละประเภทอาหารและแต่ละประเภทจาน
        if (mealChoice === "Spanish") {
            if (dishChoice === "Big meal") {
                suggestion = "Seafood Paella";
                imageUrl = "/img/11.jpg";
            } else if (dishChoice === "Snacking") {
                suggestion = "Tapas";
                imageUrl = "/img/12.jpg";
            } else if (dishChoice === "Dessert") {
                suggestion = "Churros";
                imageUrl = "/img/13.jpg";
            }
            cuisineType.textContent = "Spanish Cuisine";
        } else if (mealChoice === "Western") {
            if (dishChoice === "Big meal") {
                suggestion = "Grilled Steak";
                imageUrl = "/img/14.jpg";
            } else if (dishChoice === "Snacking") {
                suggestion = "French Fries";
                imageUrl = "/img/15.jpg";
            } else if (dishChoice === "Dessert") {
                suggestion = "Apple Pie";
                imageUrl = "/img/16.jpg";
            }
            cuisineType.textContent = "Western Cuisine";
        } else if (mealChoice === "Chinese") {
            if (dishChoice === "Big meal") {
                suggestion = "Peking Duck";
                imageUrl = "/img/17.jpg";
            } else if (dishChoice === "Snacking") {
                suggestion = "Spring Rolls";
                imageUrl = "/img/18.jpg";
            } else if (dishChoice === "Dessert") {
                suggestion = "Moon Cake";
                imageUrl = "/img/19.jpg";
            }
            cuisineType.textContent = "Chinese Cuisine";
        } else if (mealChoice === "Italian") {
            if (dishChoice === "Big meal") {
                suggestion = "Spaghetti Carbonara";
                imageUrl = "/img/20.jpg";
            } else if (dishChoice === "Snacking") {
                suggestion = "Bruschetta";
                imageUrl = "/img/21.jpg";
            } else if (dishChoice === "Dessert") {
                suggestion = "Tiramisu";
                imageUrl = "/img/22.jpg";
            }
            cuisineType.textContent = "Italian Cuisine";
        } else if (mealChoice === "Japanese") {
            if (dishChoice === "Big meal") {
                suggestion = "Sushi";
                imageUrl = "/img/23.jpg";
            } else if (dishChoice === "Snacking") {
                suggestion = "Onigiri";
                imageUrl = "/img/24.jpg";
            } else if (dishChoice === "Dessert") {
                suggestion = "Mochi";
                imageUrl = "/img/25.jpg";
            }
            cuisineType.textContent = "Japanese Cuisine";
        }

        foodSuggestion.textContent = suggestion;
        document.getElementById('food-image-img').src = imageUrl;
        resultDiv.classList.remove('hidden');
    }
}

document.querySelectorAll(".meal-choice").forEach((button) => {
    button.addEventListener("click", function () {
        mealChoice = button.getAttribute("data-choice");
        updateResult();
        document.getElementById("question-1").classList.add("hidden");
        document.getElementById("question-2").classList.remove("hidden");
    });
});

document.querySelectorAll(".diet-choice").forEach((button) => {
    button.addEventListener("click", function () {
        dietChoice = button.getAttribute("data-choice");
        updateResult();
        document.getElementById("question-2").classList.add("hidden");
        document.getElementById("question-3").classList.remove("hidden");
    });
});

document.querySelectorAll(".dish-choice").forEach((button) => {
    button.addEventListener("click", function () {
        dishChoice = button.getAttribute("data-choice");
        updateResult();
        document.getElementById("question-3").classList.add("hidden");
    });
});
