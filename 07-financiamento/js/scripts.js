function simularFinanciamento() {
  const valorTotal = Number(document.getElementById("valorTotal").value);

  const juros = Number(document.getElementById("taxaDeJuros").value);

  const parcelas = Number(
    document.getElementById("quantidadeDeParcelas").value,
  );

  const template = document.getElementById("template");
  template.replaceChildren();

  let saldoDevedorAtual = valorTotal;

  for (let i = 1; i <= parcelas; i++) {
    const jurosMes = saldoDevedorAtual * (juros / 100);
    const valorParcela = valorTotal / parcelas;
    const totalMes = valorParcela + jurosMes;

    saldoDevedorAtual = saldoDevedorAtual - valorParcela;

    const tabela = document.createElement("tr");

    const mes = document.createElement("td");
    const jurosDoMes = document.createElement("td");
    const parcela = document.createElement("td");
    const valorTotalMes = document.createElement("td");
    const saldoDevedor = document.createElement("td");

    mes.textContent = `${i}`;
    jurosDoMes.textContent = `R$ ${jurosMes.toFixed(2)}`;
    parcela.textContent = `R$ ${valorParcela.toFixed(2)}`;
    valorTotalMes.textContent = `R$ ${totalMes.toFixed(2)}`;
    saldoDevedor.textContent = `R$ ${saldoDevedorAtual.toFixed(2)}`;

    jurosDoMes.className = "col-juros";
    valorTotalMes.className = "col-total";
    saldoDevedor.className = "col-saldo";

    tabela.appendChild(mes);
    tabela.appendChild(jurosDoMes);
    tabela.appendChild(parcela);
    tabela.appendChild(valorTotalMes);
    tabela.appendChild(saldoDevedor);

    template.appendChild(tabela);
  }
}
