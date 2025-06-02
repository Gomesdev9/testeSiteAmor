// Corações na tela inteira
const canvas = document.getElementById('coraçoes');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const coracoes = [];
const numeroCoracoes = 50;

for (let i = 0; i < numeroCoracoes; i++) {
    coracoes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.5
    });
}

function desenharCoracao(x, y, tamanho) {
    ctx.beginPath();
    const topCurveHeight = tamanho * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    ctx.bezierCurveTo(
        x, y,
        x - tamanho / 2, y,
        x - tamanho / 2, y + topCurveHeight
    );
    ctx.bezierCurveTo(
        x - tamanho / 2, y + (tamanho + topCurveHeight) / 2,
        x, y + (tamanho + topCurveHeight) / 2,
        x, y + tamanho
    );
    ctx.bezierCurveTo(
        x, y + (tamanho + topCurveHeight) / 2,
        x + tamanho / 2, y + (tamanho + topCurveHeight) / 2,
        x + tamanho / 2, y + topCurveHeight
    );
    ctx.bezierCurveTo(
        x + tamanho / 2, y,
        x, y,
        x, y + topCurveHeight
    );
    ctx.closePath();
    ctx.fill();
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    coracoes.forEach(coracao => {
        ctx.fillStyle = `rgba(255, 77, 109, ${coracao.opacity})`;
        desenharCoracao(coracao.x, coracao.y, coracao.size);
        coracao.y += coracao.speed;

        if (coracao.y > canvas.height) {
            coracao.y = -20;
            coracao.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animar);
}

animar();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ============================
// Corações dentro do botão
// ============================
const canvasBotao = document.getElementById('coraçoesBotao');
const ctxBotao = canvasBotao.getContext('2d');

const botao = document.querySelector('.botao');
const botaoRect = botao.getBoundingClientRect();

canvasBotao.width = botao.offsetWidth;
canvasBotao.height = botao.offsetHeight;

const coracoesBotao = [];
const numeroCoracoesBotao = 15;

for (let i = 0; i < numeroCoracoesBotao; i++) {
    coracoesBotao.push({
        x: Math.random() * canvasBotao.width,
        y: Math.random() * canvasBotao.height,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.5
    });
}

function desenharCoracaoBotao(x, y, tamanho) {
    ctxBotao.beginPath();
    const topCurveHeight = tamanho * 0.3;
    ctxBotao.moveTo(x, y + topCurveHeight);
    ctxBotao.bezierCurveTo(
        x, y,
        x - tamanho / 2, y,
        x - tamanho / 2, y + topCurveHeight
    );
    ctxBotao.bezierCurveTo(
        x - tamanho / 2, y + (tamanho + topCurveHeight) / 2,
        x, y + (tamanho + topCurveHeight) / 2,
        x, y + tamanho
    );
    ctxBotao.bezierCurveTo(
        x, y + (tamanho + topCurveHeight) / 2,
        x + tamanho / 2, y + (tamanho + topCurveHeight) / 2,
        x + tamanho / 2, y + topCurveHeight
    );
    ctxBotao.bezierCurveTo(
        x + tamanho / 2, y,
        x, y,
        x, y + topCurveHeight
    );
    ctxBotao.closePath();
    ctxBotao.fill();
}

function animarBotao() {
    ctxBotao.clearRect(0, 0, canvasBotao.width, canvasBotao.height);

    coracoesBotao.forEach(coracao => {
        ctxBotao.fillStyle = `rgba(255, 77, 109, ${coracao.opacity})`;
        desenharCoracaoBotao(coracao.x, coracao.y, coracao.size);
        coracao.y += coracao.speed;

        if (coracao.y > canvasBotao.height) {
            coracao.y = -10;
            coracao.x = Math.random() * canvasBotao.width;
        }
    });

    requestAnimationFrame(animarBotao);
}

animarBotao();

window.addEventListener('resize', () => {
    canvasBotao.width = botao.offsetWidth;
    canvasBotao.height = botao.offsetHeight;
});
