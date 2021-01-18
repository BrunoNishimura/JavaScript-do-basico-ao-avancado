//1. Variaveis
//Quando salvamos os valores em variáveis (isso é um statement);

//Variáveis (const, let, var): Salvar valores em um espaço da memória no computador;
//Armazenamos os valores nas variáveis para poder criar diversas expressões(expressions) com os valores salvos na variáveis;

//Criação de um Statement: Declaração de um valor;
let laranjas = 5;

//Usando a variável/statement criada em diversas expressions.
console.log(laranjas*laranjas);// 25; 
console.log(`Tem ${laranjas} bananas na sexta`);// Tem 5 bananas na sexta; 
console.log(`Hoje é dia ${laranjas}`)//Hoje é dia 5;

//Podemos também mudar o valor que foi salvo anteriormente sempre que for necessário!
// let laranjas = 5; 
// para let laranjas = 1 + 5;

//um let pode definir várias variáveis também:]
let quadrado = 4; triangulo = 3; retangulo =4;
console.log(quadrado * (triangulo + retangulo)); //28

//Exemplos:
let nome = "Bruno"; //Declarção do valor;

console.log(nome); //Bruno;
console.log(`O meu nome é ${nome}`); // O meu nome é Bruno;

// Dá para alterar o valor da variável!
nome = "Matheus" //Atribuição de valor, não precisa declarar novamente!
console.log(nome);

// E também alterar o valor de String, para Number ou Boolean.
nome = 1995;
console.log(nome);

//1.1 Outras maneiras de salvar valor!
//Podemos definir valores com var e const;
var nick = `Pedro`; //Usar Nome ou Name não é possível, pois já foram criadas anteriormente em let!
console.log(nick); //Pedro;

const sobrenome = `Soares`;
console.log(sobrenome); //Soares

//var!
//O var é a forma antiga de declarar uma variável, não é mais usada por questão de escopo do JavaScript.
//Com o var tinha uma facilidade de perder o escopo do projeto!
//E para resolver este problema de escopo, foram criadas o let e o const!
//Como o let e o const são recentes alguns navegadores ainda não se adaptaram, como o Operamini que não aceita o let,
//Para resolver este problema, algumas pessoas usam o "" para transformar o código de ES6 para uma versão mais antiga, 
//transformando todos os let/const em var! Geralmente este é o único motivo para se usar o var.  
//praticamente 99% dos navegadores, já estão adaptados para ler let e const!

//Const
//Com o const não é possível alterar o valor dele durante o programa/software,
//Ele começa com o valor Soares e termina o Software com o mesmo valor!
//Isso é extremamente útil para valores de configuração que não devem ser alterados!
//Exemplo:IP, porta, rota, algumas funções, entre outros!
const IP = "127.0.0.1"
console.log(IP) // 127.0.0.1

IP = "200.9.9.9" //Não é possível alterar o valor da const!
console.log(IP)// Uncaught TypeError: Assignment to constant variable;

//--------------------Convenção no nome das variáveis------//

//Não pode começar com um número (let 2teste);
//Mas pode terminar com número (let teste2 = "testando");
let 2teste = "esta com erro"
let teste2 = "esta ok!"

//Pode ter $ ou _ :(let $nome, _nome)
let $nome=1; _nome=2; seu_nome=3;

//Mas não outros caracteres especiais (let @teste);
let @teste = "esta com erro"

//Podemos iniciar com letra maiúscula (let Nome = 'Bruno');
//Ou usar camelCase (let meuPrimeiroNome = 'Bruno')
let Nome = 'Bruno'
let meuPrimeiroNome = 'Bruno'

//-----Aula 67: Um pouco mais sobre declaração de variáveis
let carrovermelhogrande; //(difícil de ler)

let carro_vermelho_grande;// Ok, mas tem gente que não gosta.
let CarroVermelhoGrande;// Ok, mas pode futuramente serem confundidos com classes.

let carroVermelhoGrande; //(mais utilizado) As classes possuem a primeira letra maiúscula.
// Portanto deste modo já é possível diferenciar as classes das variáveis!
