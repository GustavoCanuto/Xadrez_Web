let casaSelecionada = null;
let pecaSelecionada = null;
let numeroFuncao;
let pontuacaoBrancas = 0;
let pontuacaoPretas = 0;
let pontuacao = 0;
let jogador = ["brancas", "pretas"];
let turno = 0;
let possiveisMovimentos = [];


document.addEventListener("DOMContentLoaded", function () {


  const casas = document.querySelectorAll(".tabuleiro > .linha > div");

  casas.forEach(function (casa) {

    casa.addEventListener("click", function () {


      if (!casa.classList.contains("movimento-possivel")) {

        removeTodasMarcacoes(casas);

      }


      if (casa.classList.contains("movimento-possivel") && casa.querySelector("img")) {

        if (isCheck(jogador[turno])) {
          alert("sua peça esta em check");
          }
 
      
        let pecaQueCaptura = pecaSelecionada;
        casaSelecionada = casa;
        pecaSelecionada = casaSelecionada.querySelector("img");
        atribuiPontuacao(pecaSelecionada);
         casaSelecionada.removeChild(pecaSelecionada);
         casaSelecionada.appendChild(pecaQueCaptura);
         trocaTurno();
         atualizarInformacoesJogo();
         removeTodasMarcacoes(casas);




      }
      else if (casa.classList.contains("movimento-possivel")) {


       // if (isCheck(jogador[turno])) {
       //  alert("sua peça esta em check");

      
         if(movimentosValidosEmCheck(casa)){
           alert("movimento valido, rei saiu do check");
          }

         


        casaSelecionada = casa;
        casa.appendChild(pecaSelecionada);
        casaSelecionada.classList.remove("selecionada");
        casaSelecionada = null;
        trocaTurno();
        atualizarInformacoesJogo();
        removeTodasMarcacoes(casas);



      

    }
      else if (casa.querySelector("img").alt.includes(jogador[turno])) {

       
        casa.classList.add("selecionada");
        casaSelecionada = casa;
        pecaSelecionada = casaSelecionada.querySelector("img");

        numeroFuncao = verificaPeca(pecaSelecionada);

        possiveisMovimentos = calculoPosicoes[numeroFuncao](casa);

        possiveisMovimentos.forEach(function (id) {

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