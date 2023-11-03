//variaveis
let possiveisMovimentos = [];

//main
document.addEventListener("DOMContentLoaded", function() {

    const divs = document.querySelectorAll(".tabuleiro > .linha > div");
    let divSelecionada = null; 


    divs.forEach(function(div) {

      div.addEventListener("click", function() {

        divs.forEach(function(div) {

          div.classList.remove("selecionada");
          div.classList.remove("movimento-possivel");

        });
  
        if (isCavalo(div)) {
       
        div.classList.add("selecionada");
        divSelecionada = div;
        possiveisMovimentos = [];

        calcularPossiveisMovimentos(div);
            possiveisMovimentos.forEach(function(id) {
                const div = document.getElementById(id);
                if (div) {
                  div.classList.add("movimento-possivel");
                 
                }
              });
    
          }

        if (div.querySelector("img")) {

          div.classList.add("selecionada");
          divSelecionada = div;

        } else if (divSelecionada && !div.querySelector("img")) {
    
          const pecaSelecionada = divSelecionada.querySelector("img");
          div.appendChild(pecaSelecionada);
          divSelecionada.classList.remove("selecionada");
          divSelecionada = null; 
  
        // const divID = div.id;
        // const linha = div.parentElement.classList[1];
  
        // alert("Foi clicado na div de ID: " + divID + " na linha " + linha);

    }
});
});
});

