//4. Exercícios

//Exercício 01: Escreva três valores em string em um arquivo e exiba no navegador com console.log()
//Com aspas duplas, simples e template literals
//Reposta:
console.log("O Bruno");
console.log('esta estudando');
console.log(`JavaScript do básico ao avançado!`);

//Exercício 02: Escreva três valores em number em um arquivo e exiba no navegador com console.log();
//Com números inteiros, números com casa decimal e por aritmética;
console.log(10);// 10
console.log(9.75);// 9.75
console.log(50 / 2 + 50 - 2);// 73
console.log((16.5 + 20)* 2 );// 73

//Exercícios 03: Escreva três comparações com boolean;
//Uma com maior; menor ou igual; diferente;
console.log(5 > 6); // false;
console.log(5 <= 6); // true;
console.log(5 != 6); // true;
console.log("Bruno" != "Nishimura") // true;

//Exercícios 04: Escreva três comparações com operadores lógicos;
//Com and, or e not;
console.log(5 <= 6 && "Bruno" != "Nishimura"); // true
console.log(5 <= 6 && "Bruno" == "Nishimura"); // false

console.log(5 > 6 || "Bruno" != "Bruno"); // false
console.log(5 < 6 || "Bruno" == "Nishimura"); // true

console.log(!false); //true
console.log(!(2 === 2)); //false

//Exercício 05: Faça uma operação que emita NaN no console do navegador;
console.log(typeof ("três"*"cinco")); //number
console.log("três"*"cinco"); //NaN
console.log(3 * "cinco"); //NaN
//Observação: Quando é adição, o JS entende como concatenação; 
console.log(typeof ("três"+"cinco")) //string
console.log("três"+"cinco"); //trêscinco


