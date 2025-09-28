const botao = document.querySelector("button");
const estoque = document.getElementById("estoque");
let contagemProduto = 1;

function adicionarProduto() {
    // Ao chegar a 10 produtos adicionados na tela
    if (contagemProduto > 10) {
        alert("Limite máximo de produtos atingido!");
        botao.disabled = true; // Desabilita o botão
        return; // Impede a adição de mais produtos, terminando a função aqui
    }
    const produto = document.createElement("li");
    const textoProduto = document.createTextNode(`Produto ${contagemProduto}`);
    produto.appendChild(textoProduto);
    estoque.appendChild(produto);

    contagemProduto++;
}

botao.addEventListener("click", adicionarProduto);
