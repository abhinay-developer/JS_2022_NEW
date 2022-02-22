console.log("Rest Paramters")



let myArray=(name,...array)=>console.log(`${array} ${name}`);

myArray("Raja",10,20,30,50,89,45);