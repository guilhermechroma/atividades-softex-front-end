const botoes = document.querySelectorAll("button");
const lista = document.querySelector("ul");
const input = document.querySelector("input");

function adicionarFinal() {
    if (input.value === "") {
        alert("Digite algo na caixa antes de adicionar");
        return;
    }

    const elemento = document.createElement("li");
    const textoElemento = document.createTextNode(`${input.value}`);
    elemento.appendChild(textoElemento);
    lista.appendChild(elemento);
}

function adicionarInicio() {
    if (input.value === "") {
        alert("Digite algo na caixa antes de adicionar");
        return;
    }

    const elemento = document.createElement("li");
    const textoElemento = document.createTextNode(`${input.value}`);
    elemento.appendChild(textoElemento);

    // Pega o primeiro elemento da lista
    const primeiroElemento = lista.firstElementChild;
    // Insere o novo elemento antes do primeiro da lista
    lista.insertBefore(elemento, primeiroElemento);
}

for (let i = 0; i < botoes.length; i++) {
    // Primeiro botão
    if (i === 0) {
        botoes[i].addEventListener("click", adicionarFinal);
    }
    // Segundo botão
    if (i === 1) {
        botoes[i].addEventListener("click", adicionarInicio);
    }
}
