let casaSelecionada = null;
let pecaSelecionada = null;
let numeroFuncao;
let pontuacaoBrancas = 0;
let pontuacaoPretas = 0;
let pontuacao = 0;
let jogador = ["brancas", "pretas"];
let turno = 0;
let possiveisMovimentos = [];
let pecaQueCaptura;
let casasQuePodeFazerEnPassant = [];
let casaQuePodeLevarEnPassant;
let casaAtaquePassant;
let EnPassantAtivo = false;


document.addEventListener("DOMContentLoaded", function () {


  const casas = document.querySelectorAll(".tabuleiro > .linha > div");

  casas.forEach(function (casa) {

    casa.addEventListener("click", function () {


      if (!casa.classList.contains("movimento-possivel")) {

        removeTodasMarcacoes(casas);

      }


      if (casa.classList.contains("movimento-possivel") && casa.querySelector("img")) {



        pecaQueCaptura = pecaSelecionada;
        casaSelecionada = casa;
        pecaSelecionada = casaSelecionada.querySelector("img");
        atribuiPontuacao(pecaSelecionada);
        
        casaSelecionada.removeChild(pecaSelecionada);
        casaSelecionada.appendChild(pecaQueCaptura);

        verificarPromocaoPeao(casa, pecaQueCaptura);

        removeTodasMarcacoes(casas);
        
        trocaTurno();
      
        verificaEstadoJogo();
        atualizarInformacoesJogo();
       




      }
      else if (casa.classList.contains("movimento-possivel")) {


        if(casaAtaquePassant == casa.id && pecaSelecionada.alt.includes("peão")){
          const casaCapturada = document.getElementById(casaQuePodeLevarEnPassant);
          const pecaCapituradaPassant = casaCapturada.querySelector("img");
          casaCapturada.removeChild(pecaCapituradaPassant);
        }

        verificarEnPassant(casa);
        casaSelecionada = casa;
        casa.appendChild(pecaSelecionada);
        pecaSelecionada.classList.remove("selecionada");
        casaSelecionada = null;
        verificarPromocaoPeao(casa, pecaSelecionada );
        removeTodasMarcacoes(casas);
        trocaTurno();
        
        verificaEstadoJogo();
        atualizarInformacoesJogo();
      






      }
      else if (casa.querySelector("img").alt.includes(jogador[turno])) {



        casaSelecionada = casa;
        pecaSelecionada = casaSelecionada.querySelector("img");
        pecaSelecionada.classList.add("selecionada");

        numeroFuncao = verificaPeca(pecaSelecionada);

         possiveisMovimentos = calculoPosicoes[numeroFuncao](casa);


         if(casasQuePodeFazerEnPassant.includes(casa.id)){

          let linhaCasaPecaAmeacadaPassant = parseInt(casaQuePodeLevarEnPassant[1]);

          if(linhaCasaPecaAmeacadaPassant == 4){
          
           linhaCasaPecaAmeacadaPassant -= 1;
         }
          else if (linhaCasaPecaAmeacadaPassant == 5){
      
            linhaCasaPecaAmeacadaPassant += 1;
          }

          casaAtaquePassant = casaQuePodeLevarEnPassant[0] + linhaCasaPecaAmeacadaPassant;

          const casaPossivelPassant = document.getElementById(casaAtaquePassant);
          
          possiveisMovimentos.push(casaAtaquePassant);

       }


        const possiveisMovimentosVerificados = movimentosValidosEmCheck(possiveisMovimentos, casa);
       
      

        possiveisMovimentosVerificados.forEach(function (id) {

          const casa = document.getElementById(id);

          if (casa) {

            casa.classList.add("movimento-possivel");

            
          }
        }
        );


      }


    }
    );

  });

}); 