// A, Uso de var let y const

// 1. var y let se pueden declarar sin iniciar;
// var gato;
// let carro;
// console.log(gato)
//console . log (carro)




// 2. var se puede re declarar

// var gato ='Felix';
// concole. lo(gato);
// var gato ='Boddy'
// console. log(gato);

// 3. let no se puede declrar de nuevo;

let perro ='Tobby';
// let perro = 'Boddy';
console. log(perro);

perro = 'Bobby';
console. log(perro);

// 4 const no se puede declarar sin iniciar


// const direccion;
const direccion = 'avenida paseos';
console. log(direccion);

//5 const no se puede reasignar

// direccion = 'avenida principal'
// console. log(direccion);

// 6 scope (alcance)


// var es visible en la funcion donde se declaro o globales
// let y const son visibles en el bloque donde se declararon o globales




// B. Reglas para nombrar variables

// 1. No se puede usar palabras reservadas (function, var, for, while, etc.)

// 2. No pueden empezar con un digito
// let 2x = 6;

// 3. Pueden empezar con una letra, guion bajo o $
let $car = 'ford mustang';
console. log ($car);

// 4. Para nombres complejos se usa notación de camello:
let userName = 'Juan';



// C Tipo de Datos en JavaScript



// 1 number
// let velocidad = 98.5;
// console. log(typeof velocidad);