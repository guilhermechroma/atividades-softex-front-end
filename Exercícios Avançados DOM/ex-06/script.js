const imagem = document.querySelector("#galeria img");
const botoes = document.querySelectorAll("button");
console.log(imagem);

function trocarImagemGato() {
    imagem.setAttribute("src", "imagem1.jpeg");
    imagem.setAttribute("alt", "gato");
}

function trocarImagemCachorro() {
    imagem.setAttribute("src", "imagem2.jpg");
    imagem.setAttribute("alt", "cachorro");
}

function trocarImagemArara() {
    imagem.setAttribute("src", "imagem3.jpg");
    imagem.setAttribute("alt", "arara");
}

for (let i = 0; i < botoes.length; i++) {
    // Primeiro botão
    if (i === 0) {
        botoes[i].addEventListener("click", trocarImagemGato);
    }
    // Segundo botão
    if (i === 1) {
        botoes[i].addEventListener("click", trocarImagemCachorro);
    }
    // Terceiro botão
    if (i === 2) {
        botoes[i].addEventListener("click", trocarImagemArara);
    }
}
