//Aula 314-315

/*O que é Node?

- Não é uma linguagem de programação;
- Uma ferramenta construída sobre o motor JavaScript do Google Chrome para criar aplicações rápidas e escaláveis;
- O problema que o Node resolveu: cada conexão de um cliente aloca um espaço na memória
- Com Node: cada conexão é um evento executado na engine no Node;
- Ou seja, o Node suporta muito mais conexões do que o PHP e Java em uma máquina igual, por exemplo;
*/


/*Instalando o Node
- Node -v && npm -v; // Verificação se o Node e o npm estão instalados corretamente e as versões dos mesmos.
*/

/*Testando o Node
- Podemos criar um arquivo JavaScript e executar com o node;
- node test.js// Comando no terminal

No arquivo test.js:
  let msg = "Hello World";
  console.log(mdg);  //Hello World
*/

/*O comando node
- Podemos executar instruções de JavaScript rodando o comando node;;
- Podemos também fazer operações matemáticas, utilizar funções do JavaScript e muito mais;

Comando no terminal:
node
1+1
console.log("teste"); //teste
Math.pow(4,5);

let msg = 'Bruno';
console.log(msg); //Bruno
*/

/*O npm (Node Package Manager)
- Ferramenta utilizada para instalar módulos de JavaScript;
- Que podem fazer desde operações matemáticas até comunicação HTTP;
- Instalamos um pacote pelo comando npm install pacote;
- Vem junto com o Node;

Jamais utilizar o npm install sem seguir boas práticas:
- npm install pacote, irá instalar as dependências na máquina.
- atrapalhando outros projetos que irão precisar usar dependências diferentes em versões diferentes.
- O correto é instalar as dependências individualmente para cada projeto.
*/

/*Criando um projeto
- Na última aula vimos que o node reclamou da falta do package.json;
- O certo sempre é ter um arquivo desse ao iniciar um novo projeto;
- Podemos criar a partir do template, utilizando o comando: npm init;
- Aí teremos um projeto com package.json;
- Este arquivo serve para configurações e salva nossas dependências;

Ordem dos comandos:
- npm init //Este comando serve para configurar todo o pacote, para casos mais específicos
    //Para utilizar as configurações padrão, só ir pressionando o Enter.
- Após esta etapa, o arquivo package.json será criado com as configurações solicitadas, sendo  ainda possível ser alterado futuramente. Caso seja necessário.

*/
