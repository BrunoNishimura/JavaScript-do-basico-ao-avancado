
//-----Aula 66: Estrutura condicional: switch

//Quando há a necessidade de vários (ifs), podemos utilizar o switch/case;

//Para sair de um case podemos utilizar o break;

//Podemos inserir uma expressão default, para caso nenhum valor for correspondido;

//OBS!!!: Muitos programadores optam por usar vários ifs! 
//Por causa de leitura de código, estar mais acostumado e não deixar as coisas mais complicadas do que o necessário!


//Exemplo 1:
let nome = "Bruno";

switch(nome){
    case "João":
        console.log("O seu nome é João");
        break; //Muitos breaks deixando o código longo, um só if resolvia
    case "Marcos":
        console.log("O seu nome é Marcos");
        break; //Se não colocar o break, ele entende que o case deu certo e o próximo case também poderá ser executável!
    default:console.log("O seu nome não é João nem Marcos!");//O else também resolve!
        break;
}

//Resolvendo o Exemplo 1, no IF e ELSE:
if(nome == "Matheus"){
    console.log("O nome é Matheus");
} else {
    console.log("O nome não foi encontrado");
}