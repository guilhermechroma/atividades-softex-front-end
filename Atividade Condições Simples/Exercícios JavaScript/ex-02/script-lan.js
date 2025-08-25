let segundos = 0;
const precoPor15Min = 2.5; // Altere para o valor desejado por 15 minutos

function formatarTempo(segundosTotais) {
  const horas = Math.floor(segundosTotais / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundosRestantes = segundosTotais % 60;
  return `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;
}

function calcularValor(segundosTotais) {
  const minutosTotais = Math.ceil(segundosTotais / 60);
  const blocosDe15Min = Math.ceil(minutosTotais / 15);
  return (blocosDe15Min * precoPor15Min).toFixed(2);
}

function atualizarTempo() {
  segundos++;
  atualizarDisplay();
}

function atualizarDisplay() {
  const tempoFormatado = formatarTempo(segundos);
  const valor = calcularValor(segundos);
  document.getElementById("tempo-uso").textContent = `${tempoFormatado}`;
  document.getElementById("valor-pagar").textContent = `R$ ${valor}`;
}

setInterval(atualizarTempo, 1000);

// Adiciona 15 minutos ao clicar no botão
document
  .getElementById("adicionar-tempo")
  .addEventListener("click", function () {
    segundos += 15 * 60;
    atualizarDisplay();
  });
