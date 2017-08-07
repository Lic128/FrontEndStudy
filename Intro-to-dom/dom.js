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

document.getElementById();
// give us all the match
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();

var tag=document.querySelector("#highlight");
var tag=document.querySelector(".classname");
var tag=document.querySelector("body");
//just give us the first match


// return all the match.
var tag=document.querySelectorAll("h1");
tag.style.color="blue";
tag.style.border="10px solid red";
tag.style.fontSize="70px";
tag.style.background="yellow";
tag.style.marginTop="200px";

// rather than directly mainpulating style with JS, we can define a CSS class and then toggle it on or off with JS

/**.some-class{
color: blue;
border: 10px solid red;
}**/


var tag= document.getElementById("highlight");
tag.classList.add("some-class");
tag.clasList.remove("another-class");
tag.classList.toggle("another-class");


var tag=document.querySelector("p");
tag.textContent // Retrieve the textContent;
tag.textContent=" blah blah blah";// alter the textContent;


 var ul= document.querySelector("ul");
ul.textContent;
p.textContent="";

// innerHTML similar to the textContent, except it returns a string of all the HTML contained in a given element.
//<p>This is an <strong> awesome</string> paragraph
var tag=document.querySelector("p");
tag.innerHTML
// This is an <strong> awesome</strong> paragraph"

document.body.textContent="<h1>Goodbye!</h1>";
// won't work, was treated as context;
document.body.innerHTML="<h1>GoodBye!</h1>"
//just would work here

var link= docunment.querySelector("a");
link.getAttribute("href"); // www.google.com
link.setAttribute("href", "www.dogs.com");


var img= document.querySelector("img");
img.setAttribute("src", "corgi.png");


var button= document.querySelector("button");
button.addEventListener("click", function(){
    console.log("SomeOne Clicked The Button!");
});


//element.addEventListener(type, functionToCall);
//

for(var i=0; i<lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color="pink";
    })
}
