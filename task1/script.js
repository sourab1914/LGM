
const getinput=document.getElementById('input1');
function insert(){
    
    let local=localStorage.getItem("todo");
     if (local==null){
        arr=[];
     }
     else{
        arr=JSON.parse(local);
     }
    
     if (getinput.value.trim()!=0)
          {
            arr.push(getinput.value);}
    
     localStorage.setItem("todo",JSON.stringify(arr));
     document.getElementById('input1').value="";
     show();
     
}

function show(){
    let local=localStorage.getItem("todo");
    
    const msg="No task is pending";
   
    if (local==null || local=="[]"){
     
      document.getElementById("table").innerText=msg;
      document.getElementById("table").style="font-size:22px";
      // alert(msg);
    }
    else{
      arr=JSON.parse(local);
       let html="";
  
       arr.forEach((item,index) =>{
                html+=`<tr>
                        <td>${index+1}</td>
                        <td>${item}</td>
                        <td><button id="delebtn" onclick=deletetask(${index}) ><img src="https://tse4.mm.bing.net/th?id=OIP.Q9t4awyuirh3UwXfTFzGSgHaHa&pid=Api&P=0" alt="Delete" style="width: 19px;"></button></td>
                        <td><button id="editbtn" onclick=edittask(${index}) ><img src="https://tse4.mm.bing.net/th?id=OIP.l0YEXsW-FpQf7VvULFkrWAAAAA&pid=Api&P=0" alt="Edit" style="width: 19px;"</button></td>
                        </tr>`;
       });

       let table=document.getElementById("table");
       table.innerHTML=html; 
    }
    
}

function deletetask(index){
   let local=localStorage.getItem("todo");
   arr=JSON.parse(local);
   arr.splice(index,1);
   console.log(arr.length);
   
   localStorage.setItem("todo",JSON.stringify(arr));
   show();
}

function edittask(index){
      let local=localStorage.getItem("todo");
      arr=JSON.parse(local);
     let addtask=document.getElementById("addbtn");
     let savetask=document.getElementById("edit");
     document.getElementById("saveindex").value=index;
      
     savetask.style="display:block;";
     addtask.style="display:None;";
     
     getinput.value=arr[index];
}

let savetask=document.getElementById("edit");
savetask.addEventListener("click",()=>{
       let input=getinput.value;
       let local=localStorage.getItem("todo");
       arr=JSON.parse(local);
       let idx=document.getElementById("saveindex").value;
       arr[idx]=input;
       localStorage.setItem("todo",JSON.stringify(arr));
       let addtask=document.getElementById("addbtn");
       let savetask=document.getElementById("edit");
       addtask.style="display:block;";
     savetask.style="display:none;";
     show();
})


