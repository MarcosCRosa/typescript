//let identificadador_da_variavel: tipo = visualViewport;

// any e qualquer coisa tira um pouco da typagem cuidado ao usar
let variavel: any='texto';
variavel = 123;
variavel = true;
// aceita qualquer tipo de dados;
// normalmente usado em api por nao saber que dado ira retornar

let aprovado: boolean=true;

// nao distingue numeros inteiros de flutuantes 1 e 1,3
let peso:number=75.50;
let idade: number=25;
// aceita aspas duplas ou unica.
let nome: string='Murilo';

console.log(`Bom dia ${nome}!Seu peso é ${peso}kg e sua idade é ${idade}anos`);

let sobrenome = 'Araujo';
let anoDeNascimento = 1990;
console.log(`Tipo da vairavel sobrenome:${typeof sobrenome}`);
console.log(`Tipo da vairavel anoDeNascimento:${typeof anoDeNascimento}`);


let client: any = null;


// este pipe faz a uniao de tipo ele vai ser ou um numero ou undefinido;
let ano:number | undefined;
ano = 2025;
console.log(ano);

//NaN;

//number pode ser usado para transformar por exemplo numero escritos em strings em numeros;
let numero=Number("abc");
console.log(numero);

//infinity
let a= 1/0;
console.log(a);

// constantes;
const QUANTIDADE:number=10;
const PORT:number=3000;