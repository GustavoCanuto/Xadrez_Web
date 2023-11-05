
function isCorOposta(pecaClicada, pecaSelecionada) {

  const corPecaClicada = pecaClicada.alt.includes("brancas")
    ? "brancas"
    : "pretas";


  const corPecaSelecionada = pecaSelecionada.alt.includes("brancas") ? "brancas" : "pretas";

  return corPecaClicada !== corPecaSelecionada;
}


function removeSelecionado(casaSelecionada) {

  casaSelecionada.classList.remove("selecionada");


}

function removeTodasMarcacoes(casas) {

  casas.forEach(function (casa) {

    casa.classList.remove("selecionada");
    casa.classList.remove("movimento-possivel");

  }

  );

}

function verificaPeca(pecaSelecionada) {

  let peca = pecaSelecionada.alt;

  if (peca.includes("cavalo")) {
    return 0;

  } else if (peca.includes("bispo")) {

    return 1;
  }
  else if (peca.includes("torre")) {

    return 2;
  }
  else if (peca.includes("rainha")) {

    return 3;
  }
  else if (peca.includes("rei")) {

    return 4;
  }
  else if (peca.includes("peão")) {

    return 5;
  }


}