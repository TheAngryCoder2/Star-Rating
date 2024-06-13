document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".stars i");
    const feedbackTextarea = document.querySelector(".feedback");
    const submitButton = document.querySelector(".submit-btn");

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => highlightStars(index));
        star.addEventListener("mouseout", resetStars);
        star.addEventListener("click", () => setRating(index));
    });

    function highlightStars(index) {
        resetStars();
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add("hovered");
        }
    }

    function resetStars() {
        stars.forEach(star => star.classList.remove("hovered"));
    }

    function setRating(index) {
        stars.forEach(star => star.classList.remove("selected"));
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add("selected");
        }
    }

    // Event listener for submit button
    submitButton.addEventListener("click", function() {
        const selectedStars = document.querySelectorAll(".stars .selected").length;
        const feedbackText = feedbackTextarea.value.trim();

        if (selectedStars > 0 || feedbackText !== "") {
            alert(`Rating: ${selectedStars} star(s)\nFeedback: ${feedbackText}`);
        } else {
            alert("Please provide a rating or feedback.");
        }
    });
});
