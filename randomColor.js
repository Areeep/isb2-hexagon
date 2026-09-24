const randomColorBtn = document.getElementById("randomColorBtn");

const colors = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#06b6d4",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
];

const titles = document.querySelectorAll("article h1");

randomColorBtn.addEventListener("click", () => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    randomTitle.style.color = randomColor;
}); 