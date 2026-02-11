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

// Timer - Variáveis
let tempoSegundos = 0;
let intervalo;

// Função para formatar tempo em HH:MM:SS
function formatarTempo(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segs = segundos % 60;
    
    return String(horas).padStart(2, '0') + ':' + 
           String(minutos).padStart(2, '0') + ':' + 
           String(segs).padStart(2, '0');
}

// Função para iniciar o timer
function startCounter() {
    intervalo = setInterval(function() {
        tempoSegundos++;
        document.getElementById('tempo').textContent = formatarTempo(tempoSegundos);
    }, 1000); // Atualiza a cada 1000ms (1 segundo)
}

    
    