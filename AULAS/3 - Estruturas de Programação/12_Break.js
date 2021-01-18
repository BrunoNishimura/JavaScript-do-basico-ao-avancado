
//-----Aula 63: Forçando a saída de um loop: break

//As vezes precisamos parar o loop antes que complete todo o seu ciclo!
//Para isso utilizamos o BREAK!

//Não é muito utilizada, mas é bastante útil!

//Exemplo 1:
// for (let i = 5; i < 20; i = i + 1){
//     if (i % 10 == 0){
//         console.log('Saiu do loop');
//         break;
//     }
//     console.log('Prosseguindo o loop');
// }

//Exemplo 2:

let nome = "Bruno";

for(let i = 0; i < 10; i = i + 1) {
    
    if (i == 3){
        nome = "Yuji";
    }

    if (i == 5 && nome == "Yuji"){
        console.log("O nome é Yuji, pode parar");
        break;
    }

    console.log(i); //O break é ativado no 5 e não imprimi mais o i até o número 10.
}