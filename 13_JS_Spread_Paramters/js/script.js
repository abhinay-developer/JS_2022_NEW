console.log("Spread Parameters")


function diplayArray(...num1){
    console.log(num1);//[10,20,30,40,50,60]
}

diplayArray(10,20,30,40,50,60);


function diplayAge(age,...ages){
    console.log(`${age} ${ages}`);
}

diplayAge(20,23,45,67,89,89);   //  ...VaraibleName(spread)
//  20 ,[23,45,67,89,89]


let firstArray=[10,29,49,90,100];
let secoundArray=[10,89,100];

let fullArray=[...firstArray,...secoundArray]
console.log(fullArray)