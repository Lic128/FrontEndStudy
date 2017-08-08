var numColors=6;
var colors=generateRandomColors(numColors);
var squares= document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var pickedColor=pickColor();
var messageDispaly= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
colorDisplay.textContent=pickedColor;
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
refreshSquares();
resetButton.addEventListener("click", function(){
    colors=generateRandomColors(numColors);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    refreshSquares();
    h1.style.backgroundColor="steelblue";
    messageDispaly.textContent="";
})
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numColors=3;
    colors=generateRandomColors(numColors);
    pickedColor=pickColor();
    colorDisplay=pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numColors=6;
    colors=generateRandomColors(numColors);
    pickedColor=pickColor();
    colorDisplay=pickedColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
        
    }
});
function refreshSquares(){
    for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor=this.style.backgroundColor;
        console.log(pickedColor);
        console.log(clickedColor);
        if(clickedColor==pickedColor){
            messageDispaly.textContent="Correct!";
            resetButton.textContent="Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }else{
            this.style.backgroundColor="#232323";
            messageDispaly.textContent="Try Again";
        }
    });
}
}

function changeColors(color){
    for(var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var index=Math.floor(Math.random()*colors.length);
    return colors[index];
}
function generateRandomColors(num){
    var arr=[];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var color="rgb(";
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return color+r+", "+g+", "+b+")";
    
}