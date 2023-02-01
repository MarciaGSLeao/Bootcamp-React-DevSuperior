/*
- number
- string
- boolean
- object
- array (object)
- null (object)
- undefined
*/

console.log("Olá Mundo!");
console.log("Olá Devs!\n");

const a = 7;
const b = 7.5;
const c = "Felipe";
const d = 'F';
const e = true;
const f = {name: "Felipe", age: 7};
const g = ["Felipe", 7, 'M'];
const h = null;
const i = undefined;

/*
Se uma constante for declarada e não for inicializada, o 
interpretador sinalizará por meio da IDE que a mesma deve 
ser inicializada
Ex:
const j;

Porém, se uma variável for declarada e não for inicializada,
isso será permitido pela IDE.
Ex:
*/
let l;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(h));
console.log(typeof(i));
console.log(typeof l);
