const botoes = document.querySelectorAll("button");
const caixa = document.getElementById("caixa");

function mudarCor() {
    // Math.random multiplicado pelo equivalente decimal do maior valor hexadecimal possível (FFFFFF)
    const corAleatoria = Math.floor(Math.random() * 16777215).toString(16);
    // Caso o número aleatório gerado para a cor seja menor que 6 digitos, a quantidade necessária para uma cor hexadecimal,
    // adiciona zeros no começo até chegar aos 6 digitos necessários para o código da cor
    caixa.style.backgroundColor = `#${corAleatoria.padStart(6, "0")}`;
}

function aumentarTamanho() {
    // Pega o tamanho atual da caixa e tira a parte "px" e armazena na variável
    const tamanhoAtual = caixa.style.width.slice(0, -2);
    // Transforma a variável do tamanhoAtual de String para Integer
    const tamanhoAtualInt = parseInt(tamanhoAtual);
    // Pega o tamanho atual, agora como número inteiro, e adiciona mais 50
    const novoTamanho = tamanhoAtualInt + 50;
    // Muda a largura e altura da caixa para o novo tamanho
    caixa.style.width = `${novoTamanho}px`;
    caixa.style.height = `${novoTamanho}px`;
}

function resetar() {
    // Reseta tudo para os atributos iniciais da caixa
    caixa.style.backgroundColor = "gray";
    caixa.style.width = "150px";
    caixa.style.height = "150px";
}

for (let i = 0; i < botoes.length; i++) {
    // Primeiro botão
    if (i === 0) {
        botoes[i].addEventListener("click", mudarCor);
    }
    // Segundo botão
    if (i === 1) {
        botoes[i].addEventListener("click", aumentarTamanho);
    }
    // Terceiro botão
    if (i === 2) {
        botoes[i].addEventListener("click", resetar);
    }
}
