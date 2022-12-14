/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Criação da Classe Filho com os atributos Específicos para gerar o Preço do serviço de acordo com o tipo de veiculo. */ 


import { Veiculo } from './Veiculo.js';


export class Pessoal extends Veiculo {

   #qtdPortas;

   constructor(proprietario, placa, marca, qtdPortas) {
       super(proprietario, placa, marca);
       this.qtdPortas = qtdPortas;
   }

   get qtdPortas() {
       return this.#qtdPortas;
   }

   set qtdPortas(qtdPortas) {
       if (qtdPortas != undefined && qtdPortas > 0) {
           this.#qtdPortas = qtdPortas;
       }
       return this.#qtdPortas;
   }

   toString() {
       return "Veiculo: Pessoal \n" + super.toString() + "\n Quantidade de Portas: " + this.#qtdPortas;
   }

}


