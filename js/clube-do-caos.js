/* =====================================================
   CLUB DO CAOS — QUIZ 2.0
   OG CRIATIVO
===================================================== */


/* =====================================================
   CADASTRO DAS 30 CANECAS
===================================================== */

const canecas = [

    // =================================================
    // CLUB DO CAOS — 18 CANECAS
    // =================================================

    {
        id: 1,
        nome: "Caps & Serasa",
        frase: "Um pé no Caps e outro no Serasa.",
        imagem: "/assets/img-produtos/club-do-caos/caps-serasa.png",
        principal: "financeiro",
        secundario: "absoluto",
        nivel: "critico"
    },

    {
        id: 2,
        nome: "90% Ironia",
        frase: "Minha personalidade é: 90% ironia!",
        imagem: "/assets/img-produtos/club-do-caos/90-porcento-ironia.png",
        principal: "ironico",
        secundario: "absoluto",
        nivel: "alto"
    },

    {
        id: 3,
        nome: "Brainstorm",
        frase: "Uma ideia pior que a outra.",
        imagem: "/assets/img-produtos/club-do-caos/uma-ideia-pior.png",
        principal: "profissional",
        secundario: "ironico",
        nivel: "alto"
    },

    {
        id: 4,
        nome: "Organização Perigosa",
        frase: "Se organizar direitinho todo mundo se irrita.",
        imagem: "/assets/img-produtos/club-do-caos/se-organizar.png",
        principal: "profissional",
        secundario: "ironico",
        nivel: "alto"
    },

    {
        id: 5,
        nome: "Mamãe no Limite",
        frase: "Silêncio: Mamãe tá no limite!",
        imagem: "/assets/img-produtos/club-do-caos/mae-no-limite.png",
        principal: "familiar",
        secundario: "sobrevivencia",
        nivel: "critico",
        alternativas: [6]
    },

    {
        id: 6,
        nome: "Papai no Limite",
        frase: "Silêncio: Pai tá no limite!",
        imagem: "/assets/img-produtos/club-do-caos/pai-no-limite.png",
        principal: "familiar",
        secundario: "sobrevivencia",
        nivel: "critico",
        alternativas: [5]
    },

    {
        id: 7,
        nome: "Modo Quieta",
        frase: "O clima tá ótimo pra ficar quieta.",
        imagem: "/assets/img-produtos/club-do-caos/clima-quieta.png",
        principal: "profissional",
        secundario: "ironico",
        nivel: "alto",
        par: 8
    },

    {
        id: 8,
        nome: "Modo Quieto",
        frase: "O clima tá ótimo pra ficar quieto.",
        imagem: "/assets/img-produtos/club-do-caos/clima-quieto.png",
        principal: "profissional",
        secundario: "ironico",
        nivel: "alto",
        par: 7
    },

    {
        id: 9,
        nome: "Especialista",
        frase: "Você fala muito para alguém que não sabe nada!",
        imagem: "/assets/img-produtos/club-do-caos/fala-muito.png",
        principal: "profissional",
        secundario: "ironico",
        nivel: "critico"
    },

    {
        id: 10,
        nome: "Tempo para Mim",
        frase: "Mãe também quer ficar sozinha.",
        imagem: "/assets/img-produtos/club-do-caos/mae-sozinha.png",
        principal: "familiar",
        secundario: "sobrevivencia",
        nivel: "moderado",
        alternativas: [6]
    },

    {
        id: 11,
        nome: "Paz Interior",
        frase: "Paz interior? Em manutenção.",
        imagem: "/assets/img-produtos/club-do-caos/em-manutencao.png",
        principal: "sobrevivencia",
        secundario: "profissional",
        nivel: "moderado"
    },

    {
        id: 12,
        nome: "Tenho Opiniões",
        frase: "Não julgo... Mas tenho opiniões!",
        imagem: "/assets/img-produtos/club-do-caos/nao-julgo.png",
        principal: "ironico",
        secundario: "absoluto",
        nivel: "alto"
    },

    {
        id: 13,
        nome: "Sensível Demais",
        frase: "Não sou grossa, você que é sensível.",
        imagem: "/assets/img-produtos/club-do-caos/nao-grossa.png",
        principal: "ironico",
        secundario: "absoluto",
        nivel: "critico",
        par: 14
    },

    {
        id: 14,
        nome: "Sensível Demais",
        frase: "Não sou grosso, você que é sensível.",
        imagem: "/assets/img-produtos/club-do-caos/nao-grosso.png",
        principal: "ironico",
        secundario: "absoluto",
        nivel: "critico",
        par: 13
    },

    {
        id: 15,
        nome: "Caos Premium",
        frase: "Gosto de ver o Caos!",
        imagem: "/assets/img-produtos/club-do-caos/gosto-caos.png",
        principal: "absoluto",
        secundario: "ironico",
        nivel: "critico"
    },

    {
        id: 16,
        nome: "Produtividade",
        frase: "Fingindo produtividade desde...",
        imagem: "/assets/img-produtos/club-do-caos/produtividade.png",
        principal: "profissional",
        secundario: "ironico",
        nivel: "moderado"
    },

    {
        id: 17,
        nome: "Realidade",
        frase: "Não é mau humor. É excesso de realidade.",
        imagem: "/assets/img-produtos/club-do-caos/realidade.png",
        principal: "sobrevivencia",
        secundario: "ironico",
        nivel: "alto"
    },

    {
        id: 18,
        nome: "Ameaça de Boleto",
        frase: "Produzo melhor sob ameaça de boleto!",
        imagem: "/assets/img-produtos/club-do-caos/boleto.png",
        principal: "financeiro",
        secundario: "profissional",
        nivel: "alto"
    },


    // =================================================
    // CLUB DO CAOS 2.0 — 12 CANECAS
    // =================================================

    {
        id: 19,
        nome: "Club do Caos",
        frase: "Club do Caos",
        imagem: "/assets/img-produtos/club-do-caos/club-do-caos-2.png",
        principal: "absoluto",
        secundario: "ironico",
        nivel: "critico"
    },

    {
        id: 20,
        nome: "Café para não surtar",
        frase: "Café para não surtar",
        imagem: "/assets/img-produtos/club-do-caos/cafe-para-nao-surtar.png",
        principal: "sobrevivencia",
        secundario: "profissional",
        nivel: "alto"
    },

    {
        id: 21,
        nome: "Criativa e um pouco caótica",
        frase: "Criativa e um pouco caótica",
        imagem: "/assets/img-produtos/club-do-caos/criativa-caotica.png",
        principal: "absoluto",
        secundario: "ironico",
        nivel: "alto"
    },

    {
        id: 22,
        nome: "Do meu jeito",
        frase: "Fazendo acontecer do meu jeito",
        imagem: "/assets/img-produtos/club-do-caos/fazendo-acontecer.png",
        principal: "profissional",
        secundario: "absoluto",
        nivel: "alto"
    },

    {
        id: 23,
        nome: "Fora do planejado",
        frase: "Tudo fora do planejado",
        imagem: "/assets/img-produtos/club-do-caos/fora-do-planejado.png",
        principal: "sobrevivencia",
        secundario: "profissional",
        nivel: "alto"
    },

    {
        id: 24,
        nome: "Em surto, mas funcionando",
        frase: "Em surto, mas funcionando",
        imagem: "/assets/img-produtos/club-do-caos/in-surto.png",
        principal: "sobrevivencia",
        secundario: "profissional",
        nivel: "critico"
    },

    {
        id: 25,
        nome: "Misericórdia",
        frase: "Misericórdia",
        imagem: "/assets/img-produtos/club-do-caos/misericordia.png",
        principal: "absoluto",
        secundario: "ironico",
        nivel: "alto"
    },

    {
        id: 26,
        nome: "Hoje não surtar",
        frase: "Hoje o plano é: Não surtar",
        imagem: "/assets/img-produtos/club-do-caos/nao-surtar.png",
        principal: "sobrevivencia",
        secundario: "profissional",
        nivel: "critico"
    },

    {
        id: 27,
        nome: "Organizada na teoria",
        frase: "Na teoria sou uma pessoa organizada",
        imagem: "/assets/img-produtos/club-do-caos/na-teoria.png",
        principal: "profissional",
        secundario: "absoluto",
        nivel: "alto"
    },

    {
        id: 28,
        nome: "A vida disse: kkkkkkkk",
        frase: "Planejei dormir, a vida disse: kkkkkkkk",
        imagem: "/assets/img-produtos/club-do-caos/planejei-dormir.png",
        principal: "sobrevivencia",
        secundario: "ironico",
        nivel: "alto"
    },

    {
        id: 29,
        nome: "Persistindo",
        frase: "Quase desistindo, mas persistindo",
        imagem: "/assets/img-produtos/club-do-caos/quase-desistindo.png",
        principal: "sobrevivencia",
        secundario: "profissional",
        nivel: "critico"
    },

    {
        id: 30,
        nome: "Tudo sob controle",
        frase: "Tudo sob controle",
        imagem: "/assets/img-produtos/club-do-caos/sob-controle.png",
        principal: "ironico",
        secundario: "absoluto",
        nivel: "alto"
    }

];


/* =====================================================
   TABELA OFICIAL DE PONTUAÇÃO
===================================================== */

const pontuacao = {

    q1: {
        A: {
            sobrevivencia: 1,
            profissional: 1
        },

        B: {
            sobrevivencia: 1,
            profissional: 2,
            absoluto: 1,
            financeiro: 3
        },

        C: {
            sobrevivencia: 2,
            profissional: 1,
            ironico: 1,
            absoluto: 2
        }
    },

    q2: {
        A: {
            profissional: 1
        },

        B: {
            sobrevivencia: 1,
            ironico: 1,
            absoluto: 1,
            financeiro: 2,
            familiar: 1
        },

        C: {
            sobrevivencia: 1,
            profissional: 1,
            ironico: 1,
            absoluto: 2,
            financeiro: 4
        }
    },

    q3: {
        A: {
            sobrevivencia: 1,
            profissional: 1,
            familiar: 2
        },

        B: {
            sobrevivencia: 1,
            profissional: 1,
            ironico: 2,
            absoluto: 1,
            familiar: 1
        },

        C: {
            sobrevivencia: 1,
            profissional: 1,
            ironico: 2,
            absoluto: 3
        }
    },

    q4: {
        A: {
            profissional: 1,
            familiar: 2
        },

        B: {
            sobrevivencia: 1,
            profissional: 1,
            ironico: 1,
            absoluto: 1,
            familiar: 1
        },

        C: {
            sobrevivencia: 2,
            profissional: 1,
            ironico: 2,
            absoluto: 3
        }
    },

    q5: {
        A: {
            sobrevivencia: 1,
            profissional: 1,
            familiar: 2
        },

        B: {
            sobrevivencia: 1,
            profissional: 1,
            ironico: 3,
            absoluto: 1
        },

        C: {
            sobrevivencia: 2,
            profissional: 1,
            ironico: 1,
            absoluto: 3
        }
    }

};


/* =====================================================
   INICIALIZAÇÃO DO QUIZ
===================================================== */

function iniciarQuiz() {

    const btnResultado =
        document.getElementById("btnResultado");

    if (!btnResultado) {

        console.warn(
            'Club do Caos: botão "btnResultado" não encontrado.'
        );

        return;
    }


    btnResultado.addEventListener("click", calcularResultado);

}


/* =====================================================
   CALCULAR RESULTADO
===================================================== */

function calcularResultado() {

    /* =============================================
       BUSCAR ELEMENTO DO RESULTADO
    ============================================= */

    const resultado =
        document.getElementById("resultadoCaos");


    if (!resultado) {

        console.error(
            'Club do Caos: elemento "resultadoCaos" não foi encontrado.'
        );

        return;
    }


    /* =============================================
       VERIFICAR RESPOSTAS
    ============================================= */

    const respostas = [];


    for (let i = 1; i <= 5; i++) {

        const resposta =
            document.querySelector(
                `input[name="q${i}"]:checked`
            );


        if (!resposta) {

            alert(
                "Responda todas as perguntas antes de descobrir seu nível de Caos."
            );

            return;
        }


        const valor =
            String(resposta.value)
                .trim()
                .toUpperCase();


        if (
            !pontuacao[`q${i}`] ||
            !pontuacao[`q${i}`][valor]
        ) {

            console.error(
                `Club do Caos: resposta inválida na pergunta q${i}:`,
                valor
            );

            alert(
                "Ocorreu um problema com uma das respostas. Atualize a página e tente novamente."
            );

            return;
        }


        respostas.push(valor);

    }


    /* =============================================
       CRIAR PERFIS
    ============================================= */

    const perfis = {

        sobrevivencia: {
            nome: "Caos de Sobrevivência",
            emoji: "☕",
            pontos: 0,
            contribuicoes: 0,
            maiorContribuicao: 0,
            ultimaContribuicao: 0
        },

        profissional: {
            nome: "Caos Profissional",
            emoji: "💼",
            pontos: 0,
            contribuicoes: 0,
            maiorContribuicao: 0,
            ultimaContribuicao: 0
        },

        ironico: {
            nome: "Caos Irônico",
            emoji: "😏",
            pontos: 0,
            contribuicoes: 0,
            maiorContribuicao: 0,
            ultimaContribuicao: 0
        },

        absoluto: {
            nome: "Caos Absoluto",
            emoji: "🤯",
            pontos: 0,
            contribuicoes: 0,
            maiorContribuicao: 0,
            ultimaContribuicao: 0
        },

        financeiro: {
            nome: "Caos Financeiro",
            emoji: "💸",
            pontos: 0,
            contribuicoes: 0,
            maiorContribuicao: 0,
            ultimaContribuicao: 0
        },

        familiar: {
            nome: "Caos Familiar",
            emoji: "❤️",
            pontos: 0,
            contribuicoes: 0,
            maiorContribuicao: 0,
            ultimaContribuicao: 0
        }

    };


    /* =============================================
       CALCULAR PONTUAÇÃO
    ============================================= */

    let totalCaos = 0;


    respostas.forEach((resposta, index) => {

        const pergunta =
            `q${index + 1}`;


        const pontosResposta =
            pontuacao[pergunta][resposta];


        if (!pontosResposta) {
            return;
        }


        Object.keys(pontosResposta).forEach(perfil => {

            const valor =
                pontosResposta[perfil];


            if (!perfis[perfil]) {

                console.warn(
                    `Perfil "${perfil}" não está cadastrado.`
                );

                return;
            }


            perfis[perfil].pontos += valor;

            perfis[perfil].contribuicoes++;

            perfis[perfil].ultimaContribuicao =
                index + 1;


            if (
                valor >
                perfis[perfil].maiorContribuicao
            ) {

                perfis[perfil].maiorContribuicao =
                    valor;

            }


            totalCaos += valor;

        });

    });


    /* =============================================
       ORDEM DE DESEMPATE
    ============================================= */

    const ordemDesempate = [

        "sobrevivencia",
        "profissional",
        "ironico",
        "absoluto",
        "financeiro",
        "familiar"

    ];


    /* =============================================
       RANKING DOS PERFIS
    ============================================= */

    function compararPerfis(a, b) {

        if (a.pontos !== b.pontos) {

            return b.pontos - a.pontos;

        }


        if (
            a.maiorContribuicao !==
            b.maiorContribuicao
        ) {

            return (
                b.maiorContribuicao -
                a.maiorContribuicao
            );

        }


        if (
            a.contribuicoes !==
            b.contribuicoes
        ) {

            return (
                b.contribuicoes -
                a.contribuicoes
            );

        }


        if (
            a.ultimaContribuicao !==
            b.ultimaContribuicao
        ) {

            return (
                b.ultimaContribuicao -
                a.ultimaContribuicao
            );

        }


        return (
            ordemDesempate.indexOf(a.chave) -
            ordemDesempate.indexOf(b.chave)
        );

    }


    const ranking =
        Object.keys(perfis)
            .map(chave => {

                perfis[chave].chave =
                    chave;

                return perfis[chave];

            })
            .sort(compararPerfis);


    const principal =
        ranking[0];


    const secundario =
        ranking[1];


    /* =============================================
       NÍVEL DE CAOS
    ============================================= */

    let nivel;


    if (totalCaos <= 20) {

        nivel = "moderado";

    } else if (totalCaos <= 28) {

        nivel = "alto";

    } else {

        nivel = "critico";

    }


    /* =============================================
       BUSCAR CANECAS DO PERFIL PRINCIPAL
    ============================================= */

    let candidatas =
        canecas.filter(caneca => {

            return (
                caneca.principal ===
                principal.chave
            );

        });


    /* =============================================
       SEGURANÇA
       CASO NÃO EXISTAM CANECAS PARA O PERFIL
    ============================================= */

    if (candidatas.length === 0) {

        candidatas =
            [...canecas];

    }


    /* =============================================
       PONTUAR COMPATIBILIDADE DAS CANECAS
    ============================================= */

    candidatas =
        candidatas.map(caneca => {

            let compatibilidade = 100;


            /* PERFIL SECUNDÁRIO */

            if (
                caneca.secundario ===
                secundario.chave
            ) {

                compatibilidade += 50;

            }


            /* NÍVEL DE CAOS */

            if (
                caneca.nivel ===
                nivel
            ) {

                compatibilidade += 30;

            }


            return {

                ...caneca,

                compatibilidade

            };

        });


    /* =============================================
       ORDENAR CANECAS
    ============================================= */

    candidatas.sort((a, b) => {

        if (
            b.compatibilidade !==
            a.compatibilidade
        ) {

            return (
                b.compatibilidade -
                a.compatibilidade
            );

        }


        return a.id - b.id;

    });


    /* =============================================
       CANECA PRINCIPAL
    ============================================= */

    const canecaEscolhida =
        candidatas[0];


    if (!canecaEscolhida) {

        console.error(
            "Club do Caos: nenhuma caneca foi selecionada."
        );

        alert(
            "Não foi possível identificar sua caneca. Tente novamente."
        );

        return;
    }


    /* =============================================
       BUSCAR CANECA ALTERNATIVA
    ============================================= */

    let canecaAlternativa =
        null;


    if (
        Array.isArray(
            canecaEscolhida.alternativas
        ) &&
        canecaEscolhida.alternativas.length > 0
    ) {

        canecaAlternativa =
            canecas.find(caneca => {

                return (
                    caneca.id ===
                    canecaEscolhida.alternativas[0]
                );

            });

    }


    /* =============================================
       BUSCAR CANECA PAR
    ============================================= */

    let canecaPar =
        null;


    if (
        canecaEscolhida.par
    ) {

        canecaPar =
            canecas.find(caneca => {

                return (
                    caneca.id ===
                    canecaEscolhida.par
                );

            });

    }


    /* =============================================
       MENSAGEM DO WHATSAPP
    ============================================= */

    const mensagemWhatsApp =
        `Oi! Respondi o quiz e minha caneca foi a "${canecaEscolhida.nome}". Quero saber mais sobre ela!`;


    const linkWhatsApp =
        `https://wa.me/5535992660184?text=${encodeURIComponent(
            mensagemWhatsApp
        )}`;


    /* =============================================
       HTML DA CANECA PAR
    ============================================= */

    let htmlPar =
        "";


    if (canecaPar) {

        htmlPar = `

            <div class="resultado-alternativa">

                <span>
                    🔄 TAMBÉM COMBINA COM VOCÊ
                </span>

                <img
                    src="${canecaPar.imagem}"
                    alt="${canecaPar.nome}"
                    class="imagem-caneca-alternativa"
                    loading="lazy"
                >

                <h3>
                    ${canecaPar.nome}
                </h3>

                <p>
                    ${canecaPar.frase}
                </p>

            </div>

        `;

    }


    /* =============================================
       HTML DA CANECA ALTERNATIVA
    ============================================= */

    let htmlAlternativa =
        "";


    if (canecaAlternativa) {

        htmlAlternativa = `

            <div class="resultado-alternativa">

                <span>
                    🔄 OUTRA OPÇÃO
                </span>

                <img
                    src="${canecaAlternativa.imagem}"
                    alt="${canecaAlternativa.nome}"
                    class="imagem-caneca-alternativa"
                    loading="lazy"
                >

                <h3>
                    ${canecaAlternativa.nome}
                </h3>

                <p>
                    ${canecaAlternativa.frase}
                </p>

            </div>

        `;

    }


    /* =============================================
       MOSTRAR RESULTADO
    ============================================= */

    resultado.innerHTML = `

        <div class="resultado-quiz">


            <!-- ===================================
                 NÍVEL DE CAOS
            ==================================== -->

            <div class="resultado-nivel">

                <span>
                    🔥 SEU NÍVEL DE CAOS
                </span>

                <strong>
                    ${nivel.toUpperCase()}
                </strong>

            </div>


            <!-- ===================================
                 PERFIL
            ==================================== -->

            <div class="resultado-perfil">

                <h3>
                    ${principal.emoji}
                    ${principal.nome}
                </h3>

                <p>
                    Seu perfil de caos combina
                    perfeitamente com você.
                </p>

            </div>


            <!-- ===================================
                 CANECA PRINCIPAL
            ==================================== -->

            <div class="resultado-caneca">

                <span>
                    ☕ SUA CANECA IDEAL
                </span>


                <img
                    src="${canecaEscolhida.imagem}"
                    alt="${canecaEscolhida.nome}"
                    class="imagem-caneca-resultado"
                >


                <h2>
                    ${canecaEscolhida.nome}
                </h2>


                <p>
                    ${canecaEscolhida.frase}
                </p>


                <!-- BOTÃO WHATSAPP -->

                <a
                    href="${linkWhatsApp}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-comprar-resultado"
                >
                    ☕ QUERO ESSA CANECA
                </a>

            </div>


            ${htmlPar}


            ${htmlAlternativa}


        </div>

    `;


    /* =============================================
       LEVAR O RESULTADO PARA A TELA
    ============================================= */

    resultado.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =====================================================
   INICIAR QUANDO O HTML ESTIVER PRONTO
===================================================== */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        iniciarQuiz
    );

} else {

    iniciarQuiz();

}