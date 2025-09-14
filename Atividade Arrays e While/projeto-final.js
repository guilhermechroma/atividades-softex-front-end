// Biblioteca para usar o prompt dentro do próprio terminal
const prompt = require("prompt-sync")();

let lista = [];

console.log("=======================");
console.log("=== MENU DE COMPRAS ===");
console.log(
    "1 - Adicionar item \n2 - Remover último item \n3 - Listar itens \n4 - Sair"
);
console.log("=======================");

let opcao = prompt("Escolha uma opção (digite apenas o número): ");

// Caso escolha a opção "sair", retornará uma mensagem de despedida antes de finalizar o programa
if (opcao === "4") {
    console.log("\nVolte sempre!");
}

while (opcao != 4) {
    switch (opcao) {
        // Adicionar item
        case "1":
            console.log("");
            let item = prompt("Escreva o nome do item: ");
            console.log(`\n(+) ${item} foi adicionado à lista.`);
            lista.push(item);
            opcao = 0; // Reseta a opção selecionada, redirecionando para o default após o break
            break;
        // Remover último item
        case "2":
            if (lista.length === 0) {
                console.log("\nA lista já está vazia!");
            } else {
                console.log(
                    `\n(-) ${lista[lista.length - 1]} foi removido da lista.`
                );
                lista.pop();
            }
            opcao = 0; // Reseta a opção selecionada, redirecionando para o default após o break
            break;
        // Listar itens
        case "3":
            if (lista.length === 0) {
                console.log("\nA lista está vazia!");
            } else {
                let contador = 0;
                console.log("\n=-=-= LISTA DE COMPRAS =-=-=");
                while (contador < lista.length) {
                    console.log(`${contador + 1} - ${lista[contador]}`);
                    contador++;
                }
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
            }
            opcao = 0; // Reseta a opção selecionada, redirecionando para o default após o break
            break;

        // Retorno padrão, após finalizar alguma das opções do menu ou escolher uma opção inválida
        default:
            // Caso a opção digitada não esteja na lista (inválida)
            if (opcao !== 0) {
                console.log("\nOpção inválida! Tente novamente.");
            }

            opcao = 0; // Reseta a opção selecionada
            console.log("\n=======================");
            console.log("=== MENU DE COMPRAS ===");
            console.log(
                "1 - Adicionar item \n2 - Remover último item \n3 - Listar itens \n4 - Sair"
            );
            console.log("=======================");

            opcao = prompt("Escolha uma opção (digite apenas o número): ");

            // Caso escolha a opção "sair", retornará uma mensagem de despedida antes de finalizar o programa
            if (opcao === "4") {
                console.log("\nVolte sempre!");
            }
            break;
    }
}
