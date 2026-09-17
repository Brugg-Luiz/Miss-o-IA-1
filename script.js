const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "O cyberbullying nas redes sociais e em grupos de mensagens machuca muita gente, muitas vezes por pura exclusão ou preconceito. Qual é a melhor forma de a gente combater isso no dia a dia da escola?",
        alternativas: [
            {
                texto: "Criar rodas de conversa e campanhas lideradas pelos próprios alunos para conscientizar a galera.",
                afirmacao: [
                    "Você é uma pessoa que age com empatia e acredita no diálogo para resolver os problemas e melhorar a convivência.",
                "Sua atitude acolhedora e foco em ajudar o próximo fazem de você uma liderança positiva entre os seus amigos."
            ]
            },
            {
                texto: "Ficar atento às mudanças de comportamento dos colegas e denunciar perfis fakes ou ataques aos professores.",
                afirmacao: [
                    "Você é uma pessoa observadora e protetora, que se importa de verdade com o bem-estar de quem está ao seu redor.",
                "Sua capacidade de perceber quando alguém precisa de ajuda mostra que você é um amigo leal e um apoio fundamental na escola."
                ]
            }    
        ]
    },
    {
        enunciado: "A energia geotérmica usa o calor de dentro da Terra para gerar eletricidade. Ela não depende do clima (como o sol ou o vento) e quase não polui, mas a instalação das usinas é bem cara. O que você acha desse modelo?",
        alternativas: [
            {
                texto: "Vale super a pena investir e pesquisar mais, porque é uma fonte limpa, inesgotável e que garante o futuro do planeta.",
                afirmacao: [
                    "Você tem a mente aberta para o futuro e se interessa por tecnologia, inovação e sustentabilidade.",
                "Seu interesse por soluções inovadoras mostra que você se preocupa com o meio ambiente e com o impacto das nossas escolhas no planeta."
                ]
            },
            {
                texto: "Melhor focar primeiro em opções mais baratas e conhecidas (como solar e eólica) antes de gastar muito com a geotérmica.",
                afirmacao: [
                    "Você é uma pessoa realista e prática, que prefere dar passos seguros avaliando os custos e os riscos envolvidos.",
                "Sua visão focada em resultados e pé no chão ajuda a tomar decisões equilibradas entre a economia e o cuidado com a natureza."
                ]
            }    
        ]
    },
    {
        enunciado: "Cuidar da saúde mental, entender o que a gente sente e lidar com as pressões dos estudos e do futuro é um grande desafio. Você acha que a sua autoestima muda o seu rendimento e a sua rotina?",
        alternativas: [
            {
                texto: "Sim, com certeza. Quando estou bem comigo mesmo, fico mais confiante para estudar, fazer amigos e encarar os desafios.",
                afirmacao: [
                    "Você busca se conhecer bem e entende que estar de bem consigo mesmo é o primeiro passo para o sucesso.",
                "Sua busca por autoconhecimento ajuda você a manter o foco e a encarar a rotina de estudos com mais energia e otimismo."
                ]
            },
            {
                texto: "Só às vezes. Tem dias que minha autoestima cai um pouco e isso acaba atrapalhando minha energia e minha concentração.",
                afirmacao: [
                    "Você é uma pessoa sincera com seus sentimentos e reconhece que todo mundo tem dias bons e dias ruins.",
                "Sua honestidade mostra que você está aprendendo a acolher suas emoções, o que é um passo gigante para o seu amadurecimento."
                ]
            }    
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + “ “;
atual++;
mostraPergunta();
}
function aleatorio(lista) {
   const posicao = Math.floor(Math.random()* lista.length);
   return lista[posicao];
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}