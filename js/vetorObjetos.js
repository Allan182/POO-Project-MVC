/* Autores: Allan, Abner e Elder.
   Data: 14/12/2022.
   Versão: 1.2.4
   Descrição: Criação de um vetor de objetos para realizar as funcionalidades na Pagina "Agenda". */ 

import { Pessoal } from "./VeiculoPessoal.js";
import { Comercial } from "./VeiculoComercial.js";
import { Cliente } from "./Cliente.js";
import { Servico } from "./Servico.js";


export var vetCliente = [
    new Cliente("Allan", "132.681.077-45", "(27)99885-9003"),
    new Cliente("Abner", "161.775.081-31", "(27)99703-1255"),
    new Cliente("Elder", "111.325.661-61", "(27)99105-7733"),
    new Cliente("Archimedes", "123.155.713-21", "(27)97103-6655"),
    new Cliente("Miltin", "156.132.512-33", "(27)98014-4473"),
    new Cliente("Bruno", "113.125.713-66", "(27)96432-2230"),
    new Cliente("Anderson", "163.321.444-12", "(27)92287-9940"),
    new Cliente("José", "122.441.214-55", "(27)93321-8820")
];
 

export var vetVeiculoComercial = [
    new Comercial(vetCliente[0], "PPK1020", "FORD", 4),
    new Comercial(vetCliente[1], "PPK2020", "CHEVROLET", 8),
    new Comercial(vetCliente[2], "PPK5010", "NISSAN", 10),
    new Comercial(vetCliente[3], "PPK9090", "HONDA", 20),
    new Comercial(vetCliente[4], "PPK7070", "JEEP", 50)
];

export var vetVeiculoPessoal = [
    new Pessoal(vetCliente[5], "KKP1020", "FORD", 4),
    new Pessoal(vetCliente[6], "KKP2020", "CHEVROLET", 2),
    new Pessoal(vetCliente[7], "KKP2020", "CHEVROLET", 2)
];

export var vetServicos = [
    new Servico("23/12/2022", "Lavagem Simples", vetVeiculoPessoal[0]),
    new Servico("21/12/2022", "Lavagem Externa", vetVeiculoComercial[0]),
    new Servico("21/12/2022", "Lavagem Simples", vetVeiculoPessoal[2]),
    new Servico("21/12/2022", "Lavagem Externa", vetVeiculoPessoal[1]),
    new Servico("22/12/2022", "Lavagem Simples", vetVeiculoComercial[1]),
    new Servico("22/12/2022", "Lavagem Externa", vetVeiculoComercial[2])
];