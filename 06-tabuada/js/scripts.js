"use strict";

function gerarTabuada() {
  const multiplicando = Number(
    document.getElementById("numeroEscolhido").value,
  );
  const tabela = document.getElementById("tabela");
  for (let i = 0; i <= 10; i++) {
    const resultado = i * multiplicando;
    const expressao = document.createElement("td");
    expressao.textContent = `${multiplicando} x ${i}`;
    const resultadoTd = document.createElement("td");
    resultadoTd.textContent = `${resultado}`;
    const template = document.createElement("tr");
    template.appendChild(expressao);
    template.appendChild(resultadoTd);
    tabela.appendChild(template);
  }
}
