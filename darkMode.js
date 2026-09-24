const darkModeBtn = document.getElementById("darkModeBtn");
const navbar = document.getElementById("navbar");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("bg-gray-100");
  document.body.classList.toggle("bg-gray-900");

  document.body.classList.toggle("text-gray-900");
  document.body.classList.toggle("text-white");

  navbar.classList.toggle("bg-white");
  navbar.classList.toggle("bg-gray-800");

  navbar.classList.toggle("text-gray-900");
  navbar.classList.toggle("text-white");

  darkModeBtn.classList.toggle("bg-gray-900");
  darkModeBtn.classList.toggle("bg-yellow-400");

  darkModeBtn.classList.toggle("text-white");
  darkModeBtn.classList.toggle("text-gray-900");

  if (document.body.classList.contains("bg-gray-900")) {
    darkModeBtn.innerHTML = "☀️ Light Mode";
  } else {
    darkModeBtn.innerHTML = "🌙 Dark Mode";
  }
});
