const button_called= this.document.getElementById('bt1');
button_called.addEventListener('click',change);
console.log(button_called);

function change(){
    let r=random(255);
    let g=random(255);
    let b=random(255); 

    console.log(r);
    console.log(g);
    console.log(b);

    let color1= `rgb(${r},${g},${b})`;
    console.log(color1);
    document.body.style.backgroundColor=color1;
}
function random(number){
    return Math.floor(Math.random()*(number+1));
}




