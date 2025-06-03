const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const agora = new Date();

const tempoObjetivo1 = new Date(agora.getTime() + (300 * 24 * 60 * 60 * 1000) + (38 * 60 * 60 * 1000) + (25 * 60 * 1000) + (32 * 1000));
const tempoObjetivo2 = new Date(agora.getTime() + (228 * 24 * 60 * 60 * 1000) + (23 * 60 * 60 * 1000) + (2 * 60 * 1000) + (10 * 1000));
const tempoObjetivo3 = new Date(agora.getTime() + (32 * 24 * 60 * 60 * 1000) + (22 * 60 * 60 * 1000) + (54 * 60 * 1000) + (2 * 1000));

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
