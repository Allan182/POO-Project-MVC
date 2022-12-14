/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Criação da Classe Filho com os atributos Específicos para gerar o Preço do serviço de acordo com o tipo de veiculo. */ 


import { Veiculo } from './Veiculo.js';

export class Comercial extends Veiculo {

    #qtdAssentos;

    constructor(proprietario, placa, marca, qtdAssentos) {
        super(proprietario, placa, marca);
        this.qtdAssentos = qtdAssentos;
    }

    set qtdAssentos(qtdAssentos) {
        if (qtdAssentos != undefined && qtdAssentos > 0) {
            this.#qtdAssentos = qtdAssentos;
        }
        return this.#qtdAssentos;
    }

    get qtdAssentos() {
        return this.#qtdAssentos;
    }
    
    toString() {
        return "Veic.Comercial \n" + super.toString() + "\n Quant.de Assentos: " + this.#qtdAssentos;
    }

}

