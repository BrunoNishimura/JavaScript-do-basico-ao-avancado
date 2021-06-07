//2. Strings
//String = texto;
console.log(typeof 'Isso é uma String');
console.log(typeof "Este texto aqui também");
console.log(typeof `E este também`) //(template literals);
//print: String; String; String;
//Observação: Template literals é a única maneira de inserir variáveis no meio do texto, se não será necessário concatenar(Somar uma String a outra.), mas nunca no meio do texto!

//2.1 Detalhes mais técnicos
// - A \ pode dar um `escape` na String, e isso permite `efeitos especiais`;
//Exemplo:\n pula uma linha

console.log("Essa é uma String \n De duas linhas")
//print: Essa é uma String
//De duas linhas;

// - Para inserir uma ' ou " devemos iniciar a String com a aspa inversa da qual desejamos inserir;
//Exemplo:
console.log("'String com aspas simples'")
console.log('"String com aspas duplas"')
//print: 'String com aspas simples'; "String com aspas duplas"



// - O template literals serve para computar/inserir valores dentro das Strings, Exemplo:
console.log(`A soma de 2+2 é ${2+2}`);
console.log('A soma de 2+2 é ${2+2}');
console.log("A soma de 2+2 é ${2+2}");
//print: A soma de 2+2 é 4; A soma de 2+2 é ${2+2}; A soma de 2+2 é ${2+2};

//Concatenação é um processo de 'somar' Strings, veja:
console.log("salada " + "de " + "frutas");
//print: salada de frutas;