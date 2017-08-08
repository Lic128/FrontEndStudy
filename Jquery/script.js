$("li").each(function(li){
    this.css("color", "red");
})

var style={
    color:"red",
    background:"blue",
    margin:"0 auto",
    fontSize:"10px",
    border:"3px dashed purple",
    background:"rgba(89, 45, 20, 0.5)"
}
$("h1").css(style);

$("h1").attr();
$("h1").text();
$("h1").html();
// this is how jQuery select the element and mainpulate dom.


//.click();
//.keypress();
//.on();

$("#submit").click(function(){
    console.log("Another click");
})

$("button").click(function(){
    console.log();
});

$("button").click(function(){
    $(this).css("background", "pink");
})

$("input[type='text']").keypress(function(){
    alert("text input keypress!");
});

//Note taht keydown and keyboard provides a code indicating which key is pressed, while keypress indicates which character was entered, 

$("input").keypress(function(event){
    if(event.which==13){
        alert("you Hit Enter!");
    }
});

$("input").on("click", function(){
    
});
$("button").on("mouseenter", function(){
    
})

$("button").on("mouseleave", function(){
    
});

//In most cases, click() and on('click') will both get the job done, However, there is one key difference:
// click() only add listeners for existing elements
// on() will add listeners for all potential future elements

$('button').on("click", function(){
    $('div').fadeOut(1000, function(){
       //when the animation ends; 
        $(this).remove();
    });
})
$('button').on("click", function(){
    $('div').fadeIn(1000, function(){
       //when the animation ends; 
        $(this).remove();
    });
})

$('button').on("click", function(){
    $('div').slideUp();
})

