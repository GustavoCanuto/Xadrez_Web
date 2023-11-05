
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function calcularPossiveisMovimentosCavalo(casa) {

  possiveisMovimentos = [];

  const movimentos = [
    { coluna: - 2, linha: - 1 },
    { coluna: - 2, linha: + 1 },
    { coluna: - 1, linha: - 2 },
    { coluna: - 1, linha: + 2 },
    { coluna: + 1, linha: - 2 },
    { coluna: + 1, linha: + 2 },
    { coluna: + 2, linha: - 1 },
    { coluna: + 2, linha: + 1 }
  ];

  criarPossiveisMovimentosFixos(movimentos, casa);

}

function calcularPossiveisMovimentosBispo(casa) {
  possiveisMovimentos = [];

  const movimentos = [
    { coluna: -1, linha: -1 },
    { coluna: 1, linha: -1 },
    { coluna: -1, linha: 1 },
    { coluna: 1, linha: 1 }
  ];

  criarPossiveisMovimentosRepetidos(movimentos, casa);

}

function calcularPossiveisMovimentosTorre(casa) {
  possiveisMovimentos = [];


  const movimentos = [
    { coluna: 0, linha: -1 },
    { coluna: 0, linha: 1 },
    { coluna: -1, linha: 0 },
    { coluna: 1, linha: 0 }
  ];

  criarPossiveisMovimentosRepetidos(movimentos, casa)
}

function calcularPossiveisMovimentosRainha(casa) {

  possiveisMovimentos = [];
 
  const movimentos = [

    { coluna: -1, linha: -1 },
    { coluna: 1, linha: -1 },
    { coluna: -1, linha: 1 },
    { coluna: 1, linha: 1 },


    { coluna: 0, linha: -1 },
    { coluna: 0, linha: 1 },
    { coluna: -1, linha: 0 },
    { coluna: 1, linha: 0 }
  ];

  criarPossiveisMovimentosRepetidos(movimentos, casa);

}

function calcularPossiveisMovimentosRei(casa) {

  possiveisMovimentos = [];

  const movimentos = [
    { coluna: -1, linha: -1 },
    { coluna: 0, linha: -1 },
    { coluna: 1, linha: -1 },
    { coluna: -1, linha: 0 },
    { coluna: 1, linha: 0 },
    { coluna: -1, linha: 1 },
    { coluna: 0, linha: 1 },
    { coluna: 1, linha: 1 }
  ];

  criarPossiveisMovimentosFixos(movimentos, casa);

}

function calcularPossiveisMovimentosPeao(casa) {

  possiveisMovimentos = [];

  const casaID = casa.id;
  const coluna = casaID[0];
  const linha = parseInt(casaID[1]);

  const direcao = (pecaSelecionada.alt.includes("brancas")) ? 1 : -1;

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
  )
   {
    possiveisMovimentos.push(coluna + (linha + 2 * direcao));
  }


  const diagonalEsquerda = letras.indexOf(coluna) - 1;

  if (diagonalEsquerda >= 0) {

    const novaCasaID = letras[diagonalEsquerda] + (linha + direcao);
    const novaCasa = document.getElementById(novaCasaID);

    const pecaNaDiagonal = novaCasa.querySelector("img");

    if (pecaNaDiagonal && isCorOposta(pecaNaDiagonal, pecaSelecionada))
     {
      possiveisMovimentos.push(novaCasaID);
    }
  }


  const diagonalDireita = letras.indexOf(coluna) + 1;

  if (diagonalDireita < letras.length) {

    const novaCasaID = letras[diagonalDireita] + (linha + direcao);
    const novaCasa = document.getElementById(novaCasaID);
    const pecaNaDiagonal = novaCasa.querySelector("img");

    if (pecaNaDiagonal && isCorOposta(pecaNaDiagonal, pecaSelecionada)) 
    {
      possiveisMovimentos.push(novaCasaID);
    }
  }
}

function criarPossiveisMovimentosFixos(movimentos, casa) {

  const casaID = casa.id;
  const coluna = letras.indexOf(casaID[0]);
  const linha = parseInt(casaID[1]);

  movimentos.forEach(function (movimento) {
    let colunaPossivel = coluna + movimento.coluna;
    let linhaPossivel = linha + movimento.linha;

    if (colunaPossivel >= 0 && colunaPossivel < letras.length && linhaPossivel >= 1 && linhaPossivel <= 8) {
      const novaCasaID = letras[colunaPossivel] + linhaPossivel;
      const novaCasa = document.getElementById(novaCasaID);
      const pecaNaNovaCasa = novaCasa.querySelector("img");

      if (!pecaNaNovaCasa || isCorOposta(pecaNaNovaCasa, pecaSelecionada)) {
        possiveisMovimentos.push(novaCasaID);
      }
    }
  });

}

function criarPossiveisMovimentosRepetidos(movimentos, casa) {

  const casaID = casa.id;
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
      } else if (isCorOposta(pecaNaNovaCasa, pecaSelecionada)) {
        possiveisMovimentos.push(novaCasaID);
        break;
      } else {
        break;
      }

      colunaPossivel += movimento.coluna;
      linhaPossivel += movimento.linha;
    }
  });


}


const calculoPosicoes = [calcularPossiveisMovimentosCavalo, calcularPossiveisMovimentosBispo, calcularPossiveisMovimentosTorre, calcularPossiveisMovimentosRainha, calcularPossiveisMovimentosRei, calcularPossiveisMovimentosPeao];