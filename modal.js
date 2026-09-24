const cards = document.querySelectorAll("article");

const synopsis = [
  `The main plot centers on the fierce rivalry and political standoff between an aging town sheriff,
    Joe Cross, and the ambitious mayor, Ted Garcia. As tensions continue to rise in their small town,
    both men struggle to maintain control while their personal conflicts become increasingly difficult
    to separate from their political ambitions.`,

  `Lift follows Cyrus Whitaker, an experienced thief, and his international team of criminals as they
    attempt to steal $500 million worth of gold bullion from a passenger plane. With carefully planned
    strategies, advanced technology, and plenty of risks along the way, the team must work together
    to complete the impossible heist while staying one step ahead of the authorities.`,

  `Jake Sully now lives peacefully with his family on the beautiful moon of Pandora, where he has
    created a new life among the Na'vi. When a familiar and dangerous threat returns, Jake and Neytiri
    are forced to leave their home and fight to protect their family. Along the way, they must face
    new challenges while defending Pandora from those who seek to destroy it.`,

  `A forgotten Peter Parker lives alone while continuing to protect the city as Spider-Man, struggling
    to balance his ordinary life with the responsibilities of being a hero. As the pressure around him
    continues to grow, a dangerous change begins to take place. With a powerful new enemy emerging,
    Peter must confront his fears and the consequences of the choices he has made in the past.`,

  `Lord Voldemort has returned, but the Ministry of Magic refuses to believe that the Dark Lord is back.
    While Harry Potter struggles to convince the wizarding world of the growing danger, he finds support
    among a secret group of young wizards. Together, they begin learning how to defend themselves and
    prepare for the difficult battle that lies ahead as Voldemort's influence continues to grow.`,

  `After being imprisoned for more than a century, Dream, the powerful Lord of Dreams, finally escapes
    and discovers that his once-great kingdom has fallen into ruin. Determined to restore the realm of
    dreams, he must recover his stolen tools and regain the power he has lost over the years. Along the
    way, Dream encounters ancient beings, dangerous enemies, and the consequences of decisions from his
    distant past, forcing him to confront both his responsibilities and the changing world around him.`
];

const modal = document.createElement("div");

modal.className =
  "fixed inset-0 bg-black/70 flex items-center justify-center p-6 hidden z-50";

modal.innerHTML = `
    <div class="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-6 relative">

        <!-- Tombol X -->
        <button id="closeModal"
            class="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            type="button">
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

document.body.appendChild(modal);

const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalGenre = document.getElementById("modalGenre");
const modalInfo = document.getElementById("modalInfo");
const modalDescription = document.getElementById("modalDescription");

cards.forEach((card, index) => {
  card.classList.add("cursor-pointer");

  card.addEventListener("click", (event) => {
    if (event.target.closest(".like-btn")) {
      return;
    }

    const genre = card.querySelector("span").textContent;
    const title = card.querySelector("h1").textContent;
    const info = card.querySelector("div").textContent;

    modalTitle.textContent = title.trim();
    modalGenre.textContent = "Genre: " + genre.trim();
    modalInfo.textContent = info.trim();

    modalDescription.textContent = synopsis[index];

    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", (event) => {
  event.stopPropagation();

  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
  }
});
