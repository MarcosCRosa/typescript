//const nome_do_array: Array<T> = new Array<T>();
//const nome_do_array: Array<T> = new Array<T>(elemento1,elemento2,elemento3);

const pessoas: Array<string>=new Array<string>('Enrique','Bruno','Murilo','Geandro');

for(let pessoa of pessoas){
 console.log(pessoa);
}

pessoas.push('Daniel');

for(let pessoa of pessoas){
 console.log(pessoa);
}

pessoas.push('Enrique');

// unshift adiciona varios elementos no array no inicio;
pessoas.unshift('Gabrieli', 'Eduardo')


// tras o indice do eduardo no array;
console.log(`\n O indice da pessoa eduardo é: ${pessoas.indexOf('Eduardo')}`)

// verifica se o elemento esta no array e retorna um boolean;
console.log(`A pessoa Enrique existe no Array?:${pessoas.includes('Enrique')}`);

// mostra o que esta no indice 3
console.log(`O elemento no indice 3 é:${pessoas[3]}`);
// adiciona um elemento neste caso a string jeferson no indice 3;
pessoas[3]="jeferson"; 

console.log(`O tamanho do array pessoas é:${pessoas.length}`);

