function showToast(message) {
    const toast = document.createElement("div");
    
    toast.className = "fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 z-[100] opacity-100";
    toast.textContent = message;
    
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.replace("opacity-100", "opacity-0");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showConfirmModal(card) {
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-[100] backdrop-blur-sm transition-opacity";
    
    const modal = document.createElement("div");
    modal.className = "bg-white text-gray-900 p-6 rounded-xl shadow-2xl max-w-sm w-full mx-4";
    modal.innerHTML = `
        <h3 class="text-lg font-semibold mb-6">anda yakin ingin menghapus ini?</h3>
        <div class="flex justify-end gap-3">
            <button id="cancel-btn" class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium">Batal</button>
            <button id="confirm-btn" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition font-medium">Ya, Hapus</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    document.getElementById("cancel-btn").addEventListener("click", () => {
        overlay.remove();
    });

    document.getElementById("confirm-btn").addEventListener("click", () => {
        card.remove();
        overlay.remove();
        showToast("Film berhasil dihapus!");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation();
            
            const card = event.target.closest("article");
            if (card) {
                showConfirmModal(card);
            }
        });
    });
});