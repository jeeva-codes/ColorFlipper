const btn=document.getElementById('btn')
const bgcolor=document.getElementById('dis-container')
const colcode=document.getElementById('code')
const arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

btn.addEventListener('click',changebg)

 function changebg() {
    let arrcolor = '#'
    for(let i=1;i<=6;i++){
        arrcolor += rand()
    }
  bgcolor.style.backgroundColor=arrcolor
  colcode.innerHTML=arrcolor    
 }

function rand(){
    let randindex = Math.floor(Math.random()*16)
    return arr[randindex]
 }
 

 
 
 