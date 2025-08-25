// Seletores dos elementos
const btnsAddCarrinho = document.querySelectorAll(".add-carrinho");
const carrinhoLista = document.querySelector(".carrinho-lista");
const resultadoDiv = document.querySelector(".resultado");
const promocaoDiv = document.querySelector(".promocao");
const btnComprar = document.querySelector(".comprar");

// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para atualizar o carrinho na tela
function atualizarCarrinho() {
  // Limpa a lista apenas se o elemento existir
  if (carrinhoLista) {
    carrinhoLista.innerHTML = "";

    // Adiciona cada item do carrinho na ul
    carrinho.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} (x${
        item.quantidade
      })`;
      carrinhoLista.appendChild(li);
    });
  }

  // Calcula o valor total e descontos
  let total = 0;
  let desconto = 0;

  carrinho.forEach((item) => {
    total += item.preco * item.quantidade;
    if (item.quantidade >= 2) {
      // Exemplo: 10% de desconto para 2 ou mais unidades do mesmo medicamento
      desconto += item.preco * item.quantidade * 0.1;
    }
  });

  if (resultadoDiv) {
    resultadoDiv.textContent = `Total: R$ ${(total - desconto).toFixed(2)}`;
  }
  if (promocaoDiv) {
    promocaoDiv.textContent =
      desconto > 0 ? `Desconto aplicado: R$ ${desconto.toFixed(2)}` : "";
  }
}

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  // Verifica se já existe o medicamento no carrinho
  const existente = carrinho.find((item) => item.nome === nome);
  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }
  atualizarCarrinho();
}

// Adiciona evento aos botões de adicionar ao carrinho
btnsAddCarrinho.forEach((btn) => {
  btn.addEventListener("click", function () {
    const nome = this.getAttribute("data-nome");
    const preco = parseFloat(this.getAttribute("data-preco"));
    adicionarAoCarrinho(nome, preco);
  });
});

// Evento do botão comprar
if (btnComprar) {
  btnComprar.addEventListener("click", function () {
    // Calcula o valor total e descontos antes de limpar o carrinho
    let total = 0;
    let desconto = 0;
    carrinho.forEach((item) => {
      total += item.preco * item.quantidade;
      if (item.quantidade >= 2) {
        desconto += item.preco * item.quantidade * 0.1;
      }
    });
    const valorFinal = total - desconto;

    carrinho = [];
    atualizarCarrinho();
    alert(
      `Compra efetuada.\nValor final: R$ ${valorFinal.toFixed(
        2
      )}\nDesconto: R$ ${desconto.toFixed(2)}`
    );
  });
}
