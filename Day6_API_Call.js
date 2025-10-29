async function getData(){
    let rawDate= await fetch('https://dummyjson.com/todo/1');
    let response=await rawDate.json();
    console.log(response);
    
}

//getData();

console.log("---------------------try catch----------------------------------------");
async function getData2() {
    try{
    let rawData = await fetch('https://dummyjson.com/todo/1');
    let res = await rawData.json();
    console.log(res);
}
catch(error){
console.log("something went wrong...");

}
}

 //getData2();

console.log("-----------------------then and catch-------------------------------------");
function getData3(){
    fetch('https://dummyjson.com/todo/1')
    .then((rawData) => rawData.json())
    .then((data) => console.log(data))
    .catch((e) => console.log("something went wrong..."));

}

getData3(); 
