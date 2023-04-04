/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Criação da Classe Servico com os atributos necessarios para 
   se associar com a classe Veiculo. ; */  


import { Pessoal } from './VeiculoPessoal.js';
import { Comercial } from './VeiculoComercial.js';

export class Servico {
 
    #data;
    #descricao;
    #veiculo;
    #preco;
    #tipoServico;



    constructor(data, descricao, veiculo) {

        this.data = data;
        this.descricao = descricao;
        this.tipoServico;

        if (veiculo != undefined) {
            this.#veiculo = veiculo;
        }
        if (veiculo instanceof Comercial) {
            this.#preco = this.#tipoServico * veiculo.qtdAssentos;

        } else if (veiculo instanceof Pessoal) {
            this.#preco = this.#tipoServico * veiculo.qtdPortas;
        }
    }

    get tipoServico() {
        if (this.descricao != undefined) {
            if (this.descricao == "Lavagem Simples") {
                this.#tipoServico = 5;
            } else {
                this.#tipoServico = 7;
            }
        }
        return this.#tipoServico;
    }

    set data(data) {
        if (data != undefined) {
            this.#data = data;
        }
        return this.#data;
    }

    set descricao(descricao) {
        if (descricao != undefined) {
            this.#descricao = descricao;
        }
        return this.#descricao;
    }

    get veiculo() {
        return this.#veiculo;
    }

    get data() {
        return this.#data;
    }

    get descricao() {
        return this.#descricao;
    }

    get preco() {
        return this.#preco;
    }

    toString() {
        return " Data:" + this.#data +
            "\n Descrição: " + this.#descricao +
            "\n" + this.#veiculo.toString() +
            "\n Preço: " + this.#preco;
    }
}

