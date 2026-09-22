const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button, index) => {
  const countElement = button.querySelector(".like-count");
  const icon = button.querySelector(".like-icon");

  const countKey = `movie-like-count-${index}`;
  const likedKey = `movie-liked-${index}`;

  let count = parseInt(localStorage.getItem(countKey)) || 0;
  let isLiked = localStorage.getItem(likedKey) === "true";

  countElement.textContent = count;

  if (isLiked) {
    button.classList.add("liked", "text-red-500");
    icon.textContent = "♥";
  } else {
    button.classList.remove("liked", "text-red-500");
    icon.textContent = "♡";
  }

  button.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (isLiked) {
      isLiked = false;

      button.classList.remove("liked", "text-red-500");
      icon.textContent = "♡";

      count--;
    } else {
      isLiked = true;

      button.classList.add("liked", "text-red-500");
      icon.textContent = "♥";

      count++;
    }

    if (count < 0) {
      count = 0;
    }

    countElement.textContent = count;

    localStorage.setItem(countKey, count);
    localStorage.setItem(likedKey, isLiked);
  });
});
