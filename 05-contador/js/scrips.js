"use strict";

function gerarContagem() {
  const inicio = Number(document.getElementById("inicio").value);
  const fim = Number(document.getElementById("fim").value);
  const salto = Number(document.getElementById("salto").value);
  const lista = document.getElementById("lista");

  for (let i = inicio; i <= fim; i = i + salto) {
    const itemLista = document.createElement("li");
    itemLista.textContent = i;
    lista.appendChild(itemLista);
  }
}
