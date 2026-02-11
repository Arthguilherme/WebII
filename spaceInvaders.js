// Inicializar posição da nave
const nave = document.querySelector('#nave');
let posicao = window.innerWidth / 2 - 50; // Centro da tela
nave.style.left = posicao + 'px';

// Movimento da nave com onkeypress
document.onkeypress = function (e) {
    let img = document.querySelector('#nave');
    
    // Tecla 'A' ou 'a' - Move para esquerda
    if (e.key == 'a' || e.key == 'A') {
        posicao = Math.max(0, posicao - 20);
        img.style.left = posicao + 'px';
    }
    
    // Tecla 'D' ou 'd' - Move para direita
    if (e.key == 'd' || e.key == 'D') {
        posicao = Math.min(window.innerWidth - 100, posicao + 20);
        img.style.left = posicao + 'px';
    }
};