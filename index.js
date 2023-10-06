let rating = "";
const ratingButtons = document.querySelectorAll(".rate-btn-label");
const submitBtn = document.querySelector(".submit-btn");
const thankYouState = document.getElementById("thank-you-state");
const ratingState = document.getElementById("rating-state");

ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    ratingButtons.forEach((button) =>
      button.classList.remove("rate-btn-clicked")
    );
    rating = button.querySelector("span").innerHTML;
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); //so that the form doesn't get submitted so that the page doesn't get refreshed

  if (rating === "") {
    alert("Please rate us");
  } else {
    showThankYouState();
  }
});

function showThankYouState() {
  ratingState.style.display = "none";
  thankYouState.style.display = "block";

  document.querySelector(".rating-result span").innerHTML = rating;
}
