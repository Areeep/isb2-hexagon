const btnOpenForm = document.getElementById('btnOpenForm');
const btnCloseForm = document.getElementById('btnCloseForm');
const modalFormContainer = document.getElementById('modalFormContainer');

const cardForm = document.getElementById('card-form');
const galleryContainer = document.getElementById('gallery-container');

if (modalFormContainer) {
  const modalBox = modalFormContainer.querySelector('div') || modalFormContainer;
  modalBox.style.backgroundColor = '#ffffff';

  const allTexts = modalFormContainer.querySelectorAll('h1, h2, h3, h4, label, span, p, button');
  allTexts.forEach(el => {
    // Mengecualikan tombol "+ Tambah Card" agar warna tombol tetap terlihat bagus
    if (!el.classList.contains('bg-blue-600') && el.type !== 'submit') {
      el.style.color = '#000000';
    }
  });

  const inputs = modalFormContainer.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.style.backgroundColor = '#f9fafb'; // Warna latar input putih keabu-abuan terang
    input.style.color = '#000000';           // Warna teks saat diketik jadi hitam
    input.style.borderColor = '#d1d5db';     // Border abu-abu terang agar kotak input jelas
  });

  const placeholderStyle = document.createElement('style');
  placeholderStyle.innerHTML = `
    #modalFormContainer input::placeholder, 
    #modalFormContainer textarea::placeholder {
      color: #6b7280 !important;
    }
  `;
  document.head.appendChild(placeholderStyle);
}

if (btnOpenForm) {
  btnOpenForm.addEventListener('click', function () {
    modalFormContainer.classList.remove('hidden');
    modalFormContainer.classList.add('flex');
  });
}

if (btnCloseForm) {
  btnCloseForm.addEventListener('click', function () {
    modalFormContainer.classList.add('hidden');
    modalFormContainer.classList.remove('flex');
  });
}

if (cardForm) {
  cardForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const titleInput = document.getElementById('card-title').value;
    const genreInput = document.getElementById('card-genre').value;
    const metaInput = document.getElementById('card-meta').value;
    const descInput = document.getElementById('card-desc').value;
    const imageInput = document.getElementById('card-image').value;

    const newCard = document.createElement('article');

    newCard.className = "movie-card px-8 py-16 flex flex-col gap-4 bg-cover bg-center text-white rounded-2xl";
    newCard.style.backgroundImage = `url('${imageInput}')`;

    newCard.innerHTML = `
      <span class="p-1 bg-gray-950/40 rounded-md w-fit">${genreInput}</span>

      <h1 class="font-bold text-2xl">${titleInput}</h1>

      <div class="flex gap-2 p-1 rounded-lg w-fit">
        <p>${metaInput}</p>
      </div>

      <p class="max-w-[40ch] line-clamp-3">
        ${descInput}
      </p>

      <div class="flex gap-2">
        <button class="like-btn w-fit px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition" type="button">
          <span class="like-icon">♡</span>
          <span class="like-count">0</span>
        </button>
        <button class="delete-btn w-fit px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition" type="button">
          Hapus
        </button>
      </div>
    `;

    galleryContainer.appendChild(newCard);

    cardForm.reset();
    modalFormContainer.classList.add('hidden');
    modalFormContainer.classList.remove('flex');
  });
}