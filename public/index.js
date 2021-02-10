const nameId=document.querySelector('.name');
var table=document.getElementById('mytable');

const lastId=document.getElementById('last');


window.addEventListener("load",function getdata(){
    
    const proxy=`https://cors-anywhere.herokuapp.com/`;
    const api=`${proxy}https://api.wazirx.com/api/v2/tickers`;
    fetch(api).then(res=>{
        return res.json();
    }).then(data=>{
        setData(data);
        console.log(data);
});

   
})


function setData(data){
    var arr=Object.values(data);
    console.log(arr);
    for(var i=1;i<11;i++){
    
       var row=`<tr>
                     <td>${i}</td>
                     <td>${arr[i].name}</td>
                    <td>&#8377;${arr[i].last}</td>
                    <td>&#8377;${arr[i].buy} / &#8377;${arr[i].sell}</td>
                  <td>${arr[i].volume}</td>
                   <td>${arr[i].base_unit}</td>
                </tr>`
                table.innerHTML+=row;
    }
}
