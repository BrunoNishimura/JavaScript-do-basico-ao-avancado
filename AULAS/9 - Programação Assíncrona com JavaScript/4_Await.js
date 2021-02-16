//Aula 260: Utilizando await

/*
- nas async functions, podemos determinar uma instrução await;
- Que vai esperar uma promise ser resolvida, para apresentar os resultados;
*/
//Exemplo 1:
function somaComAwait (a,b) {
    return new Promise(resolve => {
        setTimeOut(function() {
            resolve(a+b);
        }, 5000);
    })
}

async function resolucaoSoma(a,b,c) {
    let x = somaComAwait (a,b);
    let y = c;

    return await x + y
}

resolucaoSoma(1,2,3).then(value => console.log(value));
