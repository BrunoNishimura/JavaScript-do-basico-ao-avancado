
//3.3 Operador ternário
//Faz um comparativo em apenas uma linha de código;
console.log(true? 1:2);
console.log(false? 'false':'verdadeiro');
console.log("Bruno" == "Bruno" ? "Olá, Bruno!":"Quem é você?")
//print: 1; verdadeiro; Olá, Bruno!

//3.4 Empty Values
//Temos duas palavras reservadas da linguagem que servem para estes casos;
//-> Undefined e null;
//Sempre que você se deparar com estas palavras, o JS basicamente quer dizer que os valores não existem;
console.log(null);
console.log(undefined);

//3.5 Conversão de tipo automática
//O JavaScript em determinadas operações, converte silenciosamente o tipo do resultado final da operação, veja:
console.log(5*null) //0;
console.log("5"-3) //2; Obs: Subtraiu
console.log("5"+1) //51; Obs: Concatenou String e não somou!
console.log("dois"*"três") //NaN;
console.log(!"texto")//Ele pegunta se o texto é verdadeiro ou falso.

console.log(typeof ("5"-3)); //number;
console.log(typeof ("5"+1)); //string;
console.log(typeof ("dois" * 3)); //Ele deu como resposta number, mas na verdade é um erro. NaN
console.log(typeof ("dois">3));//boolean;