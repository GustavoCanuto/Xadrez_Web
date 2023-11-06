
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function calcularPossiveisMovimentosCavalo(casa) {

  let movimentos = [];

   movimentos = [
    { coluna: - 2, linha: - 1 },
    { coluna: - 2, linha: + 1 },
    { coluna: - 1, linha: - 2 },
    { coluna: - 1, linha: + 2 },
    { coluna: + 1, linha: - 2 },
    { coluna: + 1, linha: + 2 },
    { coluna: + 2, linha: - 1 },
    { coluna: + 2, linha: + 1 }
  ];

  return criarPossiveisMovimentosFixos(movimentos, casa);

}

function calcularPossiveisMovimentosBispo(casa) {

  let movimentos = [];

  movimentos = [
    { coluna: -1, linha: -1 },
    { coluna: 1, linha: -1 },
    { coluna: -1, linha: 1 },
    { coluna: 1, linha: 1 }
  ];

  return criarPossiveisMovimentosRepetidos(movimentos, casa);

}

function calcularPossiveisMovimentosTorre(casa) {


  let movimentos = [];

   movimentos = [
    { coluna: 0, linha: -1 },
    { coluna: 0, linha: 1 },
    { coluna: -1, linha: 0 },
    { coluna: 1, linha: 0 }
  ];

  return criarPossiveisMovimentosRepetidos(movimentos, casa)
}

function calcularPossiveisMovimentosRainha(casa) {

  let movimentos = [];

   movimentos = [

    { coluna: -1, linha: -1 },
    { coluna: 1, linha: -1 },
    { coluna: -1, linha: 1 },
    { coluna: 1, linha: 1 },


    { coluna: 0, linha: -1 },
    { coluna: 0, linha: 1 },
    { coluna: -1, linha: 0 },
    { coluna: 1, linha: 0 }
  ];

  return criarPossiveisMovimentosRepetidos(movimentos, casa);

}

function calcularPossiveisMovimentosRei(casa) {

  let movimentos = [];

   movimentos = [
    { coluna: -1, linha: -1 },
    { coluna: 0, linha: -1 },
    { coluna: 1, linha: -1 },
    { coluna: -1, linha: 0 },
    { coluna: 1, linha: 0 },
    { coluna: -1, linha: 1 },
    { coluna: 0, linha: 1 },
    { coluna: 1, linha: 1 }
  ];

  return criarPossiveisMovimentosFixos(movimentos, casa);

}

function calcularPossiveisMovimentosPeao(casa) {

  let possiveisMovimentos = [];

  const casaID = casa.id;
  const pecaSelecionadaAtual = casa.querySelector("img");
  const coluna = casaID[0];
  const linha = parseInt(casaID[1]);

  const direcao = (pecaSelecionadaAtual.alt.includes("brancas")) ? 1 : -1;

  const novaLinha = linha + direcao;

  if (novaLinha >= 1 && novaLinha <= 8) {

    const novaCasaID = coluna + novaLinha;

    const novaCasa = document.getElementById(novaCasaID);

    if (!novaCasa.querySelector("img")) {
      possiveisMovimentos.push(novaCasaID);
    }

  }


  if (
    ((direcao === 1 && linha === 2) || (direcao === -1 && linha === 7)) &&
    !document.getElementById(coluna + (linha + 2 * direcao)).querySelector("img") &&
    !document.getElementById(coluna + (linha + direcao)).querySelector("img")
  ) {
    possiveisMovimentos.push(coluna + (linha + 2 * direcao));
  }


  const diagonalEsquerda = letras.indexOf(coluna) - 1;

  if (diagonalEsquerda >= 0) {

    const novaCasaID = letras[diagonalEsquerda] + (linha + direcao);
    const novaCasa = document.getElementById(novaCasaID);

    const pecaNaDiagonal = novaCasa.querySelector("img");

    if (pecaNaDiagonal && isCorOposta(pecaNaDiagonal, pecaSelecionadaAtual)) {
      possiveisMovimentos.push(novaCasaID);
    }
  }


  const diagonalDireita = letras.indexOf(coluna) + 1;

  if (diagonalDireita < letras.length) {

    const novaCasaID = letras[diagonalDireita] + (linha + direcao);
    const novaCasa = document.getElementById(novaCasaID);
    const pecaNaDiagonal = novaCasa.querySelector("img");

    if (pecaNaDiagonal && isCorOposta(pecaNaDiagonal, pecaSelecionadaAtual)) {
      possiveisMovimentos.push(novaCasaID);
    }
  }

  return possiveisMovimentos;

}

function criarPossiveisMovimentosFixos(movimentos, casa) {
  let possiveisMovimentos = []; 
  const casaID = casa.id;
  const pecaSelecionadaAtual = casa.querySelector("img");
  const coluna = letras.indexOf(casaID[0]);
  const linha = parseInt(casaID[1]);

  movimentos.forEach(function (movimento) {
    let colunaPossivel = coluna + movimento.coluna;
    let linhaPossivel = linha + movimento.linha;

    if (colunaPossivel >= 0 && colunaPossivel < letras.length && linhaPossivel >= 1 && linhaPossivel <= 8) {
      const novaCasaID = letras[colunaPossivel] + linhaPossivel;
      const novaCasa = document.getElementById(novaCasaID);
      const pecaNaNovaCasa = novaCasa.querySelector("img");
      
      if (!pecaNaNovaCasa || isCorOposta(pecaNaNovaCasa, pecaSelecionadaAtual)) {
        possiveisMovimentos.push(novaCasaID);
      }
    }

    
  });
  return possiveisMovimentos;
}

function criarPossiveisMovimentosRepetidos(movimentos, casa) {
  let possiveisMovimentos =[]; 
  const casaID = casa.id;
  const pecaSelecionadaAtual = casa.querySelector("img");
  const coluna = letras.indexOf(casaID[0]);
  const linha = parseInt(casaID[1]);

  movimentos.forEach(function (movimento) {
    let colunaPossivel = coluna + movimento.coluna;
    let linhaPossivel = linha + movimento.linha;

    while (colunaPossivel >= 0 && colunaPossivel < letras.length && linhaPossivel >= 1 && linhaPossivel <= 8) {
      const novaCasaID = letras[colunaPossivel] + linhaPossivel;
      const novaCasa = document.getElementById(novaCasaID);
      const pecaNaNovaCasa = novaCasa.querySelector("img");

      if (!pecaNaNovaCasa) {
        possiveisMovimentos.push(novaCasaID);
      } else if (isCorOposta(pecaNaNovaCasa, pecaSelecionadaAtual)) {
        possiveisMovimentos.push(novaCasaID);
        break;
      } else {
        break;
      }

      colunaPossivel += movimento.coluna;
      linhaPossivel += movimento.linha;
    }


    
  }
  
  
  );
  return possiveisMovimentos;

}


const calculoPosicoes = [calcularPossiveisMovimentosCavalo, calcularPossiveisMovimentosBispo, calcularPossiveisMovimentosTorre, calcularPossiveisMovimentosRainha, calcularPossiveisMovimentosRei, calcularPossiveisMovimentosPeao];