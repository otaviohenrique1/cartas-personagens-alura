import { Personagem } from "./modules/personagem.js";

// const personagemPedrinho = {
//   nome: 'Pedrinho',
//   vida: 7,
//   mana: 12,
//   level: 5,
//   tipo: 'Mago',
// }

// const personagemJose = {
//   nome: 'Jose',
//   vida: 7,
//   mana: 6,
//   level: 3,
//   tipo: 'Arqueiro',
// }

// const personagemAna = {
//   nome: 'Ana',
//   vida: 8,
//   mana: 10,
//   level: 3,
//   tipo: 'Arqueiro'
// }

// const personagemPedrinho = new Personagem();
// personagemPedrinho.nome = 'Pedrinho';
// personagemPedrinho.vida = 7;
// personagemPedrinho.mana = 12;
// personagemPedrinho.level = 5;
// personagemPedrinho.tipo = 'Mago';
// personagemPedrinho.descricao = "descricao";
// console.log(personagemPedrinho);
// // console.log(personagemPedrinho instanceof Personagem);

// const personagemJose = new Personagem();
// personagemJose.nome = 'Jose';
// personagemJose.vida = 7;
// personagemJose.mana = 6;
// personagemJose.level = 3;
// personagemJose.tipo = 'Arqueiro';
// personagemJose.descricao = "descricao";
// console.log(personagemJose);

// console.log('Insígnia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia());
// console.log('Insígnia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia());

const personagemPedrinho = new Personagem('Pedrinho', 7, 12, 5, 'Mago', "descricao");
const personagemJose = new Personagem('Jose', 7, 6, 3, 'Arqueiro', "descricao");
console.log(personagemPedrinho);
console.log(personagemJose);
