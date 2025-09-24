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
}

function adicionarProduto() {
    // APENAS ADICIONA PRODUTO SE INPUT NÃO ESTIVER VAZIO
    if (input.value !== "") {
        // PARA ADICIONAR O ITEM NA LISTA DO HTML
        let item = document.createElement("li");
        item.classList.add("item");
        item.textContent = input.value;
        lista.appendChild(item);
        input.value = "";

        // ATUALIZAR A CONTAGEM DE ITENS DA LISTA NO CONSOLE
        contarLista();
    }
}

function limparLista() {
    // PARA LIMPAR TODOS OS ITENS DA LISTA DO HTML
    lista.innerHTML = "";

    // ATUALIZAR A CONTAGEM DE ITENS DA LISTA NO CONSOLE
    contarLista();
}

// INICIALIZAR A CONTAGEM DE ITENS DA LISTA NO CONSOLE
contarLista();

// EVENT LISTENER PARA CHECAR QUAL ITEM ESTÁ COM MOUSE EM CIMA E DESTACÁ-LO
lista.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.add("destaque");
    }
});

// EVENT LISTENER PARA CHECAR SE O MOUSE SAIU DE CIMA DO ITEM E REMOVER SEU DESTAQUE
lista.addEventListener("mouseout", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.remove("destaque");
    }
});

// EVENT LISTENER PARA CHECAR DUPLO CLIQUE E REMOVER O ITEM SELECIONADO
lista.addEventListener("dblclick", (e) => {
    if (e.target.tagName === "LI") {
        // e.target é o item "li" que foi clicado duas vezes
        e.target.parentNode.removeChild(e.target);
        contarLista(); // Chama novamente a contagem de itens da lista, após a remoção
    }
});

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
