/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Criação da Classe Pai com os atributos gerais para realizar 
   uma futura descendência ; */ 


import { Cliente } from './Cliente.js';

export class Veiculo {

    static #qtdVeiculos = 0;
    #proprietario;
    #placa;
    #marca;
 
    constructor(proprietario, placa, marca) {
        this.#placa = placa;
        this.marca = marca;

        if (proprietario instanceof Cliente) {
            this.#proprietario = proprietario.nome;
        }
        Veiculo.#qtdVeiculos++;
    }

    set proprietario(proprietario) {
        if (proprietario != undefined && proprietario instanceof Cliente) {
            this.#proprietario = proprietario;
        }
        return this.#proprietario;
    }

    get proprietario() {
        return this.#proprietario;
    }

    set marca(marca) {
        if (marca != undefined) {
            this.#marca = marca;
        }
        return this.#marca;
    }

    get marca() {
        return this.#marca;
    }

    get placa() {
        return this.#placa;
    }

    static get qtdVeiculos() {
        return Veiculo.#qtdVeiculos;
    }


    toString() {
        return " Proprietário " + this.#proprietario.toString() +
            "\n Placa : " + this.#placa +
            "\n Marca : " + this.#marca;

    }

}