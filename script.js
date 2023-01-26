let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')
let values=['😆','😍','😐','😘','😊','😗',"😑"]
function getRandomValue()
{
    return values[parseInt(Math.random()*7)]
}


let animationid;
function updateAnimation(newspeed){
    if(animationid)clearInterval(animationid)
    animationid=setInterval(() =>{
        value1.innerText=getRandomValue()
        value2.innerText=getRandomValue()
        value3.innerText=getRandomValue()
    
    },1000/newspeed)

}

ins.onchange()=function(event)
{
console.log(event.target.value)
document.documentElement.style.setProperty('--speed',event.target.value)
}
updateAnimation(event.target.value)