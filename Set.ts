//const nome_do_set: Set <t>=new<t>();

//const nome_do_set: Set<t> = new Set<t>([elemento1,elemento2,elemento3]);

// nao pode repetir elementos;
const frutas: Set<string>=new Set<string>(['Abacate','banana','maça','morango'])

//se tiver um ou mais de um elemento igual ele ira ignorar
console.log(frutas);

for(let fruta of frutas){
    console.log(fruta);
}

// verifica se existe o elemento no set;
// console.log(`existe a fruta kiwi no set:${frutas.has('kiwi')}`);

// // apaga o elemento do set e retorna false pois sera apagado
// console.log(frutas.delete('abacate'));

// console.log(`\n tamanho do set:${frutas.size}`);