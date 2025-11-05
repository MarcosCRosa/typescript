import { Stack } from "./Stack";

const pilha = new Stack<string>();
pilha.push('Prato 1');
pilha.push('Prato 2');
pilha.push("Prato 3");
pilha.push("Prato 4");

console.log('Pratos na pila');
pilha.printStack();

console.log(`Prato removido${pilha.pop()}`);

pilha.printStack();

pilha.push("prato 5");

console.log(`Prato no topo:${pilha.peek()}`);

pilha.printStack();

console.log(`Tamanho da pilha${pilha.count()}`);

console.log(`O prato 3 esta na pila?:${pilha.contains('prato 3')}`);

console.log(`\nLimpar a pilha:${pilha.clear()}`);

console.log(`A pilha esta vazia ?:${pilha.isEmpty()}`);