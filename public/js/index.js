class Game {

    constructor() {
        this.scoreX = 0;
        this.scoreO = 0;
        this.currentPlayer = "X";
    }

    startGame(){
        const tds = document.getElementsByTagName("td");
        const resetButton = document.querySelector(".reset-b");
        this.#highlightCurrentPlayer();
        
        for (const td of tds) {
            td.addEventListener('click', (event) => {
                console.log(event);

                    let image = td.querySelector('img');

                    if (image === null ){
                        const currentPlayerBeforeMove = this.currentPlayer
                        this.#placeImage(td.id)

                        if (this.#isWinner(currentPlayerBeforeMove)){
                            alert(`Player ${currentPlayerBeforeMove} has been won!`);

                            if (currentPlayerBeforeMove === "X") {
                                this.scoreX++;
                                document.getElementById("scoreXId").textContent = this.scoreX;
                            } else {
                                this.scoreO++;
                                document.getElementById("scoreOId").textContent = this.scoreO;
                            }
                        }
                    }
            })
        }
        resetButton.addEventListener("click", () => {this.#resetBoard()})
    }

    #placeImage(td) {

        const el = document.getElementById(td)

        if(this.currentPlayer === "X"){
            let img = document.createElement("img");
            img.src = "/images/x-solid.svg";
            img.alt ="X";
            el.appendChild(img);
            el.classList.add("setX");
            this.currentPlayer ="O";
            this.#highlightCurrentPlayer();
        }else {
            let img = document.createElement("img");
            img.src = "/images/o-solid.svg";
            img.alt ="O";
            el.appendChild(img);
            el.classList.add("setO");
            this.currentPlayer ="X";
            this.#highlightCurrentPlayer();
        }
    }

    /**
     * Checks if the specified player has won
     * @param {string} player - The player to check for win ("X" or "O")
     * @returns {boolean}
     */
    #isWinner(player){

        const tdElements = document.getElementsByTagName("td");
        const winningConditions= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for (const condition of winningConditions) {
            const checkIndexOFTd1= condition[0];
            const checkIndexOFTd2= condition[1];
            const checkIndexOFTd3= condition[2];

            const cel1 = tdElements[checkIndexOFTd1].classList.contains("set" + player);
            const cel2 = tdElements[checkIndexOFTd2].classList.contains("set" + player);
            const cel3 = tdElements[checkIndexOFTd3].classList.contains("set" + player);

            if (cel1 && cel2 && cel3) {
                return true;
            }
        }
        return false;
    }

    #resetBoard(){
        const tds = document.getElementsByTagName("td");
        for (const td of tds) {
            td.innerHTML = "";
            td.classList.remove("setX", "setO");
            td.style.pointerEvents = "auto";
        }
        this.currentPlayer = "X";
        this.#highlightCurrentPlayer();
    }

    #highlightCurrentPlayer() {
        const scoreXDiv = document.querySelector(".scoreX");
        const scoreODiv = document.querySelector(".scoreO");

        scoreXDiv.classList.remove("active-player");
        scoreODiv.classList.remove("active-player");

        if (this.currentPlayer === "X") {
            scoreXDiv.classList.add("active-player");
        } else {
            scoreODiv.classList.add("active-player");
        }
    }
}

const game = new Game();
game.startGame();