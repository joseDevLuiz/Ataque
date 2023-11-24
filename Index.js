let ataque = ""

//Coletar as principais informações do herói
class infoHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    };

    //Função para descobrir o tipo do herói e o ataque
    descobreAtaque(){
      if(this.tipo === "Guerreiro"){
        ataque = "Espada";
      } else if(this.tipo === "Mago"){
        ataque = "Magia";
      } else if(this.tipo === "Monge"){
        ataque = "Artes Marciais";
      } else if(this.tipo === "Ninja"){
        ataque = "Shuriken"
      };
      return console.log(`O ${this.tipo} atacou usando ${ataque}`);
    };
};

let heroi = new infoHeroi("Henriquinho", 54, "Guerreiro");

heroi.descobreAtaque(this.tipo)