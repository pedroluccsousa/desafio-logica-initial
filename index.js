//Desafio de código n°1

//Variáveis
let  hero1 = 8005;
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
    if (hero1 >= heroLevels[i].level){
        heroMessage= heroLevels[i].message;
        break;
    }
}

console.log (heroMessage)
