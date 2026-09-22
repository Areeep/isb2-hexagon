// Ambil semua card
const cards = document.querySelectorAll("article");

// Sinopsis setiap film
const synopsis = [
    `The main plot centers on the fierce rivalry and political standoff between an aging town sheriff
    named Joe Cross (Joaquin Phoenix) and the mayor, Ted Garcia (Pedro Pascal).`,

    `Lift tells the story of an international team of thieves led by Cyrus Whitaker. Together with his
    ex-girlfriend, they plan to steal $500 million worth of gold bullion.`,

    `Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.
    Once a familiar threat returns, Jake must work with Neytiri and the Na'vi.`,

    `A forgotten Peter Parker lives alone as a full-time Spider-Man until mounting pressure triggers
    a dangerous change and a powerful new enemy emerges.`,

    `Lord Voldemort has returned, but the Ministry of Magic is doing everything it can to keep the
    wizarding world from knowing the truth.`,

    `After a century of captivity, the Lord of Dreams escapes and sets out to rebuild his kingdom,
    confronting ancient enemies and the consequences of his past.`
];


// Buat elemen modal
const modal = document.createElement("div");

modal.className =
    "fixed inset-0 bg-black/70 flex items-center justify-center p-6 hidden z-50";

modal.innerHTML = `
    <div class="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-6 relative">

        <!-- Tombol X -->
        <button id="closeModal"
            class="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black">
            ×
        </button>

        <!-- Judul -->
        <h2 id="modalTitle" class="text-2xl font-bold mb-4"></h2>

        <!-- Genre -->
        <p id="modalGenre" class="mb-2"></p>

        <!-- Informasi Film -->
        <p id="modalInfo" class="mb-4"></p>

        <!-- Sinopsis -->
        <h3 class="font-bold text-lg mb-2">
            Sinopsis
        </h3>

        <p id="modalDescription" class="text-gray-700 leading-relaxed"></p>

    </div>
`;

// Masukkan modal ke halaman
document.body.appendChild(modal);


// Ambil elemen modal
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalGenre = document.getElementById("modalGenre");
const modalInfo = document.getElementById("modalInfo");
const modalDescription = document.getElementById("modalDescription");


// Ketika card diklik
cards.forEach((card, index) => {

    // Menambahkan cursor pointer
    card.classList.add("cursor-pointer");

    card.addEventListener("click", () => {

        // Ambil data dari card
        const genre = card.querySelector("span").textContent;
        const title = card.querySelector("h1").textContent;
        const info = card.querySelector("div").textContent;

        // Masukkan data ke modal
        modalTitle.textContent = title.trim();
        modalGenre.textContent = "Genre: " + genre.trim();
        modalInfo.textContent = info.trim();

        // Masukkan sinopsis berdasarkan card
        modalDescription.textContent = synopsis[index];

        // Tampilkan modal
        modal.classList.remove("hidden");
    });
});


// Tombol X
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});


// Klik area luar modal untuk menutup
modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.add("hidden");
    }

});


// Tombol ESC untuk menutup
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modal.classList.add("hidden");
    }

});