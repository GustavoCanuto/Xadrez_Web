let reiPosicao ;
let reiEmCheck = false;
let movimentosProtegemRei = [];

function isCheck(corDoRei) {

     let possiveisMovimentos = [];
    
     reiPosicao = procurarRei(corDoRei);

     const casas = document.querySelectorAll(".tabuleiro > .linha > div");
    
     for (const casa of casas) {
       
         const peca = casa.querySelector("img");
         
        if (peca && !peca.alt.includes(corDoRei)) {
           
         numeroFuncao = verificaPeca(peca);
   
        possiveisMovimentos = calculoPosicoes[numeroFuncao](casa);

         console.log(casa);
         console.log(possiveisMovimentos);
    

           if (possiveisMovimentos.includes(reiPosicao)) {
               
                return true;
                
            }
       }
    }

   
    return false;
}


function procurarRei(cor) {
    const casas = document.querySelectorAll(".tabuleiro > .linha > div");
  
    for (const casa of casas) {
      const img = casa.querySelector("img");
      if (img && img.alt.includes(`rei ${cor}`)) {
        return casa.id;
      }
    }
  
    return null; 
  }




  function movimentosValidosEmCheck(CasaClicada) {

  
      casaSelecionada.removeChild(pecaSelecionada);
      CasaClicada.appendChild(pecaSelecionada);

      
  
      if (!isCheck(jogador[turno])) {
        alert("movimento valido");
        
        return true;
      }
  
      CasaClicada.removeChild(pecaSelecionada);
      casaSelecionada.appendChild(pecaSelecionada);
      
      alert("movimento invalido");
  
    return false;
  }