console.log("JS Array Methods");


let salaries=[10000.0,25000.0,45000.0,98000.0];

/**
 *  In Array Index starts from 0 length starts from 1
 *   1. Traditional For 
 *   2. For of
 *   3. For in
 *   4. For Each
 *   5. Filter/Map
 */
//  console.log("traditional for")
  for(let i=0;i<=salaries.length;i++){
    //   console.log(salaries[i]);    //salaries[0]    salaries[1] salaries[2]  salaries[3]
   }

//    console.log("for -of")
  for(let salary of salaries){
    //   console.log(salary);
  } 
//   console.log("for -in")
  for(let salary in salaries){
    //   console.log(salaries[salary]);
  }

// console.log("for -each")
  salaries.forEach(salary => {
    //    console.log(salary)
  });


  let mobiles=["I Phone","OnePlus","Samsung","Vivo","Oppo"];

  // add Mobile to an array in the last
  mobiles.push("Redmi");

  //Add Mobile to an array first
  mobiles.unshift("Nokia");

 //Remove Mobile to an Array First
  mobiles.shift();

  //Remove Last Mobile to an array
  mobiles.pop();


  mobiles.forEach((mobile)=>{
    //   console.log(mobile);
  })


  let numbers=[1,2,3,4,5,6,7,8,9,10];

               //1 12 3 14 5 16 7 18 9 20 
        
         for(let i=0;i<numbers.length;i++){
             //        condition  if  : else 
            let result=(i%2==1)?numbers[i]+10:numbers[i]; //ternery operator 
            // console.log(result);
            //  if(i%2==1){
            //      console.log(numbers[i]+10);
            //  }else{
            //      console.log(numbers[i])
            //  }

         }      

        //  let value=(condition)?"Value1":"value2"
            //12 14 16 18 20






  for(let i=0;i<numbers.length;i++){
      if(i%2==0){
        //   console.log(numbers[i])
      }
  }

   //Filter in arrays
    let evenNumbers=numbers.filter((element)=>element%2==0);
    // console.log(evenNumbers);

    let oddNumbers=numbers.filter((element)=>element%2!=0);
    // console.log(oddNumbers)

  let networks=["JIO ","AIRTEL ","VI ","BSNL"];

  //map
    networks.map((network)=>console.log(network.toLocaleLowerCase()+"ABC"))
   
     networks.forEach((network)=>{
      //  console.log(network.toLowerCase());
     })
            
    //splice removes the selected Items
    let skills=["JS","CSS","NODE","REACT"];


    let spliceArray=skills.splice(0,3);
    // console.log(spliceArray);

    //The slice() method returns the selected element(s) in an array,
    let colors=["RED","GREEN","ORANGE","BLUE"];
    let sliceArray=colors.slice(0,2);
    // console.log(sliceArray)

//sort
    let ages=[23,24,35,67,89,100,90];
     let sortAges=ages.sort((a,b)=>a-b); //acending 
     let sortAges=ages.sort((a,b)=>b-a);//decending value
    //  console.log(sortAges)

    