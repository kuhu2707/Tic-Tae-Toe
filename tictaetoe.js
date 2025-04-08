let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        console.log("box was clicked");
        if (turnO){
            box.innerText = "O";
            box.classList.add("o-color")
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.add("x-color")
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x-color" , "o-color")
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledBoxes();
}

const checkWinner =()=>{
    for(pattern of winPatterns){
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;

        if(post1val != "" &&  post2val!="" && post3val!=""){
            if(post1val === post2val && post2val === post3val){
              console.log("winner" , post1val)

              showWinner(post1val);
            }
        }
    }
}

newbtn.addEventListener("click" , resetGame);
reset.addEventListener("click",resetGame);

