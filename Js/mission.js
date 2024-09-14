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

</div>
<div class="box2">
  <div class="card3">
    <img src=""class="picture1">
    <h5>TEXAS</h5>
    <h1>TESTING FACILITY</h1>
    <p>
     SpaceX tests its engines, vehicle structures, and systems at a 4,000-acre state-of-the-art rocket development facility in McGregor, Texas. Outfitted with 16 specialized test stands, the facility validates for flight every Merlin engine that powers the Falcon 9 and Falcon Heavy rockets, and every Draco thruster that controls the Dragon spacecraft.
      </p>
</div>

<div class="card4">
  <img src=""class="picture1">
  <h5>TEXAS</h5>
  <h1>TESTING FACILITY</h1>
  <p>
   SpaceX tests its engines, vehicle structures, and systems at a 4,000-acre state-of-the-art rocket development facility in McGregor, Texas. Outfitted with 16 specialized test stands, the facility validates for flight every Merlin engine that powers the Falcon 9 and Falcon Heavy rockets, and every Draco thruster that controls the Dragon spacecraft.
    </p>
</div>
</div>
<div class="box3">

<div class="card5">
  <img src=""class="picture1">
  <h5>TEXAS</h5>
  <h1>TESTING FACILITY</h1>
  <p>
   SpaceX tests its engines, vehicle structures, and systems at a 4,000-acre state-of-the-art rocket development facility in McGregor, Texas. Outfitted with 16 specialized test stands, the facility validates for flight every Merlin engine that powers the Falcon 9 and Falcon Heavy rockets, and every Draco thruster that controls the Dragon spacecraft.
    </p>
</div>

<div class="card6">
  <img src=""class="picture1">
  <h5>TEXAS</h5>
  <h1>TESTING FACILITY</h1>
  <p>
   SpaceX tests its engines, vehicle structures, and systems at a 4,000-acre state-of-the-art rocket development facility in McGregor, Texas. Outfitted with 16 specialized test stands, the facility validates for flight every Merlin engine that powers the Falcon 9 and Falcon Heavy rockets, and every Draco thruster that controls the Dragon spacecraft.
    </p>
    </div>
</div>
</div>