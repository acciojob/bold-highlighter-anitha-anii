function highlight() {
    //Write your code here
	let p1 =document.querySelector('p');
    let a= p1.querySelector('a');
    let green =document.querySelector('#green');
    let strong= green.querySelectorAll('strong');
   
    a.addEventListener("mouseover",function(){
        strong.forEach(element => {
            element.style.color="green";
          });
    });
    
    
}
function return_normal() {
    //Write your code here
    let p1 =document.querySelector('p');
    let a= p1.querySelector('a');
    let green =document.querySelector('#green');
    let strong= green.querySelectorAll('strong');
   
    a.addEventListener("mouseout",function(){
           strong.forEach(element => {
            element.style.color="black";
          });
    });

    
}

