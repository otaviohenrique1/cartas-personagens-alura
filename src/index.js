import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js"

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

// const personagemPedrinho = new Personagem('Pedrinho', 7, 12, 5, 'Mago', "descricao");
// const personagemJose = new Personagem('Jose', 7, 6, 3, 'Arqueiro', "descricao");

// const personagens = [personagemPedrinho, personagemJose];
// new PersonagemView(personagens).render();

// console.log(new Mago('gelo', 7, 9));

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroJorge = new Guerreiro('Jorge', 8);

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroJorge];

new PersonagemView(personagens).render();

console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio))