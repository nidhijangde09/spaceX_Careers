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
});
<p>
SpaceX believes a fully and rapidly reusable rocket is the pivotal<br> breakthrough needed to substantially reduce the cost of space<br> access. The majority of the launch cost comes from building the<br> rocket, which historically has flown only once.<br>
<br>
Compare that to a commercial airliner – each new plane costs about <br>the same as Falcon 9 but can fly multiple times per day and conduct<br> tens of thousands of flights over its lifetime. Following the <br>commercial model, a rapidly reusable space launch vehicle could <br>reduce the cost of traveling to space by a hundredfold.<br>
<br>

While most rockets are designed to burn up on reentry, SpaceX<br> rockets can not only withstand reentry but can also successfully land <br>back on Earth and refly again.</p>