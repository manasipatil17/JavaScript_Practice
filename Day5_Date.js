//how to create date object
let date =new Date();
console.log(date);

let previous= new Date('2025-09-18');
console.log(previous);


 let next = new Date(2025,8,26);
 console.log(next);

 let milis=Date.now();
 console.log(milis);

 let miliDate=new Date(1758256522034) //1jan 1970
  console.log(miliDate);

  console.log('diff');

  console.log((Date.now() - 1758256522034) / 1000);

 console.log("=============== How to get Specific part =====================");

 let now = new Date();
 console.log("Current Time: " + now.toLocaleTimeString());

 console.log("Year :" + now.getFullYear());
 console.log("Month :" + now.getMonth());
 console.log("Date :" + now.getDate());

 console.log("HH :" + now.getHours());
 console.log("MM :" + now.getMinutes());
 console.log("SS :" + now.getSeconds());
 console.log("SSS :" + now.getMilliseconds());

 console.log("Day :" + now.getDay());

 console.log("====================================");

 console.log("================ How to set Specific part ====================");

 let current = new Date();
 current.toLocaleTimeString();

//current.setFullYear(2027);

 console.log("After 2 year :" + current.getFullYear());

 console.log();
 console.log("====================================");

 console.log("================= Date Formatting ===================");
 console.log(" Current :" + current);
 console.log(" Date String :" + current.toDateString());
 console.log(" ISO String :" + current.toISOString());
 console.log(" Locale String :" + current.toLocaleString());
 console.log(" Time String :" + current.toTimeString());

 console.log("====================================");

 console.log("================== Custome Formatting ==================");
 function formatDate(date) {
   // YYYY-MM-DD HH:MM:SS
   return (
    date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds()
   );
 }
 let formatedDate = formatDate(current);
 console.log(formatedDate);

 console.log("====================================");
 
