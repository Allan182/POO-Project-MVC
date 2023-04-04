/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Realizamento de Testes feito por este arquivo com o debugador NODE.JS para depurar todos os possíveis erros, até que a aplicação se torne funcional. */ 

import { Cliente } from "./Cliente.js";
import { Pessoal } from "./VeiculoPessoal.js";
import { Comercial } from "./VeiculoComercial.js";
import { Veiculo } from "./Veiculo.js";
import { Servico } from "./Servico.js";
import {
    vetVeiculoComercial, vetCliente, vetVeiculoPessoal, vetServicos
} from './vetorObjetos.js';
 

/*const veiculoPessoal = new Pessoal("Abner", "2030", "FORD", 40);
const abner = new Servico("10/20", "Abnelso", veiculoPessoal)
console.log(abner);*/

// const clienteUm = new Cliente("Allan", "132.681.077-45", "(27)99885-9003");
// const veiculoComercial = new Comercial(clienteUm, "PPK4050", "Focus", 40);

const clienteUm =  new Servico("10/20/30", "Lavagem Simples", vetVeiculoPessoal[0])

