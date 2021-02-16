//3. Boolean
console.log(typeof true);
console.log(typeof false);
console.log(typeof (10>2));
//print: boolean; boolean; boolean;

//3.1 Comparações
//Maior que: >
//Menor que: <
//Maior ou igual: >=
//Menor ou igual: <=
//Igual: ==
//Diferente: !=
//Idêntico: ===

console.log(1 > 2); //print: false;
console.log(5 < 10); //print: true;
console.log(3 >= 3); //print: true;
console.log(5 <= 4); //print: false;
console.log(5 == 4); //print: false;
console.log('Matheus' != 'Matheus'); //print: false;
console.log(3 === '3'); //print: false;
console.log(4 === 4); //print: true;

//3.2 Operadores lógicos
// Por meio de uma comparação resultam em um Boolean
// && - and: Para ser true, os dois 'lados' da comparação precisam ser true;
// || - or: Para ser true, basta um dos 'lados' da comparação ser true;
// ! - not: Inverter os valores (true vira false);

console.log(true && true); //print: true;
console.log(true && false); //print: false;
console.log(false || false); //print: false; 
console.log(!true); //print: false;

console.log(5 > 3 && 3==2);//print: false; Se um lado for false, sempre será falso;
console.log(3 == 3 && "Matheus" == "Matheus");//print: true; Os dois lado precisam ser verdadeiros;

console.log(5 > 3 || 3==1);//print: true; Pelo menos um lado é verdadeiro;
console.log("Felipe" == "João" || false);//print: false; Os dois lados são falso;

console.log(!(!(true && true)));//print: true;

//condições especiais
//Para o && sempre ser true, todas as condições precisam ser true!
console.log(true && true);
//para o || sempre ser false, todas as condições precisam ser false!
console.log(false || false);