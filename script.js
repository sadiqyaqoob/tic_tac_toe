let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turn0 = true;
let winpatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turn0) {
            box.innerText = "o";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);