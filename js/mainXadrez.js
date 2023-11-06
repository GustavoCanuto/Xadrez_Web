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
let roqueLongoBrancas = true;
let roqueCurtoBrancas = true;
let roqueLongoPretas = true;
let roqueCurtoPretas = true;
let roquesValidos = [];




document.addEventListener("DOMContentLoaded", function () {


  const casas = document.querySelectorAll(".tabuleiro > .linha > div");

  casas.forEach(function (casa) {

    casa.addEventListener("click", function () {


      if (!casa.classList.contains("movimento-possivel")) {

        removeTodasMarcacoes(casas);

      }


      if (casa.classList.contains("movimento-possivel") && casa.querySelector("img")) {

        verificaRoque();

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

        if(pecaSelecionada.alt.includes("rei") && roquesValidos.length > 0){


          if (casa.id == "c1") {
            let torre = document.getElementById("a1").querySelector("img"); 
            let novaCasaTorre = document.getElementById("d1"); 
            novaCasaTorre.appendChild(torre);

            
          }
          
          else if (casa.id == "g1") {
            let torre = document.getElementById("h1").querySelector("img"); 
            let novaCasaTorre = document.getElementById("f1"); 
            novaCasaTorre.appendChild(torre);
          }

          else if (casa.id == "c8") {
            let torre = document.getElementById("a8").querySelector("img"); 
            let novaCasaTorre = document.getElementById("d8"); 
            novaCasaTorre.appendChild(torre);
          }
          
          else if (casa.id == "g1") {
            let torre = document.getElementById("h8").querySelector("img"); 
            let novaCasaTorre = document.getElementById("f8"); 
            novaCasaTorre.appendChild(torre);
          }


         }

        verificaRoque();

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

        roquesValidos = [];
        possiveisMovimentos = [];
        casaSelecionada = casa;
        pecaSelecionada = casaSelecionada.querySelector("img");
        pecaSelecionada.classList.add("selecionada");

        numeroFuncao = verificaPeca(pecaSelecionada);

         possiveisMovimentos = calculoPosicoes[numeroFuncao](casa);

         movimentoLivreRoque();
         
         if(pecaSelecionada.alt.includes("rei")){


          if (roquesValidos.includes(1)) {
            possiveisMovimentos.push("c1");
          }
          
          if (roquesValidos.includes(2)) {
            possiveisMovimentos.push("g1");
          }

          if (roquesValidos.includes(3)) {
            possiveisMovimentos.push("c8");
          }
          
          if (roquesValidos.includes(4)) {
            possiveisMovimentos.push("g8");
          }


         }

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