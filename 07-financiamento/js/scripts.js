function simularFinanciamento() {
  const valorTotal = Number(document.getElementById("valorTotal").value);

  const juros = Number(document.getElementById("taxaDeJuros").value);

  const parcelas = Number(
    document.getElementById("quantidadeDeParcelas").value,
  );

  const valorParcela = Number(document.getElementById("valorParcela").value);

  const template = document.getElementById("template");
  template.replaceChildren();

  let saldoDevedorAtual = valorTotal;

  for (let i = 1; i <= parcelas; i++) {
    const jurosMes = saldoDevedorAtual * (juros / 100);
    const totalMes = valorParcela + jurosMes;
    saldoDevedorAtual = saldoDevedorAtual + jurosMes - valorParcela;

    const tabela = document.createElement("tr");

    const mes = document.createElement("td");
    const jurosDoMes = document.createElement("td");
    const parcela = document.createElement("td");
    const valorTotalMes = document.createElement("td");
    const saldoDevedor = document.createElement("td");

    mes.textContent = `${i}`;
    jurosDoMes.textContent = `${jurosMes.toFixed(2)}`;
    parcela.textContent = `${valorParcela.toFixed(2)}`;
    valorTotalMes.textContent = `${totalMes.toFixed(2)}`;
    saldoDevedor.textContent = `${saldoDevedorAtual.toFixed(2)}`;

    tabela.appendChild(mes);
    tabela.appendChild(jurosDoMes);
    tabela.appendChild(parcela);
    tabela.appendChild(valorTotalMes);
    tabela.appendChild(saldoDevedor);

    template.appendChild(tabela);
  }
}
