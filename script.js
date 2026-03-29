function falarComigo() {
  window.open("https://wa.me/5513991652453");
}

function enviar() {
  let nome = document.getElementById("nome").value;
  let mensagem = document.getElementById("mensagem").value;
  let telefone = document.getElementById("telefone").value;

  // remove tudo que não é número
telefone = telefone.replace(/\D/g, "");


  if (nome === "" || mensagem === "" || telefone === "") {
    alert("Preencha todos os campos!");
    return;
  }
  // adiciona o código do Brasil
telefone = "55" + telefone;
  let texto = `Olá, me chamo ${nome}. ${mensagem}. Retorne no número ${telefone}`;
  let url = "https://wa.me/5513991652453?text=" + encodeURIComponent(texto);

  window.open(url);
}

function formatarTelefone(input) {
  let valor = input.value.replace(/\D/g, "");

  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length > 6) {
    input.value = `(${valor.slice(0,2)}) ${valor.slice(2,7)}-${valor.slice(7)}`;
  } else if (valor.length > 2) {
    input.value = `(${valor.slice(0,2)}) ${valor.slice(2)}`;
  } else {
    input.value = valor;
  }
}

function TradingJournal(){
  let url="https://lucasssssp.github.io/tradingjournal/public";
  window.open(url);
}

function GrowBank(){
  let url="https://lucasssssp.github.io/banco-digital-node/public";
  window.open(url);
}