const botaoTrocarCor = document.getElementById('botaoTrocarCor');
let corAtual = 
1;
function trocarCor() {
    const cor = document.getElementsByClassName("preta");

    if (corAtual === 1) {
        for (let i = 0; i < cor.length; i++) {
            cor[i].style.backgroundColor = "green";
        }
        corAtual = 2;
    } else {
        for (let i = 0; i <cor.length; i++) {
            cor[i].style.backgroundColor = "black";
        }
        corAtual = 1;
    }
}


