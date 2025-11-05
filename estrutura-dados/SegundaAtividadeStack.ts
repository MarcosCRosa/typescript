import readline from 'readline-sync';
import { Stack } from './Stack';
const pilha = new Stack<any>();
let contiua:boolean=true;
let opcao:number;
let nome:string;

while(contiua){
   console.log("**************************************************************")
   console.log("1-Adicionar um novo livro na pilha");
   console.log("2-Listar todos os livros");
   console.log("3-Retirar Livro da pilha");
   console.log("0-Sair");
   opcao = readline.questionInt("Digite um numero");  
   switch(opcao){
     case(1):
     nome=readline.question("Digite o nome do livro");
     console.log(`Pilha:${pilha.printStack()}`);
     console.log(`${nome}`);
     pilha.push(nome);
     console.log(`Livro adicionado`);
     break;
     case(2):
     if(pilha.isEmpty()){
     console.log('A lista esta vazia');
     }else{
        console.log(`Lista de Livros na Pilha:\n${pilha.printStack()}`);
     }
     break;
     case(3):
     if(pilha.isEmpty()){
        console.log('A lista esta vazia');
     }else{
     console.log(`Pilha:\n${pilha.printStack()}`);
     pilha.pop();
     console.log('Um Livro foi retirado da pilha!');
     }
     break;
     case(0):
     console.log('Programa Finalizado!');
     contiua = false;
     }
     
   }