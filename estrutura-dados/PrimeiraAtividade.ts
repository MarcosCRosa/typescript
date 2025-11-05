import readline from 'readline-sync';
import { Queue } from './Queue';
const clientes = new Queue<any>();
let contiua:boolean=true;
let opcao:number;
let nome:string;

while(contiua){
   console.log("**************************************************************")
   console.log("1-Adicionar Cliente na Fila");
   console.log("2-Listar todos os Clientes");
   console.log("3-Retirar Cliente da Fila");
   console.log("0-Sair");
   opcao = readline.questionInt("Digite um numero");  
   switch(opcao){
     case(1):
     nome=readline.question("Digite o nome do cliente:");
     clientes.enqueue(nome);
     break;
     case(2):
     console.log(`Lista de Clientes:\n:`);
     clientes.printQueue();
     break;
     case(3):
     console.log(`Cliente retirado da lista:`);
     clientes.dequeue();
     break;
     case(0):
     contiua = false;
     }
     
   }