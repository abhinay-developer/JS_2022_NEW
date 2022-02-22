console.log("Default Parametrs")



function  diplayAge(age1=10){
    console.log(age1);
}

diplayAge(15);

                 //default Values
let displayAges=(age1=25,age2=45)=>console.log(`${age1} ${age2}`);

 displayAges(10,30); //current Values

//displayAges();