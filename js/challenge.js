 //document.addEventListener('DOMContentLoaded ', setInterval(timer, 1000))
 

 /* ------------------------------INTERVAL COUNTER ---------------------------------- */
let count = 0
const stopped = false
const counter= document.getElementById("counter")
function timer(){
        count++;
    counter.innerText = count 
}
let incrementing = setInterval(timer,1000);//increments by one second
 
/* --------------------------------- PAUSE/RESUME BUTTON ----------------------------- */
const pause = document.getElementById('pause')

function pauseResume(){
        if (pause.innerText === 'pause'){
           pause.innerText = 'resume';  
           clearInterval(incrementing)        
        }else {
            pause.innerText = 'pause'; 
            incrementing = setInterval(timer, 1000)  
        }
       
}   
pause.addEventListener('click', pauseResume)
  
 /*-------------------------------------------- MINUS BUTTON----------------------------------------*/ 
 const minus = document.getElementById('minus')
 function takeOne(){
        count-- ;
        counter.innerText = count 
     }
    minus.addEventListener('click', takeOne)

/*-------------------------------------------- PLUS BUTTON----------------------------------------*/ 

const plus = document.getElementById('plus')
 function addOne(){
        count++ ;
        counter.innerText = count 
     }
    plus.addEventListener('click', addOne)


  /*-------------------------------------------- HEART BUTTON----------------------------------------*/   
  const hearts = document.getElementById('heart')  // heart button
  const ul = document.querySelector('ul') // where like comments go Message:`{#} has been liked ${# }times`
  //let li = document.createElement('li')// creates li element
  let number = counter.innerText
  let likes = {}
   


   function likeIt(){ 
        
        if (Object.keys(likes).includes(counter.innerText)) {
            likes[counter.innerText] = likes[counter.innerText]+1
        }else {
            likes[counter.innerText] = 1
        }
        
        if(document.getElementById(counter.innerText)){
         document.getElementById(counter.innerText).innerText = (counter.innerText) + ' has been liked ' + (likes[counter.innerText]) + ' times '
        }else {
          li = document.createElement('li')  
          li.id = counter.innerText  
          li.innerText =(counter.innerText) + ' has been liked ' + (likes[counter.innerText]) + ' times '
          ul.append(li)  
        }
        
      
   }
hearts.addEventListener('click', likeIt)


/*------------------------------------------- Comments -------------------------------------------*/
const form = document.getElementById('comment-form')
const textField = document.querySelector('#comment-input')
const div = document.getElementById('list')   // div that holds list
const divUl = document.createElement('ul')   //creates ul
let divLi = document.createElement('li')   //creates li


div.appendChild(divUl)     // append ul to div
//const comments = []
 


function addComment () {
    divLi = document.createElement('li') 
    divLi.innerText = ''+ (textField.value) + '' 
    divUl.appendChild(divLi)   // adds li to ul
    
}
// }

form.addEventListener('submit' ,(e)=>{  
    e.preventDefault() 
    addComment(textField.value)
 })                   
                      
   

