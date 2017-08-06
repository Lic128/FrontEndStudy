var h1= document.querySelector("h1");
h1.style.color="pink";

var body=document.querySelector("body");
var isBlue=false;
var myVar= setInterval(function(){myTimer()}, 1000);
function myTimer(){
    var d=new Date();
    var t= d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
}
function myStopFunction(){
    clearInterval(myVar);
}