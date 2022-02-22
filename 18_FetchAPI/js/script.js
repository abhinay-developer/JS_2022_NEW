console.log("FETCH API")

let url="https://jsonplaceholder.typicode.com/users";
let api=fetch(url);
// console.log(api);

api.then((data)=>{
    data.json().then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
})