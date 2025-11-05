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
   opcao = readline.questionInt("Digite uma opcao:");  
   switch(opcao){
     case(1):
     nome=readline.question("Digite o nome:");
     clientes.enqueue(nome);
     console.log(`Fila:`);
     clientes.printQueue();
     console.log(`Cliente Adicionado!`);
     break;
     case(2):
     if(clientes.isEmpty()){
      console.log('A fila esta vazia erro ao chamar cliente:');
     }else{
     console.log(`Lista de Clientes na fila:`);
     clientes.printQueue()
     }
     break;
     case(3):
     if(clientes.isEmpty()){
      console.log('A fila esta vazia erro ao chamar cliente:');
     }else{
     console.log(`Fila:`);
     clientes.printQueue();
     clientes.dequeue();
     console.log(`O cliente foi chamada!`);
     }
     break;
     case(0):
     console.log(`Programa Finalizado!`);
     contiua = false;
     }
     
   }