console.log("JS Arrow Functions")

//Traditional Function
function  displayName(){
    let myName="Raja";
    console.log("My Name is:"+myName);
}
displayName();

let displayAge=function(){
   let myAge=18;
   console.log("My Age:"+myAge);
}

let displayFirstName=()=>console.log("Sai");
displayFirstName();


// one parameter
 function displayQualification(quali){
    console.log("The Qualification:"+quali);
 }
 displayQualification("BTECH");


 let displayCompanyName=function(companyName){
     console.log("Company Name:"+companyName);
 }
 displayCompanyName("Key Loop");


 let displayLocation=((myLocation)=>console.log("My Location::"+myLocation));
 displayLocation("HYD");

 let  displayCity=city=>console.log("City :"+city);
 displayCity("Karimnagar");

 // two paramter
 function  add(num1,num2){
     let result=num1+num2;
     console.log("Result:"+result)
 }
 add(10,20);
 let mul=function(num1,num2){
     let result=num1*num2;
     console.log("Result:"+result);
 }
 mul(5,10);

let sub=((num1,num2)=>console.log("sub:"+(num1-num2)))
sub(50,10);