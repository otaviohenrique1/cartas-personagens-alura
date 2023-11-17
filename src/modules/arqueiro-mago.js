import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = 'ArqueiroMago';
  static descricao ='Detentor de lancas e flechas mágicas!';

  constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome);
    // Composição
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} = ${this.ladoMago.obterInsignia()}`;
  }
}

/*
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = 'ArqueiroMago';
  static descricao ='Detentor de lancas e flechas mágicas!';

  constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome, level);
    // Composição
    this.ladoArqueiro = new Arqueiro(nome, level, destreza);
    this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia);
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} = ${this.ladoMago.obterInsignia()}`;
  }
}
*/