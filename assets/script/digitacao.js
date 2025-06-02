const texto = `Meu amor, desde o dia em que você entrou na minha vida, tudo ganhou um novo sentido. 
Você trouxe cor aos meus dias, luz aos meus pensamentos e paz ao meu coração. 
A cada amanhecer, acordo grato por ter ao meu lado a mulher mais incrível, forte, carinhosa e maravilhosa que eu já conheci.
Você é meu porto seguro, meu lar, minha inspiração e a razão dos meus melhores sorrisos. 

Ao seu lado, aprendi o verdadeiro significado do amor, aquele amor que é paciente, que acolhe, que fortalece, que cuida, que supera qualquer obstáculo.
Você me ensina, todos os dias, que amor é parceria, respeito, cumplicidade e escolha. 
E a cada dia, eu te escolho novamente, sem hesitar, sem dúvida, com toda a certeza que existe no meu coração. 

Meu amor por você cresce a cada olhar, a cada toque, a cada conversa, a cada abraço apertado. 
Você é dona do sorriso que eu mais amo no mundo e do abraço que acalma qualquer tempestade. 
Só Deus sabe o quanto sou grato por ter você na minha vida, por cada momento, cada lembrança, cada plano que construímos juntos.

Quero que saiba que prometo te amar, te cuidar, te proteger e te fazer feliz todos os dias da minha vida. 
Que possamos seguir lado a lado, construindo nossos sonhos, vivendo nossas aventuras e celebrando nosso amor, hoje e sempre. 
Te amo mais do que palavras podem expressar, minha princesa, minha vida, meu tudo. ❤️`;

let index = 0;
const velocidade = 40; // velocidade da digitação (menor = mais rápido)

function digitar() {
    const elemento = document.getElementById("mensagemDigitada");
    if (index < texto.length) {
        elemento.innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, velocidade);
    }
}

document.addEventListener("DOMContentLoaded", digitar);
