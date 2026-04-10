const res=document.getElementById("res");

function run(){
 let f=+frames.value,i=+images.value;
 if(!f||!i){res.innerText="Enter values";return;}
 let size=(f*0.5)+(i*1.2);
 res.innerText=`Estimated export size: ${size.toFixed(2)} MB`;
}

