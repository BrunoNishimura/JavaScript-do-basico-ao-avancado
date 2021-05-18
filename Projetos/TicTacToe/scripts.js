let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  // quando clicar na caixa:
  boxes[i].addEventListener("click", function () {

    let elemento = alternandoElemento(player1, player2)

    // verifica se já tem x ou bola
    if (this.childNodes.length == 0) {
      let cloneElemento = elemento.cloneNode(true);

      this.appendChild(cloneElemento);

      // computar jogada
      if (player1 == player2) {
        player1++;
        if (secondPlayer == 'ai-player') {
          //função para executar a jogada
          computerPlay()
          player2++;
        }
      } else {
        player2++;
      }
      //não precisamos passar nenhum argumento, porque toda a logica jah esta isolada nela.
      checkWinCondition();
    }
  });
}

//função para poder escolher entre 2 jogadores ou CPU.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {

    secondPlayer = this.getAttribute("id");

    for (let j = 0; j < buttons.length; j++) {
      //css display: none nos buttons
      buttons[j].style.display = 'none';
    }

    setTimeout(function () {
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    }, 500);
  });
}


//função para alternar jogadores.
function alternandoElemento(player1, player2) {
  if (player1 == player2) {
    // Sempre vai ser o x quando estiver nesta condição de igualdade.
    elemento = x;
  } else {
    // senão bolinha.
    elemento = o;
  }
  return elemento;
}

//função para analisar quem venceu.
function checkWinCondition() {

  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  //condition horizontal
  if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      console.log('x venceu')
      declareWinner('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      console.log('o venceu')
      declareWinner('o');
    }
  }

  if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
      console.log('x venceu')
      declareWinner('x');
    } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
      console.log('o venceu')
      declareWinner('o');
    }
  }

  if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
      console.log('x venceu')
      declareWinner('x');
    } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
      console.log('o venceu')
      declareWinner('o');
    }
  }

  //condition vertical
  if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
      console.log('x venceu')
    } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
      console.log('o venceu')
    }
  }

  if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
      console.log('x venceu')
      declareWinner('x');
    } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
      console.log('o venceu')
      declareWinner('o');
    }
  }

  if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
      declareWinner('x');
      console.log('x venceu')
    } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
      declareWinner('o');
      console.log('o venceu')
    }
  }

  //condition diagonal
  if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
      declareWinner('x');
      console.log('x venceu')
    } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
      declareWinner('o');
      console.log('o venceu')
    }
  }

  if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
      declareWinner('x');
    } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
      declareWinner('o');
    }
  }

  //conditional draw
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner('Empatou')
    console.log("Empatou")
  }

}

//limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = '';

  if (winner == 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "Jogador 1 venceu!"
  } else if (winner == 'o') {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = "Jogador 2 venceu!"
  } else {
    msg = "Empate!"
  }

  //Exibir a mensagem de empate ou ganhador
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  //Esconder a mensagem de empate ou ganhador
  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 3000);

  //Restart the game
  player1 = 0;
  player2 = 0;

  //remove x and o after the match.
  let boxesToRemove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}

// executar a lógica da jogada do CPU
function computerPlay() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0; //filled: preenchido.

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    //Função para preencher somente se estiver vazio o filho.
    if (boxes[i].childNodes[0] == undefined) {
      //Função  para aumentar a aleatoriedade das jogadas do computador. Para ele no ficar preenchendo em sequencias.
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      //Verificação de quantos SQMs foram preenchidos.
    } else {
      filled++;
    }
  }
  if (counter == 0 && filled < 9) {
    computerPlay();
  }
}