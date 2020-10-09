let moves = 0;

// Creates the cards with self-invocation
(function createCard() {
    for (let i = 0; i < 9; i++) {
        // create each card
        let cardItem = document.createElement('li');
        cardItem.setAttribute('class', 'EMPTY');
        cardItem.innerHTML = '';
        document.querySelector('.deck').appendChild(cardItem);

        // add handler that changes card to X
        cardItem.addEventListener("click", function() {
            cardItem.innerHTML = '<i class="card fa fa-times">';
            cardItem.setAttribute('class', 'X');
            cardItem.style.pointerEvents = "none";
            botMove();
            moves++;
            setTimeout(checkWin, 1000);
        })
    }
})();

// Makes a random bot move
function botMove() {
    // get all of the empty cards and pick one at random
    const deck = document.querySelector(".deck");
    let cards = deck.querySelectorAll(".EMPTY");
    let array = Array.from(cards);
    let randomCard = array[Math.floor(Math.random() * array.length)];

    // as long as there are still empty cards, change this random card to O
    if (array.length !== 0) {
        randomCard.innerHTML = '<i class="card fa fa-circle-o">';
        randomCard.setAttribute('class', 'O');
        randomCard.style.pointerEvents = "none";
    }
}

// Checks for win
function checkWin() {
    // get all cards
    const deck = document.querySelector(".deck");
    let cards = deck.querySelectorAll("li");
    let array = Array.from(cards);

    // rows
    if ((array[0].className === "X" && array[1].className === "X" && array[2].className === "X") ||
        (array[3].className === "X" && array[4].className === "X" && array[5].className === "X") ||
        (array[6].className === "X" && array[7].className === "X" && array[8].className === "X")) {
        reset('win');
    }
    if ((array[0].className === "O" && array[1].className === "O" && array[2].className === "O") ||
        (array[3].className === "O" && array[4].className === "O" && array[5].className === "O") ||
        (array[6].className === "O" && array[7].className === "O" && array[8].className === "O")) {
        reset('lose');
    }

    // columns
     else if ((array[0].className === "X" && array[3].className === "X" && array[6].className === "X") ||
        (array[1].className === "X" && array[4].className === "X" && array[7].className === "X") ||
        (array[2].className === "X" && array[5].className === "X" && array[8].className === "X")) {
        reset('win');
    }
     else if ((array[0].className === "O" && array[3].className === "O" && array[6].className === "O") ||
        (array[1].className === "O" && array[4].className === "O" && array[7].className === "O") ||
        (array[2].className === "O" && array[5].className === "O" && array[8].className === "O")) {
        reset('lose');
    }

    // diagonals
    else if ((array[0].className === "X" && array[4].className === "X" && array[8].className === "X") ||
        (array[2].className === "X" && array[4].className === "X" && array[6].className === "X")) {
        reset('win');
    }
    else if ((array[0].className === "O" && array[4].className === "O" && array[8].className === "O") ||
        (array[2].className === "O" && array[4].className === "O" && array[6].className === "O")) {
        reset('lose');
    }

    // moves
    else if (moves === 5) {
        reset('lose');
    }
}

// Displays a confirmation popup, then reloads the page on button press
function reset(string) {
    if (string === 'win') {
        confirm( "YOU WON!");
    } else {
        confirm( "YOU LOST..." );
    }
    location.reload();
}



