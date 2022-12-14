/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Criação de Interface para resgatar funcionalidades da interface gráfica e 
   interagir com "operacoes.js"; */   


import { criarTableFornecedoresHtml, filtrarServicos } from './operacoes.js';
import { vetServicos } from './vetorObjetos.js';

var veicPessoal = document.getElementById("rdLavIntena");
var veicComercial = document.getElementById("rdLavExterna");
var button = document.getElementById("btAGENDAR");
var todosVeiculos = document.getElementById("rdTodosVeiculos");
var outSaidaTrue = document.getElementById("outSaidaTrue");
var outSaidaFalse = document.getElementById("outSaidaFalse");

function verificarEscolha() {

    let allVeiculos = todosVeiculos.checked;
    let veiculoPessoal = veicPessoal.checked;
    let veiculoComercial = veicComercial.checked;

    let htmltable = "";                     // Limpar Tabelas 
    outSaidaTrue.textContent = "";          // Limpar Saídas 
    outSaidaFalse.textContent = "";         // Limpar Saídas 

    if (allVeiculos == true || veiculoPessoal == true || veiculoComercial == true) {

        let veiculo;

        switch (true) {
            case allVeiculos:
                htmltable = criarTableFornecedoresHtml(vetServicos)
                outSaidaTrue.textContent = "Todos os Veiculos Listados com Sucesso!!!"
                break
            case veiculoComercial:
                veiculo = -1;
                htmltable = filtrarServicos(veiculo)
                outSaidaTrue.textContent = "Veiculos Comerciais Listados com Sucesso!!!"
                break
            case veiculoPessoal:
                veiculo = 1;
                htmltable = filtrarServicos(veiculo)
                outSaidaTrue.textContent = "Veiculos Pessoais Listados com Sucesso!!!"
                break
        }
        document.getElementById("resultado").appendChild(htmltable);
    } else {
        outSaidaFalse.textContent = "ERRO! Selecione uma Opção!";
        allVeiculos.checked;
    }
}
button.addEventListener("click", verificarEscolha);



/* function verificarEscolha() {

    let allVeiculos = todosVeiculos.checked;
    let veiculoPessoal = veicPessoal.checked;
    let veiculoComercial = veicComercial.checked;
    let veiculo;

    outSaidaTrue.textContent = "";          // Limpar Saídas 
    outSaidaFalse.textContent = "";         // Limpar Saídas 

    veiculoPessoal == true ? veiculo = 1 : veiculoComercial == true ? veiculo = -1 : allVeiculos == true ? veiculo = 0 : veiculo = null;

    let htmltable = "";

    if (veiculo != 0 && veiculo != undefined) {
        htmltable = filtrarServicos(veiculo);
        document.getElementById("resultado").appendChild(htmltable);
        outSaidaTrue.textContent = "Listado com Sucesso!!!";
    } else if (veiculo == 0 && veiculo != undefined) {
        htmltable = criarTableFornecedoresHtml(vetServicos)
        document.getElementById("resultado").appendChild(htmltable);
        outSaidaTrue.textContent = "Todos os Veiculos Listados com Sucesso!!!";
    } else if (veiculo == null) {
        outSaidaFalse.textContent = "ERRO! Selecione uma Opção!";
        allVeiculos.checked;
    }
}
button.addEventListener("click", verificarEscolha); */

