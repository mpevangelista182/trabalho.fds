const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.innerText = "Você é mais forte do que pensa. Acredite!";
});
