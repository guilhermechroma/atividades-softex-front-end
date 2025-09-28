const botoes = document.querySelectorAll("button");
const titulo = document.getElementById("titulo");

const tituloTemaEscuro = document.createElement("h1");
tituloTemaEscuro.textContent = "Loja Virtual – Tema Escuro 🌙";
tituloTemaEscuro.classList.add("titulo");

const tituloTemaClaro = document.createElement("h1");
tituloTemaClaro.textContent = "Minha Loja Virtual ☀️";
tituloTemaClaro.classList.add("titulo");

function temaEscuro() {
    // Caso o titulo já tenha sido trocado, troca o tituloTemaClaro
    if (titulo.parentNode === null) {
        tituloTemaClaro.parentNode.replaceChild(
            tituloTemaEscuro,
            tituloTemaClaro
        );
    } else {
        titulo.parentNode.replaceChild(tituloTemaEscuro, titulo);
    }
}

function temaClaro() {
    // Caso o titulo já tenha sido trocado, troca o tituloTemaEscuro
    if (titulo.parentNode === null) {
        tituloTemaEscuro.parentNode.replaceChild(
            tituloTemaClaro,
            tituloTemaEscuro
        );
    } else {
        titulo.parentNode.replaceChild(tituloTemaClaro, titulo);
    }
}

for (let i = 0; i < botoes.length; i++) {
    // Primeiro botão
    if (i === 0) {
        botoes[i].addEventListener("click", temaEscuro);
    }
    // Segundo botão
    if (i === 1) {
        botoes[i].addEventListener("click", temaClaro);
    }
}
