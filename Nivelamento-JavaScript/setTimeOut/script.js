// setTimeOut é uma função nativa do JavaScript que executa uma dada função após um determinado período de tempo.

function sayHello(){
    console.log("Hello ")
}

function sayHelloName(name){
    console.log("Hello " + name)
}

// SEM ARGUMENTOS
setTimeout(sayHello, 5000);

console.log("Teste Frase A");
console.log("Teste Frase B");

// COM ARGUMENTOS
setTimeout(() => {sayHelloName("Márcia")}, 2000);

setTimeout(() => {
    sayHelloName("Felipe");
    setTimeout(() => {
        sayHelloName("Helena");
        setTimeout(() => {
            sayHelloName("João");
        }, 2000);      
    }, 2000);
}, 2000);

// A FUNÇÃO 'Date.now()' tem como saída um número inteiro que representa o tempo em milisegundos desde 1/2 noite de 1 de Jan de 1970.
console.log(Date.now())

// ESPERA SÍNCRONA => 'NÃO FAÇA ISSO...'
