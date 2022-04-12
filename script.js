document.body.innerHTML=` <div class="container">
<div class="head"> API INFO</div>
<h2>-THE NATIONALIZE API-</h2>
<input type="text" name="inp" id="inp" required !important" placeholder="Enter the Details">
<div class="button"> 
 <button class="btn btn-primary search" onclick= "output()">Search</button>
<button class="btn btn-primary   clear"  >Erase</button>
</div>
<div class="output">
</div>
</div>
`

async function nationalize() {
 try{
    var country=await fetch("https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane");
    var nationalize1= await country.json();
    console.log(nationalize1.name);
    for (var i=0;i<2;i++) {

   //  console.log(nationalize1.country[i].country_id,nationalize1.country[i].probability);
      console.log(`country_id:${nationalize1[i].country_id} Probability:${nationalize1[i].probability}`);
        
    }
   
 
} catch(error){
   console.log(error);
}
   
}

nationalize();


// async function get(){
//     document.querySelector(".output").getElementsByClassName.display="block"

//      try{
//     var Enpvalue= document.querySelector("#inp").value;
//     console.log(Enpvalue);
//     var data = await fetch(`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=${Enpvalue}`,
//     { method:"GET"}
//     )
//     var getval = await data.json();
//     return getval

//      }
//      catch(error){
//          alert("something Wrong")

//      }

// }
 
// async function output(){

//     try{
//       const data = await get()
//       console.log(data)
//       let nodata;
//       if(data.country ==[]){
//           return nodata
//     }
//       document.querySelector(".output").innerHTML=`
//       <div class="blue">
//       <p>Name: ${data.name}</p>
//       <p>Country ID-1: ${data.country[0].country_id} </p>
//       <p>Probability : ${data.country[0].probability}</p>
//       <p>Country ID-2: ${data.country[1].country_id}</p> 
//       <p> Probability : ${data.country[1].probability}</p>
// </div>
      
// //       `
   document.querySelector(".output").style.display="block"


   var falsy= document.querySelector(".output").innerHTML=`<h3> Data Not Found!!!!</h3>`
   document.querySelector(".output").style.display="block"




    

var clear =document.querySelector(".clear").addEventListener("click",function(){
    location.reload()
})
  
