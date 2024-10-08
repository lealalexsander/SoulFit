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

function mostrarMenos1() {
    const descricao_tabela = document.getElementById("tabela-active_1");
    let button_seta = document.getElementById("button-plano_1");

    if(descricao_tabela.className === "tabela-active_1") {
        descricao_tabela.className = "tabela-desactive_1";
        button_seta.innerHTML = '<h3 class="button_texto">Mostrar mais</h3>       <img id="button_seta" class="button_seta" src="./src/icon/seta-para-baixo.png" alt="seta para baixo">'
    } else {
        descricao_tabela.className = "tabela-active_1";
        button_seta.innerHTML = '<h3 class="button_texto">Mostrar menos</h3>       <img id="button_seta" class="button_seta" src="./src/icon/seta-para-cima.png" alt="seta para cima">'
    }
}

function mostrarMenos2() {
    const descricao_tabela = document.getElementById("tabela-active_2");
    let button_seta = document.getElementById("button-plano_2");

    if(descricao_tabela.className === "tabela-active_2") {
        descricao_tabela.className = "tabela-desactive_2";
        button_seta.innerHTML = '<h3 class="button_texto">Mostrar mais</h3>       <img id="button_seta" class="button_seta" src="./src/icon/seta-para-baixo.png" alt="seta para baixo">'
    } else {
        descricao_tabela.className = "tabela-active_2";
        button_seta.innerHTML = '<h3 class="button_texto">Mostrar menos</h3>       <img id="button_seta" class="button_seta" src="./src/icon/seta-para-cima.png" alt="seta para cima">'
    }
}

function mostrarMenos3() {
    const descricao_tabela = document.getElementById("tabela-active_3");
    let button_seta = document.getElementById("button-plano_3");

    if(descricao_tabela.className === "tabela-active_3") {
        descricao_tabela.className = "tabela-desactive_3";
        button_seta.innerHTML = '<h3 class="button_texto">Mostrar mais</h3>       <img id="button_seta" class="button_seta" src="./src/icon/seta-para-baixo.png" alt="seta para baixo">'
    } else {
        descricao_tabela.className = "tabela-active_3";
        button_seta.innerHTML = '<h3 class="button_texto">Mostrar menos</h3>       <img id="button_seta" class="button_seta" src="./src/icon/seta-para-cima.png" alt="seta para cima">'
    }
}