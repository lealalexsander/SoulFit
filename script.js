function aparecerMenu() {
    const sidebar = document.getElementById("sidebar");
    const background_noclick = document.getElementById("background-noclick");

    if(sidebar.className === "sidebar") {
        sidebar.className = "sidebar-active";
        background_noclick.className = "background-noclick-active";
    } else {
        sidebar.className = "sidebar";
        background_noclick.className = "background-noclick";
    }
}

function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = img.src; // Define a imagem do modal como a imagem clicada
    captionText.innerHTML = img.alt; // Adiciona a descrição da imagem
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta o modal
}
