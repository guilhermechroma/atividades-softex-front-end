const input = document.querySelector("input");
const botoes = document.querySelectorAll("button");
const lista = document.querySelector("ul");

function adicionarTarefa() {
    // Pega o valor do input e usa trim() para remover espaços em branco
    const nomeDigitado = input.value.trim();

    // Verifica se o input não está vazio
    if (nomeDigitado === "") {
        alert("Por favor, insira um nome de tarefa.");
        return;
    }

    // Encontra todas as tarefas existentes
    const listaItens = document.querySelectorAll("li");

    for (let i = 0; i < listaItens.length; i++) {
        // Pega o nome da tarefa pela classe do span
        const nometarefaExistente =
            listaItens[i].querySelector(".nome-tarefa").textContent;

        if (nomeDigitado === nometarefaExistente) {
            alert(
                `A tarefa "${nomeDigitado}" já existe! Insira outro nome de tarefa.`
            );
            return;
        }
    }

    const tarefa = document.createElement("li");

    // Cria um span para envolver apenas o nome
    const nomeTarefaElemento = document.createElement("span");
    nomeTarefaElemento.textContent = nomeDigitado;
    // Adiciona uma classe para facilitar a seleção apenas do nome da tarefa
    nomeTarefaElemento.classList.add("nome-tarefa");

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", removerTarefa);

    // Anexa o span (apenas o nome) e o botão à tarefa (li)
    tarefa.appendChild(nomeTarefaElemento);
    tarefa.appendChild(botaoRemover);

    lista.appendChild(tarefa);

    // Limpa o input após adicionar a tarefa
    input.value = "";
}

function removerTarefa(evento) {
    // Pega o exato botão que disparou o evento
    const botaoClicado = evento.target;

    // Encontra a tarefa (li) da qual aquele botão pertence (seu "pai")
    const itemLista = botaoClicado.parentNode;

    // Remove aquela tarefa inteira da lista
    lista.removeChild(itemLista);

    // Retorna no console a tarefa que foi removida
    console.log(
        `Tarefa removida: ${
            itemDaLista.querySelector(".nome-tarefa").textContent
        }`
    );
}

function limparTudo() {
    // Limpa a lista inteira
    lista.innerHTML = "";
}

for (let i = 0; i < botoes.length; i++) {
    // Primeiro botão (Adicionar)
    if (botoes[i].innerHTML === "Adicionar") {
        botoes[i].addEventListener("click", adicionarTarefa);
    }
    // Terceiro botão (Limpar Tudo)
    if (botoes[i].innerHTML === "Limpar Tudo") {
        botoes[i].addEventListener("click", limparTudo);
    }
}
