
let possiveisMovimentos = [];
let casaSelecionada = null;
let pecaSelecionada = null;
let numeroFuncao;


document.addEventListener("DOMContentLoaded", function () {

  const casas = document.querySelectorAll(".tabuleiro > .linha > div");

  casas.forEach(function (casa) {

    casa.addEventListener("click", function () {


      if (!casa.classList.contains("movimento-possivel")) {

        removeTodasMarcacoes(casas);

      }

      if (casa.classList.contains("movimento-possivel")) {

        casaSelecionada = casa;
        casa.appendChild(pecaSelecionada);
        casaSelecionada.classList.remove("selecionada");
        casaSelecionada = null;

        removeTodasMarcacoes(casas);


      }
      else if (casa.querySelector("img")) {

        casa.classList.add("selecionada");
        casaSelecionada = casa;
        pecaSelecionada = casaSelecionada.querySelector("img");
        possiveisMovimentos = [];

        numeroFuncao = verificaPeca(pecaSelecionada);

        calculoPosicoes[numeroFuncao](casa);

        possiveisMovimentos.forEach(function (id) {

          const casa = document.getElementById(id);

          if (casa) {

            casa.classList.add("movimento-possivel");

          }
        }
        );

      }



    });

  }); 

}); 