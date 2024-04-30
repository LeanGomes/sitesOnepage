// Definindo um objeto JSON com informações dos heróis da Marvel
const heroisMarvel = [
    {
        nome: "Mancha Solar",
        realName: "Roberto da Costa",
        habilidades: ["Absorção e manipulação de energia solar", "Força sobre-humana", "Vôo"],
        equipe: ["Novos Mutantes", "X-Men"],
        informacao: ['Roberto da Costa nasceu no Brasil em uma família rica. Sua mutação se manifestou durante sua adolescência, dando a ele a capacidade de absorver e metabolizar energia solar para aumentar sua força, velocidade e habilidades de vôo. Ele também pode projetar explosões de energia solar. Mancha Solar é conhecido por sua personalidade confiante e por vezes arrogante, mas também demonstra um forte senso de liderança quando necessário. Ele tem sido uma figura central em várias equipes de super-heróis ao longo dos anos, incluindo os Novos Mutantes e os X-Men.Além de seus poderes solares, Mancha Solar também é habilidoso em artes marciais, tornando-o um combatente formidável em combate corpo a corpo.A riqueza de sua herança brasileira e suas aventuras ao redor do mundo adicionam camadas interessantes à sua história, tornando-o um personagem diversificado e complexo no universo Marvel.']
    },
    {
        nome: "Coisa",
        realName: "Ben Grimm",
        habilidades: ["Força sobre-humana", "Durabilidade", "Resistência"],
        equipe: ["Quarteto Fantástico"]
    },
    {
        nome: "Gavião Arqueiro",
        realName: "Clint Barton",
        habilidades: ["Exímio arqueiro", "Habilidades de combate corpo a corpo", "Estrategista"],
        equipe: ["Vingadores"]
    },
    {
        nome: "Ms. Marvel",
        realName: "Kamala Khan",
        habilidades: ["Elasticidade", "Polimorfismo", "Regeneração celular"],
        equipe: ["Campeões", "Vingadores"]
    }
];

// Exibindo informações dos heróis no console para verificação
console.log(heroisMarvel[0].informacao);

// Obter o objeto do primeiro herói
const heroi1 = heroisMarvel[0];

// Construir uma string com as informações do herói
const infoHeroi1 = `Nome: ${heroi1.nome}, Nome Real: ${heroi1.realName}, Habilidades: ${heroi1.habilidades.join(", ")}, Equipe: ${heroi1.equipe.join(", ")}`;

// Atualizar o conteúdo da tag <p> com as informações do herói
const pHeroi1 = document.getElementById("heroi1");
pHeroi1.textContent = infoHeroi1;
