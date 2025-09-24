const input = document.getElementById("novo-produto");
const lista = document.getElementById("produtos");
const btnAdicionar = document.getElementById("btn-adicionar");
const btnLimpar = document.getElementById("btn-limpar");

function contarLista() {
    // PARA EXIBIR A LISTA NO CONSOLE
    let itens = [];
    let listaItens = document.querySelectorAll("#produtos li");
    listaItens.forEach((item) => {
        itens.push(item.textContent);
    });
    console.log(`Lista (${itens.length} itens): ${itens}`);

    // EVENT LISTENER PARA CHECAR QUAL ITEM ESTÁ COM MOUSE EM CIMA E DESTACÁ-LO
    listaItens.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.classList.add("destaque"); // Add a CSS class for styling
        });

        item.addEventListener("mouseout", () => {
            item.classList.remove("destaque"); // Remove the CSS class
        });
    });
}

function adicionarProduto() {
    // PARA ADICIONAR O ITEM NA LISTA DO HTML
    let item = document.createElement("li");
    item.classList.add("item");
    item.textContent = input.value;
    lista.appendChild(item);

    // ATUALIZAR A CONTAGEM DE ITENS DA LISTA NO CONSOLE
    contarLista();
}

function limparLista() {
    // PARA LIMPAR TODOS OS ITENS DA LISTA DO HTML
    lista.innerHTML = "";

    // ATUALIZAR A CONTAGEM DE ITENS DA LISTA NO CONSOLE
    contarLista();
}

// INICIALIZAR A CONTAGEM DE ITENS DA LISTA NO CONSOLE
contarLista();

// EVENT LISTENER AO CLICAR NO BOTÃO "Adicionar Produto"
btnAdicionar.addEventListener("click", adicionarProduto);

// EVENT LISTENER AO PRESSIONAR A TECLA ENTER DO TECLADO (DENTRO DO INPUT)
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarProduto();
    }
});

// EVENT LISTENER AO CLICAR NO BOTÃO "Limpar Lista"
btnLimpar.addEventListener("click", limparLista);
