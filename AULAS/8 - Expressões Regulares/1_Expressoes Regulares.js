//Aula 222-223: O que são Expressões Regulares(Regex)?

/*
Introdução:
- Economiza diversas criando verificações com uma linha;
- Sempre procurar no google quando for fazer uma Expressão Regular, pois é muito difícil gravar todos os caracteres e todos os padrões;
*/

/*
O que são Expressões Regulares(Regex)?
- Uma forma de encontrar padrões em uma string;
- Por exemplo: validar se só tem números;
- Em vez de criarmos funções compĺexas, podemos encontrar dados em Strings por meio do Regex;

Notas: Ele é muito poderoso, mas por usar só uma linha pode ficar difícil de ler!!!
*/

//Aula 224: Criando um Expressão Regular
/*
- As expressões regulares no JS são um tipo de objeto;
- Podemos instancia-lo de duas formas:
*/
let Exemplo1 = new RegExp("test");
//ou
let Exemplo2 = /test/;

//Aula 225: Testando uma Expressão Regular
/*
- Depois da definição do padrão por meio da regex;
- Utilizamos o método test() para verificar se o padrão é retornado;
- Com isso vamos receber de resposta true ou false.
*/

//Exemplo 1: Utilizando por meio do "new RegExp"
const regex1 = new RegExp (`Bola`);

console.log("1.", regex1.test("Tem bola?")); //false; pois o "b" está com letra minúscula
console.log("2.", regex1.test("Não tem Bola"));//true;
console.log("3.", regex1.test("bbbBolaAAA"));//true;

//Exemplo 2: Utilizando por meio das "//"
const regex2 = /73/;

console.log("4.", regex2.test("4.", 111731111));//true;
console.log("5.", regex2.test("5. número 73"));//true;

//Exemplo 3: Fazendo o teste dentro da String de uma variável.
const regex3 = /cidade/

const exemplo3 = "À procura da felicidade"

console.log("6.",regex3.test(exemplo3));//true;
/*
Observação: O teste dentro na variável funcionou, 
porém foi encontrado a palavra "cidade" dentro de "felicidade"
*/ 

//Exemplo 4: Podemos também usar o Regex, no meio de uma sentença de programação;
console.log("7.", /Coração/.test("Coração Valente")); //true