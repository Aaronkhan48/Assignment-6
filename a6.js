const peter = {
    firstName: 'Peter',
    lastName: 'Smith',
    birthYear: 1990,
    jobTitle: 'student',
    score: [100,99,90,96],

    calAvgScore: function(){
        this.avgScore = (this.score[0] + this.score[1] + this.score[2] + this.score[3])/ this.score.length;
        return this.avgScore;
    },

    calAge: function(){
        var now = new Date();
        var curryear = now.getFullYear();
        this.age = curryear - this.birthYear;
        return this.age;
    },

    highscore: function(){
        this.hs = Math.max.apply(null,this.score);
        return this.hs;
    },

    showSummary: function(){
        return this.firstName + " " + this.lastName + " has completed " + this.score.length + " tasks, and " 
        + this.firstName + "'s average score is " + this.calAvgScore() + ", " + this.firstName + "'s highest score is " + this.highscore() ;
    }
}

console.log("Q1) " + peter.showSummary());



function convertCel(cel){
    while(cel < -88 || cel > 55){
        alert("Enter a number between -88 and 55");
        cel = Number(prompt("Enter a temperature number: "));
    }

    far = (cel * (9/5)) +32;
    console.log(`${cel} °C is ${far}°F`);
    return cel;
}

convertCel(Number(prompt("Enter a temperature number: ")));

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName('close')[0];

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

var modal = document.getElementById("myModal2");

var btn = document.getElementById("myBtn2");

var span = document.getElementsByClassName('close')[1];

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var modal = document.getElementById("myModal3");

  var btn = document.getElementById("myBtn3");
  
  var span = document.getElementsByClassName('close')[2];
  
  btn.onclick = function(){
      modal.style.display = "block";
  }
  
  span.onclick = function() {
      modal.style.display = "none";
    }
  
  window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }