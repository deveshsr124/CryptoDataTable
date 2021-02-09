const nameData={
    name:'btcinr'
};

window.addEventListener("load",async function getdata(){
   try{ const api_url=`/data`;
   const fetch_response= await fetch(api_url,{
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        nameData:nameData
       })
   });
   const data= await fetch_response.json();
   console.log(data);
}
catch (err){
    console.log(err);
}
    
});




