const nave = document.querySelector('#nave');
let posicao = window.innerWidth / 2 - 50;
nave.style.left = posicao + 'px';
nave.style.bottom = '10px'

document.onkeydown = function (event) {
    if (isPaused) return;

    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        posicao = Math.max(0, posicao - 20);
        nave.style.left = posicao + 'px';
    }

    if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        posicao = Math.min(window.innerWidth - 100, posicao + 20);
        nave.style.left = posicao + 'px';
    }

    if (event.key === 'm' || event.key === 'M') {
        dispararMissil();
    }
};

let tempoSegundos = 0;
let intervalo;
let isPaused = false;
const fundo = document.querySelector('.fundo');

function formatarTempo(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segs = segundos % 60;

    return String(horas).padStart(2, '0') + ':' +
        String(minutos).padStart(2, '0') + ':' +
        String(segs).padStart(2, '0');
}

function startCounter() {
    intervalo = setInterval(function () {
        tempoSegundos++;
        document.getElementById('tempo').textContent = formatarTempo(tempoSegundos);
    }, 1000);
}

function togglePause() {
    isPaused = !isPaused;

    if (isPaused) {
        clearInterval(intervalo);
        fundo.classList.add('paused');
    } else {
        startCounter();
        fundo.classList.remove('paused');
    }
}

function stopcounter() {
    clearInterval(intervalo);
}

function dispararMissil() {
    const missil = document.createElement('img');
    missil.src = 'images/missil.png';
    missil.classList.add('missil');
    fundo.appendChild(missil);

    const naveRect = nave.getBoundingClientRect();
    missil.style.left = (naveRect.left + naveRect.width / 2 - 5) + 'px';
    missil.style.top = (naveRect.top - 20) + 'px';


    let intervaloMissil = setInterval(() => {
        if (isPaused) return;
        let topAtual = parseInt(missil.style.top);
        if (topAtual <= -20) {

            clearInterval(intervaloMissil);
            missil.remove();
        } else {
            missil.style.top = (topAtual - 10) + 'px';
        }
    }, 30);
}
