let display = document.getElementById("display");
const sinais = ["+", "-", "*", "/"];

let tema = document.getElementById("tema");

function trocarTema() {
  if (tema.getAttribute("href") === "./styles/light.css") {
    tema.setAttribute("href", "./styles/dark.css");
  } else {
    tema.setAttribute("href", "./styles/light.css");
  }
}

function adicionar(valor) {
  if (sinais.includes(valor)) {
    if (valor === "*" || valor === "/") {
      if (display.value !== "") {
        if (!sinais.includes(display.value.slice(-1))) {
          display.value += valor;
        } else {
          display.value = display.value.substring(0, display.value.length - 1);
          display.value += valor;
        }
      }
    } else if (!sinais.includes(display.value.slice(-1))) {
      display.value += valor;
    } else {
      display.value = display.value.substring(0, display.value.length - 1);
      display.value += valor;
    }
  } else if (valor === "(") {
    if (display.value.slice(-1) === ")") {
      display.value += "*";
      display.value += valor;
    } else {
      display.value += valor;
    }
  } else {
    display.value += valor;
  }
}

function limpar() {
  display.value = "";
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert("Expressão inválida!");
  }
}

function apagar() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function inverter() {
  if (display.value.slice(-1) === "+") {
    display.value = display.value.slice(0, -1) + "-";
  } else if (display.value.slice(-1) === "-") {
    display.value = display.value.slice(0, -1) + "+";
  } else if (display.value.slice(-1) === "*") {
    display.value = display.value.slice(0, -1) + "/";
  } else if (display.value.slice(-1) === "/") {
    display.value = display.value.slice(0, -1) + "*";
  }
}
