const res=document.getElementById("res");

function run(){
 let c=+components.value,i=+instances.value;
 if(!c||!i){res.innerText="Enter values";return;}
 let ratio=i/c;
 res.innerText=ratio>5?"Efficient reuse":"Low reuse";
}

