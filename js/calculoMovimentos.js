
//calcular movimentos
function calcularPossiveisMovimentos(div) {
    possiveisMovimentos = []; 
  
    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const divID = div.id;
  
    if (divID.length === 2) {
      const coluna = divID[0];
      const linha = parseInt(divID[1]);
  
      
      const movimentos = [
        { coluna: letras.indexOf(coluna) - 2, linha: linha - 1 },
        { coluna: letras.indexOf(coluna) - 2, linha: linha + 1 },
        { coluna: letras.indexOf(coluna) - 1, linha: linha - 2 },
        { coluna: letras.indexOf(coluna) - 1, linha: linha + 2 },
        { coluna: letras.indexOf(coluna) + 1, linha: linha - 2 },
        { coluna: letras.indexOf(coluna) + 1, linha: linha + 2 },
        { coluna: letras.indexOf(coluna) + 2, linha: linha - 1 },
        { coluna: letras.indexOf(coluna) + 2, linha: linha + 1 }
      ];
  
      movimentos.forEach(function(movimento) {
        if (movimento.coluna >= 0 && movimento.coluna < letras.length && movimento.linha >= 1 && movimento.linha <= 8) {
            const novaDivID = letras[movimento.coluna] + movimento.linha;

            const novaDiv = document.getElementById(novaDivID);
            const pecaNaNovaDiv = novaDiv.querySelector("img");
    
 
            if (!pecaNaNovaDiv || isCorOposta(pecaNaNovaDiv, div)) {
              possiveisMovimentos.push(novaDivID);
            }
        }
      }
      );

    }
  }
