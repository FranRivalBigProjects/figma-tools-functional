const res=document.getElementById("res");

function run(){
 let s=+styles.value,c=+components.value;
 if(!s||!c){res.innerText="Enter values";return;}
 let score=s+c;
 res.innerText=score>100?"Complex system":"Simple system";
}

