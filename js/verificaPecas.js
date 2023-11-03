//verifica peças
function isCorOposta(peca, div) {
       
    const corPecaNaNovaDiv = peca.alt.includes("brancas")
      ? "brancas"
      : "pretas";
  
    
    const corPecaAtual = peca.alt.includes("brancas") ? "brancas" : "pretas";
  
    return corPecaNaNovaDiv !== corPecaAtual;
  }

  function isCavalo(div) {
    const imagem = div.querySelector("img");
    if (imagem) {
      const alt = imagem.alt;
      return alt.includes("cavalo");
    }
    return false;
  }