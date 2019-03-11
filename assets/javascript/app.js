// You'll create a trivia form with multiple choice or true/false options (your choice).
    //true or flase
    //build array of objects
    //each object will = a question
    //ex: {
            // question: "My name is Matt",
             // answer:true
        // }

// The player will have a limited amount of time to finish the quiz. 
// create start button
//start timer when clicked
//disappear when clicked
//display questions and answer options 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.


//variables=========================================
// $("#allquestions").hide()

// var answer1 = true
// var answer2 = false
// var answer3 = true

// var triviaQuestions = [
//     {
//         question: "MCS was formed in 1997",
//         answer: true 
//     },
//     {
//         question: "The lead singer of MCS is Ja Rule",
//         answer: false
//     },
//     {
//         question:"MCS started in Minneapolis, Minnesota",
//         answer: true
//     }
// ];

// $('#question1').text(triviaQuestions[0].question)
// $('#question2').text(triviaQuestions[1].question)
// $('#question3').text(triviaQuestions[2].question)

// var timeLeft = 5;













// //variables=========================================

// //functions=========================================

// function countDown() {
//     $("#allquestions").show()
    
//     timeLeft --;
//     console.log(timeLeft)
//     if (parseInt(timeLeft) === 0) {
//         timeLeft = 5;
//         stopCountdown()
//     }
// }

// var interval
 
// function stopCountdown() {
//     clearInterval(interval);
// }

// function startCountdown() {
//    interval = setInterval(countDown, 1000);

// }





// //functions=========================================

// //main logic========================================

// //  


// $("#start").on("click", function(){
//     startCountdown()
//   });







//main logic========================================
$('#allquestions').hide()

var triviaQuestions = [
    {
        question: "MCS was formed in 1997",
        answer: true 
    },
    {
        question: "The lead singer of MCS is Ja Rule",
        answer: false
    },
    {
        question:"MCS started in Minneapolis, Minnesota",
        answer: true
    }
];


$('#question1').text(triviaQuestions[0].question)
$('#question2').text(triviaQuestions[1].question)
$('#question3').text(triviaQuestions[2].question)

var started = false
var timeLeft = 5;
var score = 0
var interval
var answer1
var answer2
var answer3

function countDown() {
    if (parseInt(timeLeft) === 0) {
        $('#timer').text("0")
            console.log('0')
        checkScore()
        timeLeft = 5;
        stopCountdown()
        alert("Times Up!\n  Score: " + score + '/' + triviaQuestions.length)    
        score = 0
        started = false
        $('#allquestions').hide()
    }

    $('#timer').text(timeLeft)
    timeLeft--;
}

function checkScore() {
  if (answer1 === triviaQuestions[0].answer) {
    score++
  }
  if (answer2 === triviaQuestions[1].answer) {
    score++
  }
  if (answer3 === triviaQuestions[2].answer) {
    score++
  }
}        

function stopCountdown() {
    clearInterval(interval);
}

function startCountdown() {
   interval = setInterval(countDown, 1000);

}

$("#start").on("click", function(){
    if (!started) {
      started = true
      $('#allquestions').show()
      startCountdown()
    }
  });

$("#true1").on("click", function(){
    answer1 = true
  });

$("#false1").on("click", function(){
    answer1 = false
  });

$("#true2").on("click", function(){
    answer2 = true
  });

$("#false2").on("click", function(){
    answer2 = false
  });

$("#true3").on("click", function(){
    answer3 = true
  });

$("#false3").on("click", function(){
    answer3 = false
  });