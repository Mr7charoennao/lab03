
var java=0;
function onClick(){
    console.log(java);
    if(java<10){
        java=java+1;
    }
}
function onClick1(){
    console.log(java);
    if(java>0){
        java=java-1;
    }
}





const button = document.querySelector('#A1');
button.addEventListener('click',onClick);

const button1 = document.querySelector('#A2');
button1.addEventListener('click',onClick1);