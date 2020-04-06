addEventListener('load',f1);

function f1(){
    document.getElementById('usr1').addEventListener('blur',()=> {
        let longnombre=document.getElementById("usr1").value;
        if(longnombre.length<=0){

       
        document.getElementById('usr1').style.border = "2px solid red";
        }
        else{

     
        document.getElementById('usr1').style.border = "2px solid green";
        }


    })

    document.getElementById('pw1').addEventListener('blur',()=> {
        let longnombre=document.getElementById("pw1").value;
        if(longnombre.length<=0){

       
        document.getElementById('pw1').style.border = "2px solid red";
        }
        else{

     
        document.getElementById('pw1').style.border = "2px solid green";
        }


    })
}