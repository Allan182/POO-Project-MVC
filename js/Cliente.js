/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Criação de Classe Cliente para associação com objeto Veiculo; */   

export class Cliente {

    #nome;
    #cpf;
    #telefone;

    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.#cpf = cpf;
        this.telefone = telefone;
    }

    set nome(nome) {
        if (nome != "") {
            this.#nome = nome;
        } else {
            return null;
        }
    }

    set telefone(telefone) {
        if (telefone != undefined) {
            this.#telefone = telefone;
        }
        return this.#telefone;
    }

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get telefone() {
        return this.#telefone;
    }

    toString() {
        return "Nome:" + this.#nome +
            "\n CPF: " + this.#cpf +
            "\nTelefone: " + this.#telefone;
    }


}


