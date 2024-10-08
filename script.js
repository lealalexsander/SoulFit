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
function toggleTabela(planoId) {
    const descricao_tabela = document.getElementById(`tabela-active_${planoId}`);
    let button_seta = document.getElementById(`button-plano_${planoId}`);

    if (descricao_tabela.classList.contains("tabela-active")) {
        descricao_tabela.classList.remove("tabela-active");
        descricao_tabela.classList.add("tabela-desactive");
        button_seta.innerHTML = '<h3 class="button_texto">Mostrar mais</h3><img class="button_seta" src="./src/icon/seta-para-baixo.png" alt="seta para baixo">';
    } else {
        descricao_tabela.classList.remove("tabela-desactive");
        descricao_tabela.classList.add("tabela-active");
        button_seta.innerHTML = '<h3 class="button_texto">Mostrar menos</h3><img class="button_seta" src="./src/icon/seta-para-cima.png" alt="seta para cima">';
    }
}
