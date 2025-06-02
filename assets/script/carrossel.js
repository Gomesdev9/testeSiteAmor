const carrossel = document.querySelector('.carrossel');
const imagens = document.querySelectorAll('.carrossel img');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let indiceAtual = 0;

function atualizarCarrossel() {
  const larguraImagem = imagens[0].clientWidth;
  carrossel.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
}

btnPrev.addEventListener('click', () => {
  indiceAtual = (indiceAtual === 0) ? imagens.length - 1 : indiceAtual - 1;
  atualizarCarrossel();
});

btnNext.addEventListener('click', () => {
  indiceAtual = (indiceAtual === imagens.length - 1) ? 0 : indiceAtual + 1;
  atualizarCarrossel();
});

// Atualiza o carrossel ao redimensionar janela
window.addEventListener('resize', atualizarCarrossel);
