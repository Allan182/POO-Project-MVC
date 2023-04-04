/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Criação de Functions para criação de tabelas e filtros utilizando vetores de objetos. ; */   


import { vetServicos } from './vetorObjetos.js';

import { Pessoal } from "./VeiculoPessoal.js";
import { Comercial } from "./VeiculoComercial.js";


var vetorTitulos = [
    "Proprietário", "Marca", "Placa", "Tipo de Lavagem", "Preço", "Data", "Geral" 
    // "Geral" referencia o método ToString da classe para utilizar o principio de Polimorfismo;
]

export function criarTableFornecedoresHtml(vetorObjetos) {

    document.getElementById("resultado").textContent = ""; // Limpeza da Tabela na Interface Gráfica do Usuario;

    if (vetorObjetos.length > 0) {

        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");
        var aux;


        thead.classList.add('thead');
        tbody.classList.add('corpo');

        // criando as colunas para cada atributo indicado em vetNomesAtributos

        var tr = document.createElement("tr");
        for (let lin = 0; lin < vetorTitulos.length; lin++) {
            let td = document.createElement("td");
            td.textContent = vetorTitulos[lin];
            td.classList.add('cabecalho')

            tr.appendChild(td)
 
        }
        thead.appendChild(tr);
        table.appendChild(thead);

        for (let lin = 0; lin < vetorObjetos.length; lin++) {
            var tr = document.createElement("tr");

            let nome = document.createElement("td");
            nome.classList.add("corAzul");
            nome.textContent = vetorObjetos[lin].veiculo.proprietario;

            let marca = document.createElement("td");
            marca.classList.add("corAzul");
            marca.textContent = vetorObjetos[lin].veiculo.marca;

            let placa = document.createElement("td");
            placa.classList.add("corAzul");
            placa.textContent = vetorObjetos[lin].veiculo.placa;


            let data = document.createElement("td");
            data.classList.add("corAzul");
            data.textContent = vetorObjetos[lin].data;

            let descricao = document.createElement("td");
            descricao.classList.add("corAzul");
            descricao.textContent = vetorObjetos[lin].descricao;


            let preco = document.createElement("td");
            preco.classList.add("corAzul");
            preco.textContent = "$" + vetorObjetos[lin].preco.toFixed(2)

            let veiculoToString = document.createElement("td");

            aux = document.createElement('pre')
            aux.textContent = vetorObjetos[lin].veiculo.toString();
            aux.classList.add("cor");

            veiculoToString.classList.add("cor");
            veiculoToString.appendChild(aux);

            tr.appendChild(nome);
            tr.appendChild(marca);
            tr.appendChild(placa);
            tr.appendChild(descricao);
            tr.appendChild(preco);
            tr.appendChild(data);
            tr.appendChild(veiculoToString);

            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        return table;
    } else {
        return null;
    }
}

export function filtrarServicos(tipoVeiculo) {

    let aux = [];

    for (let ind = 0; ind < vetServicos.length; ind++) {

        if (tipoVeiculo == -1) {

            if (vetServicos[ind].veiculo instanceof Comercial) {
                aux.push(vetServicos[ind]);
            }
        } else if (tipoVeiculo == 1) {

            if (vetServicos[ind].veiculo instanceof Pessoal) {
                aux.push(vetServicos[ind]);
            }
        }
    }
    
    let htmltable = criarTableFornecedoresHtml(aux);
    return htmltable;

}

