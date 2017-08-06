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
 var nums=[1,2,3,4,5,6,7,8,9]
// nums.forEach(function(num){
//     if(num%3==0){
//         console.log(num);
//     }
// })
nums.forEach(function(num, index){
    if(num%3==0){
        console.log(index+":"+num);
    }
})
nums.forEach(printNum);
function printNum(num,index){
    if(num%3==0){
        console.log(index+":"+num);
    }
}

function printReverse(nums){
    for(var i=nums.length-1; i>=0; i--){
        console.log(nums[i]);
    }
}

function isUniform(nums){
    var prev=nums[0];
    for(var i=0; i<nums.length; i++){
        if(prev!==nums[i]) return false;
    }
    return true;
}
function sumArray(nums){
    var sum=0;
    nums.forEach(function(num){
        sum+=num;
    })
    return sum;
}

Array.prototype.myForEach= function(func){
    for(var i=0; i<this.length; i++){
        func(this[i]);
    }
}
var friends=["charlie", "dave", "maddy", "caitlin"];
friends.myForEach(alert);


var person={
    name:"Cindy",
    age:32,
    city: "Missoula",
    getAge: function(){
        return this.age;
    }
};
var posts=[
    {
        title:"Cats are mediocre",
        author:"Colt",
        comments:["Awesome post" , "terrible post"]
    },
    
    {
        title:"Cats are actually awesome",
        author:"Cat Luvr",
        comments:[]
    }
]
var movies=[
    {
        title:"In Bruges",
        isVisited: true,
        star: 5
    },
    {
        title:"In Bruges",
        isVisited: true,
        star: 5
    },
    {
        title:"In Bruges",
        isVisited: true,
        star: 5
    }
]
movies.forEach(function(movie){
    var res="You have";
    if(movie.isVisited){
        
    }else{
        
    }
    console.log("");
})