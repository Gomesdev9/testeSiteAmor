const tempoElemento = document.getElementById('tempo-juntos');

function calcularTempoJuntos() {
  const dataInicio = new Date(2022, 5, 9); // 09/06/2022 (mês começa em 0)
  const hoje = new Date();

  let anos = hoje.getFullYear() - dataInicio.getFullYear();
  let meses = hoje.getMonth() - dataInicio.getMonth();
  let dias = hoje.getDate() - dataInicio.getDate();

  if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  tempoElemento.innerText = `Estamos juntos há ${anos} anos, ${meses} meses e ${dias} dias 💖`;
}

calcularTempoJuntos();
setInterval(calcularTempoJuntos, 1000 * 60 * 60); // Atualiza a cada hora