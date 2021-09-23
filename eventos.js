'use strict';

var readlinesync = require("readline-sync"); 

var opcao, insevento, quantEventos;
var evento = [];
var data, strdata, datapartes;
var palestrante,listapalestrante,participantes, quantpalestrantes;
var eventos = [], listapalestrante = [], listaparticipantes;
const numparticipante = 4;
do{

console.log();

console.log("\t\t----sistema de cadastro de eventos ----");
console.log("\t Escolha uma opção");
console.log("\t1 - cadastrar eventos");
console.log("\t2 - cadastrar palestrantes");
console.log("\t3 - cadastrar participantes");
console.log("\t4 - listar eventos");  
console.log("\t0 - sair do sistema");

opcao = readlinesync.question("\t");

switch(opcao){
    case '1':
        console.log("\t ---cadastro de eventos ---")
        strdata = readlinesync.question("---digite uma data valida (00/)00/0000:");
        datapartes = strdata.split("/");
        data = new Date(datapartes[2], datapartes[1] - 1, datapartes[0]);
        if(data < new Date()) {
        console.log("desculpe o evento nao pode ser cadastrado!");
} else {
    insevento = readlinesync.question ("digite o nome do evento:");
evento.push(insevento);
}
    break;   
case '2':
    console.log("\t --- cadastro de palestrante ---")
       quantpalestrantes = listapalestrante.lenght;
    if(quantpalestrantes < 0){
        console.log("evento sem palestrante.");

        palestrante = readlinesync.question("digite o nome do palestrante!")
        listapalestrante.push(palestrante);
        
        if(quantparticipante < numparticipante){
            participante = readlinesync.question("digite o nome do participante: ");
            idade + readlinesync.question("digite sua idade:" );
        listaparticipante.push(participante);
        console.log("nao permitido para o cadastro por ser menor de idade!")
        }
    
    }else{
            console.log("evento completo, nao a mais vagas!")

    }

    break;    
case '3':
    break;  
case '4': 
console.log("\tlistas de eventos cadastrados");
quantEventos = evento.length;
console.lo("existe "+ quanteventos + "eventos cadastrados.");
console.log(" o nome do evento é:" + eventos[0]);



     break;       
case '0':
                        console.log("\tObrigado por usar nosso sistema!!!");
                        break;
                        default:
                            console.log();
                            console.log("\tOpção invalida Tente novamente");
                            
                            

//\t = e caracter de scape - usadp para executar sem o uso do teclado 
//\t = tabulacao \n - pular linha \r - retorno de carro


}

}while(opcao != 0);
