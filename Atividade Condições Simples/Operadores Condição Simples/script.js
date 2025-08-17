function checarIdade() {
  var idade = prompt("Digite sua idade: ");
  if (idade >= 18) {
    document.getElementById("resultado1").innerHTML = "Você é maior de idade.";
    document.getElementById("resultado1").style.visibility = "visible";
  } else {
    document.getElementById("resultado1").innerHTML = "Você é menor de idade.";
    document.getElementById("resultado1").style.visibility = "visible";
  }
}

function verificarNumero() {
  var numero = prompt("Digite um número: ");
  if (numero > 0) {
    document.getElementById("resultado2").innerHTML = "O número é positivo.";
    document.getElementById("resultado2").style.visibility = "visible";
  } else if (numero < 0) {
    document.getElementById("resultado2").innerHTML = "O número é negativo.";
    document.getElementById("resultado2").style.visibility = "visible";
  } else {
    document.getElementById("resultado2").innerHTML = "O número é zero.";
    document.getElementById("resultado2").style.visibility = "visible";
  }
}

function verificarParImpar() {
  var numero = prompt("Digite um número: ");
  if (numero % 2 === 0) {
    document.getElementById("resultado3").innerHTML = "O número é par.";
    document.getElementById("resultado3").style.visibility = "visible";
  } else {
    document.getElementById("resultado3").innerHTML = "O número é ímpar.";
    document.getElementById("resultado3").style.visibility = "visible";
  }
}

function verificarNotaAluno() {
  var nota = prompt("Digite a nota do aluno: ");
  if (nota >= 7) {
    document.getElementById("resultado4").innerHTML = "Aprovado";
    document.getElementById("resultado4").style.visibility = "visible";
  } else {
    document.getElementById("resultado4").innerHTML = "Reprovado";
    document.getElementById("resultado4").style.visibility = "visible";
  }
}

function verificarSenhaSecreta() {
  var senha = prompt("Digite a senha secreta: ");
  if (senha === "1234") {
    document.getElementById("resultado5").innerHTML = "Acesso permitido.";
    document.getElementById("resultado5").style.visibility = "visible";
  } else {
    document.getElementById("resultado5").innerHTML = "Acesso negado.";
    document.getElementById("resultado5").style.visibility = "visible";
  }
}

function verificarDesconto() {
  var preco = prompt("Digite o preço da compra: ");
  if (preco >= 100) {
    document.getElementById("resultado6").innerHTML = "Você ganhou desconto!";
    document.getElementById("resultado6").style.visibility = "visible";
  } else {
    document.getElementById("resultado6").innerHTML = "Sem desconto.";
    document.getElementById("resultado6").style.visibility = "visible";
  }
}

function verificarMaiorNumero() {
  var numero1 = prompt("Digite o primeiro número: ");
  var numero2 = prompt("Digite o segundo número: ");
  if (numero1 > numero2) {
    document.getElementById("resultado7").innerHTML =
      "O maior número é: " + numero1;
    document.getElementById("resultado7").style.visibility = "visible";
  } else if (numero2 > numero1) {
    document.getElementById("resultado7").innerHTML =
      "O maior número é: " + numero2;
    document.getElementById("resultado7").style.visibility = "visible";
  } else {
    document.getElementById("resultado7").innerHTML = "Os números são iguais.";
    document.getElementById("resultado7").style.visibility = "visible";
  }
}

function verificarTemperatura() {
  var temperatura = prompt("Digite a temperatura em graus Celsius: ");
  if (temperatura >= 15) {
    document.getElementById("resultado8").innerHTML = "Está quente!";
    document.getElementById("resultado8").style.visibility = "visible";
  } else {
    document.getElementById("resultado8").innerHTML = "Está frio!";
    document.getElementById("resultado8").style.visibility = "visible";
  }
}

function verificarLogin() {
  var usuario = prompt("Digite seu usuário: ");
  var senha = prompt("Digite sua senha: ");
  if (usuario === "admin" && senha === "1234") {
    document.getElementById("resultado9").innerHTML =
      "Login realizado com sucesso!";
    document.getElementById("resultado9").style.visibility = "visible";
  } else {
    document.getElementById("resultado9").innerHTML =
      "Usuário ou senha incorretos.";
    document.getElementById("resultado9").style.visibility = "visible";
  }
}

function verificarLampada() {
  var estado = prompt("A lâmpada está ligada? (on/off)");
  if (estado === "on") {
    document.getElementById("resultado10").innerHTML = "A lâmpada está acesa.";
    document.getElementById("resultado10").style.visibility = "visible";
  } else if (estado === "off") {
    document.getElementById("resultado10").innerHTML =
      "A lâmpada está apagada.";
    document.getElementById("resultado10").style.visibility = "visible";
  } else {
    document.getElementById("resultado10").innerHTML = "Comando inválido.";
    document.getElementById("resultado10").style.visibility = "visible";
  }
}
