let carrinho = {};
const btnComprar = document.querySelector(".comprar");

function adicionarAoCarrinho(nome, preco) {
  if (!carrinho[nome]) {
    carrinho[nome] = { quantidade: 0, preco };
  }
  carrinho[nome].quantidade++;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("carrinho");
  lista.innerHTML = "";
  let total = 0;
  let descontoTotal = 0;
  let descontoMsg = "";

  for (const nome in carrinho) {
    const { quantidade, preco } = carrinho[nome];
    let desconto = 0;
    if (quantidade >= 3) {
      const grupos = Math.floor(quantidade / 3);
      desconto = grupos * (preco * 0.5);
      descontoMsg += `${nome}: ${grupos} desconto(s) de 50% no 3º item<br>`;
    }
    descontoTotal += desconto;
    total += quantidade * preco;
    const item = document.createElement("li");
    item.textContent = `${nome} - ${quantidade} x R$ ${preco.toFixed(2)}`;
    lista.appendChild(item);
  }

  document.getElementById("desconto").innerHTML = descontoMsg
    ? `<strong>Descontos aplicados:</strong><br>${descontoMsg}`
    : "";
  document.getElementById("total").innerHTML = `<strong>Total:</strong> R$ ${(
    total - descontoTotal
  ).toFixed(2)}`;
}

// Evento do botão comprar
if (btnComprar) {
  btnComprar.addEventListener("click", function () {
    // Calcula o valor total e descontos antes de limpar o carrinho
    let total = 0;
    let desconto = 0;
    for (const nome in carrinho) {
      const item = carrinho[nome];
      total += item.preco * item.quantidade;
      if (item.quantidade >= 3) {
        const grupos = Math.floor(item.quantidade / 3);
        desconto += grupos * (item.preco * 0.5);
      }
    }
    const valorFinal = total - desconto;

    carrinho = {};
    atualizarCarrinho();
    alert(
      `Compra efetuada.\nValor final: R$ ${valorFinal.toFixed(
        2
      )}\nDesconto: R$ ${desconto.toFixed(2)}`
    );
  });
}
