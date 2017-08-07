var p1button= document.querySelector("#p1");
var p2button= document.querySelector("#p2");
var resetButton=document.querySelector("#Reset");
var score1=document.querySelector("#score1");
var score2=document.querySelector("#score2");
var numInput=document.querySelector("input");
var target_display=document.querySelector("#info-display");
var p1score=0;
var p2score=0;
var target=5;
var gameOver=false;


p1button.addEventListener("click", function(){
    if(!gameOver){
        score1.textContent=++p1score;
        if(p1score>=target){
            score1.classList.add("reached");
            gameOver=true;
        }
    }
});
p2button.addEventListener("click", function(){
    if(!gameOver){
        score2.textContent=++p2score;
        if(p2score>=target){
            score2.classList.add("reached");
            gameOver=true;
        }
    }
});
resetButton.addEventListener("click", function(){
    p1score=0;
    p2score=0;
    gameOver=false;
    score1.textContent=0;
    score2.textContent=0;
    score1.classList.remove("reached");
    score2.classList.remove("reached");
});

numInput.addEventListener("change", function(){
    target=numInput.value;
    target_display.textContent=target;
})
//8584054968