let peaoPretas;
let peaoBrancas;
let realezaPretas = [];
let realezaBrancas = [];
let corAtual = 1;

document.addEventListener('DOMContentLoaded', function () {

peaoPretas = document.querySelector('img[alt="peão pretas"]');
const torrePretas = document.querySelector('img[alt="torre pretas"]');
const cavaloPretas = document.querySelector('img[alt="cavalo pretas"]');
const bispoPretas = document.querySelector('img[alt="bispo pretas"]');
const rainhaPretas = document.querySelector('img[alt="rainha pretas"]');
const reiPretas = document.querySelector('img[alt="rei pretas"]');

realezaPretas = [torrePretas,cavaloPretas,bispoPretas,rainhaPretas,reiPretas,bispoPretas,cavaloPretas,torrePretas];

peaoBrancas = document.querySelector('img[alt="peão brancas"]');
const torreBrancas = document.querySelector('img[alt="torre brancas"]');
const cavaloBrancas = document.querySelector('img[alt="cavalo brancas"]');
const bispoBrancas = document.querySelector('img[alt="bispo brancas"]');
const rainhaBrancas = document.querySelector('img[alt="rainha brancas"]');
const reiBrancas = document.querySelector('img[alt="rei brancas"]');

realezaBrancas = [torreBrancas,cavaloBrancas,bispoBrancas,rainhaBrancas,reiBrancas,bispoBrancas,cavaloBrancas,torreBrancas]

atualizarInformacoesJogo();

});

function novoJogo() {
 pontuacaoBrancas =0;
 pontuacaoPretas =0;
 pontuacao=0;
 turno = 0;

    const casas = document.querySelectorAll(".tabuleiro > .linha > div");

    casas.forEach(function (casa) {
        while (casa.firstChild) {
            casa.removeChild(casa.firstChild);
        }
    });

    const linha7casas = document.querySelectorAll('[class="linha 7"] div');
    const linha2casas = document.querySelectorAll('[class="linha 2"] div');


    linha2casas.forEach(function (casa) {
  
        casa.appendChild(peaoBrancas.cloneNode(true));
    });
   

    linha7casas.forEach(function (casa) {
        
        casa.appendChild(peaoPretas.cloneNode(true));
    });

    const linha8casas = document.querySelectorAll('[class="linha 8"] div');

    for (let i = 0; i < realezaPretas.length; i++) {

    linha8casas[i].appendChild(realezaPretas[i].cloneNode(true));

    }

    const linha1casas = document.querySelectorAll('[class="linha 1"] div');

    for (let i = 0; i < realezaPretas.length; i++) {

    linha1casas[i].appendChild(realezaBrancas[i].cloneNode(true));

    }

    atualizarInformacoesJogo();
}


function trocarCor() {
    
    const cor = document.getElementsByClassName("preta");

    if (corAtual === 1) {
        for (let i = 0; i < cor.length; i++) {
            cor[i].style.backgroundColor = "green";
        }
        corAtual = 2;
    } else {
        for (let i = 0; i <cor.length; i++) {
            cor[i].style.backgroundColor = "#534b4b";
        }
        corAtual = 1;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const menuSandwich = document.getElementById('menuSandwich');
    const menuLateral = document.getElementById('menuLateral');


    menuSandwich.addEventListener('click', function () {
        if (menuLateral.style.display === 'none') {

       
            menuLateral.style.display = 'flex';
         
 
           
        } else {
            menuLateral.style.display = 'none';
    
   
           
        }
    });

    fecharMenu.addEventListener('click', function () {
        
        menuSandwich.style.display = 'block';
        menuLateral.style.display = 'none';
   
      
    });
});

function verificarLarguraTela() {
    const larguraTela = window.innerWidth;
    const menuLateral = document.getElementById('menuLateral');
    const menuSandwich = document.getElementById('menuSandwich');

    if (larguraTela < 818) {
      
        menuLateral.style.display = 'none';
        menuSandwich.style.display = 'block';
    } else {
    
        menuLateral.style.display = 'flex';
        menuSandwich.style.display = 'none';
    }
}


window.addEventListener('load', verificarLarguraTela);
window.addEventListener('resize', verificarLarguraTela);