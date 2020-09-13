var body = document.querySelector('body');
// slider variables
var sliderSpeed = document.getElementById("slider-speed");
var sliderMood = document.getElementById("slider-mood");
// Flamingo variables
var flamingo = document.querySelector('.flamingo');
var leftLeg = document.querySelector('.left-leg');
var rightLeg = document.querySelector('.right-leg');
var flamingoBody = document.querySelector('.flamingo-body');
var flamingoHead = document.querySelector('.flamingo-head');
var flamingoNeck = document.querySelector('.head-neck');
var flamingoEyes = document.querySelector('.flamingo-eyes');
var hair = document.querySelector('.hair');
var wing = document.querySelector('.flamingo-wing');
var fingers = document.querySelector('.fingers');
// flamingo props variables
var pantsLeft = document.querySelector('.pants-left');
var pantsRight = document.querySelector('.pants-right');
var discoBall = document.querySelector('.disco-ball');
var discoFloor = document.querySelector('.disco-floor');
var hat = document.querySelector('.hat');
var glasses = document.querySelector('.glasses');
var headband = document.querySelector('.headband');
var weight = document.querySelector('.fitness-weight');
// checkbox variables
var checkCool = document.getElementById('cool');
var checkSnf = document.getElementById('snf');
var checkFitness = document.getElementById('fitness');

//SLIDERS LOGIC
// SPEED slider logic - takes slider values and changes the speed of legs animation
sliderSpeed.addEventListener("input", changeSpeedValue);
    function changeSpeedValue(){
         var sliderPercentage = sliderSpeed.value;
         var color = 'linear-gradient(90deg, pink '+ sliderPercentage + '%, white '+ sliderPercentage +'%)';

         sliderSpeed.style.background = color;
         console.log(sliderPercentage);
         var baseSpeed = 15000/sliderSpeed.value;
         var speed = (baseSpeed) + "ms";
         leftLeg.style.animationDuration = speed;
         rightLeg.style.animationDuration = speed;

         var delay = (baseSpeed+5) + "ms";
         leftLeg.style.animationDelay = delay;

    }

// MOOD slider logic - defines percetnage segments and flamingo changes
sliderMood.addEventListener("input", changeMoodValue);
    function changeMoodValue(){
         var sliderPercentage = sliderMood.value;
         var color = 'linear-gradient(90deg, green '+ sliderPercentage + '%, white '+ sliderPercentage +'%)';
         sliderMood.style.background = color;

          // flamingo becomes red bellow 10%
         if (sliderMood.value < 10) {
           flamingo.classList.add('angry');
         } else {
           flamingo.classList.remove('angry');
         }
          // flamingo gets angry eybrows bellow 30%
         if (sliderMood.value < 30) {
           flamingoEyes.classList.add('moody');
         } else {
           flamingoEyes.classList.remove('moody');
         }
          // flamingo taps with legs, over 50% it walks
         if (sliderMood.value < 50) {
           leftLeg.classList.add('moody');
           rightLeg.classList.add('moody');
         } else {
           leftLeg.classList.remove('moody');
           rightLeg.classList.remove('moody');
         }
          // whole flamingo starts to sway over 60%
         if (sliderMood.value > 60) {
           flamingo.classList.add('appear');
           flamingoHead.classList.add('appear');
           flamingoNeck.classList.add('appear');
           flamingoBody.classList.add('appear');
         } else {
           flamingo.classList.remove('appear');
           flamingoHead.classList.remove('appear');
           flamingoNeck.classList.remove('appear');
           flamingoBody.classList.remove('appear');
         }
           // flamingo starts to move its wing over 80%
         if (sliderMood.value > 80) {
           wing.classList.add('appear');
         } else {
           wing.classList.remove('appear');
         }
          // flamingo rave party - it changes colors at 98%
         if (sliderMood.value > 98) {
           flamingo.classList.add('hue');
         } else {
           flamingo.classList.remove('hue');
         }
    }

//CHECKBOX LOGIC
// COOL checkbox add glasses and a hat
checkCool.addEventListener("click", getCool);
    function getCool() {
        glasses.classList.toggle('appear');
        hat.classList.toggle('appear');
        // body.style.background = "#61515A";
    }

//SATURDAY NIGHT FEVER checkbox - flamingo gets hair and pants, discoball and dancefloor appear and backtground changes
checkSnf.addEventListener("click", getSnf);
    function getSnf() {
        hair.classList.toggle('appear');
        pantsLeft.classList.toggle('appear');
        pantsRight.classList.toggle('appear');
        discoBall.classList.toggle('appear');
        discoFloor.classList.toggle('appear');

        if(checkSnf.checked==true) {
          body.style.background = "#232028";
          console.log("true");
        } else {
          body.style.background = "#4A3B4B";
          console.log("false");
        }
    }

// HIT THE GYM checkbox - adds a headband, weights and sets the sliderMood to 80% so that wing moves
checkFitness.addEventListener("click", getFtn);
      function getFtn() {
          headband.classList.toggle('appear');
          weight.classList.toggle('appear');
          fingers.classList.toggle('appear');

        var sliderPercentage = sliderMood.value;
        sliderMood.value = "81";
        changeMoodValue();
    }

// add contributions> https://codepen.io/Lando/pen/dxufJ discoBall
