const itens = document.querySelectorAll("#lista-compras li");

for (let i = 0; i < itens.length; i++) {
    // Pega o terceiro item da array (0 > 1 > 2)
    if (i === 2) {
        itens[i].style.color = "blue";
    }

    // Checa se o nome do item tem MAIS de 5 caracteres
    if (itens[i].innerHTML.length > 5) {
        itens[i].style.backgroundColor = "green";
    }

    // Adiciona o emoji de carrinho no final do nome do item
    itens[i].innerHTML = `${itens[i].innerHTML} 🛒`;
}
