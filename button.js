let btn=document.getElementById('btn');

btn.addEventListener('click',btnhandler);


function btnhandler(){
   
    let h1=document.createElement('h1');
   let text=document.createTextNode('you clicked');
   var print=document.getElementById('print');
   h1.appendChild(text);
   print.appendChild(h1);
   


};