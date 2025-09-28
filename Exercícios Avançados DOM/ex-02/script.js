const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("button");

function mostrarMensagem() {
    mensagem.innerHTML = "Promoção válida por tempo limitado! ⏳";
    // Após 5 segundos, apaga a mensagem
    setTimeout(() => {
        mensagem.innerHTML = "";
    }, 5000);
}

botao.addEventListener("click", mostrarMensagem);
