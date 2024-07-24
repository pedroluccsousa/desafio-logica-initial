//Desafio de código n°1

//Variáveis
let  hero1Testosterona = 8005;
let heroLevels = [
    {level: 9000, message: "Seu herói é Mestre"},
    {level: 8000, message:"Seu herói é Diamante"},
    {level: 7000, message:"Seu herói é Platina"},
    {level: 6000, message:"Seu herói é Ouro"},
    {level: 5000, message: "Seu herói é Prata"}
];
let heroMessage = "Seu herói é grão-mestre"; //Padrão

//Condicionais
for (let i = 0; i < heroLevels.length; i++) {
    if (hero1Testosterona >= heroLevels[i].level){
        heroMessage= heroLevels[i].message;
        break;
    }
}

console.log (heroMessage);

//Poção de Testosterona - A cada de pocao o herói ganha 1200 Testosterona
let pocao = 1200
let TestosteronaElixir= hero1Testosterona + pocao

console.log ("Agora seu herói tem: " + TestosteronaElixir + " de Testosterona");

for (let i = 0; i < heroLevels.length; i++) {
    if (TestosteronaElixir >= heroLevels[i].level){
        heroMessage= heroLevels[i].message;
        break;
    }
}

console.log("Agora " + heroMessage)