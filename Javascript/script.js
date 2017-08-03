console.log();

//function
function calculate(num1, num2, operator){
    if(operator=="-") return num1-num2;
    if(operator=="+") return num1+num2;
    if(operator=='*') return num1*num2;
    if(operator=='/') return num1/num2;
}
calculate(1, 2, "*");

//
function factorial(num){
    if(num==0) return 1;
    return num*factorial(num-1);
}

function replace(str){
    var res=[];
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)!='-'){
            res[i]=str.charAt(i);
        }else{
            res[i]='_';
        }
    }
    return res.join("");
}

//setInterval(anotherFunc, interval)

setInterval(sing , 1000);
clearInterval();


setInterval(function(){
    consloe.log("This is an anonymous function!");
    console.log("This is awesome!")
}, 1000);

