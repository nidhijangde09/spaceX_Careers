const counts = document.querySelectorAll('.count')
const speed = 97
counts.forEach((counter) =>{
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed
        if(count < target){
            counter.innerText = Math.floor(inc + count)
            setTimeout( upDate, 1)
        }else{
            counter.innerText = target
        }
    }
    upData()
})

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

left.addEventListener('click',()=>{
    console.log('Hello');
})