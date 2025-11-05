import { Queue } from "./Queue";

const fila = new Queue<number>();

for(let i=1 ; i<=10; i++){
    fila.enqueue(i);
}   

console.log(`\nExibir todos os elementos da fila:`);
fila.printQueue();
console.log(`\nRemovido elemento:${fila.dequeue()}`)
fila.printQueue();
fila.enqueue(11);

console.log(`Primeiro elemento da fila${fila.peek()}`);

console.log(`O tamanho da fila:${fila.count()}`);

console.log(`\nO elemento 4 existe na fila?${fila.contains(4)}`);

console.log(`\n limpar a fila${fila.clear()}`);

console.log(`\n A fila esta vazia?${fila.isEmpty()}`);