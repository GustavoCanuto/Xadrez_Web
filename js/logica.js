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
            cor[i].style.backgroundColor = "#534b4b";
        }
        corAtual = 1;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const menuSandwich = document.getElementById('menuSandwich');
    const menuLateral = document.getElementById('menuLateral');
    const fecharMenu = document.getElementById('fecharMenu');

    menuSandwich.addEventListener('click', function () {
        if (menuLateral.style.display === 'none') {
            menuLateral.style.display = 'block';
            fecharMenu.style.display = 'block';
        } else {
            menuLateral.style.display = 'none';
            fecharMenu.style.display = 'none';
        }
    });

    fecharMenu.addEventListener('click', function () {
        menuLateral.style.display = 'none';
        fecharMenu.style.display = 'none';
        menuSandwich.style.display = 'block';
    });
});
