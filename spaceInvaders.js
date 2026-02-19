const nave = document.querySelector('#nave');
let posicao = window.innerWidth / 2 - 50; // centro
nave.style.left = posicao + 'px';
nave.style.bottom = '10px'

document.onkeydown = function(event) {
    if(event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        posicao = Math.max(0, posicao - 20); // limita esquerda
        nave.style.left = posicao + 'px';
    }

    if(event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        posicao = Math.min(window.innerWidth - 100, posicao + 20); // limita direita
        nave.style.left = posicao + 'px';
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

    
    