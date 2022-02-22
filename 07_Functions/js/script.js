console.log(" JS Functions")

// O-paramter  Function
function displayName(){
    console.log("0-Paramter Function");
}
 displayName();



//1 -Paramter Function
function  displayOneName(myName){
console.log("1-Paramter Function");
console.log("My Name:"+myName);
}

displayOneName("abhinay");


function displayTwoNames(firstName,lastName){
    console.log("FirstName:"+firstName+"Last Name:"+lastName);
}
displayTwoNames("Navya","Jindam");


function add(num1,num2){
    var result=num1+num2;
    console.log(result);
}
function mul(num1,num2){
    var result=num1*num2;
    console.log(result);
}
function div(num1,num2){
    var result=num1/num2;
    console.log(result);
}
function sub(num1,num2){
    var result=num1-num2;
    console.log(result);
}
var option=Number(prompt("Enter the 1.Add 2.Mul 3.Div 4. Sub"))

var num1=Number(prompt("Enter num1 value:"));

var num2=Number(prompt("Enter num2 value"));


switch(option){
    case 1:
        add(num1,num2);
     break;
     case 2:
      mul(num1,num2);
      break;
     case 3: 
       div(num1,num2);
       break;
       case 4:
       sub(num1,num2);
       break;
      default:
          console.log("Please Enter Correct Option");
       break;
}