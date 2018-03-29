$(document).ready(function () {
    var results = [
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
        "correct_answer": "Apple",
        "incorrect_answers": [
        "Microsoft",
        "Atari",
        "Commodore"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In any programming language, what is the most common way to iterate through an array?",
        "correct_answer": "&#039;For&#039; loops",
        "incorrect_answers": [
        "&#039;If&#039; Statements",
        "&#039;Do-while&#039; loops",
        "&#039;While&#039; loops"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What does CPU stand for?",
        "correct_answer": "Central Processing Unit",
        "incorrect_answers": [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "When Gmail first launched, how much storage did it provide for your email?",
        "correct_answer": "1GB",
        "incorrect_answers": [
        "512MB",
        "5GB",
        "Unlimited"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What amount of bits commonly equals one byte?",
        "correct_answer": "8",
        "incorrect_answers": [
        "1",
        "2",
        "64"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
        "correct_answer": "Binary",
        "incorrect_answers": [
        "JavaScript",
        "C++",
        "Python"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the domain name for the country Tuvalu?",
        "correct_answer": ".tv",
        "incorrect_answers": [
        ".tu",
        ".tt",
        ".tl"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "On Twitter, what is the character limit for a Tweet?",
        "correct_answer": "140",
        "incorrect_answers": [
        "120",
        "160",
        "100"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
        "correct_answer": "Green",
        "incorrect_answers": [
        "Red",
        "Blue",
        "Yellow"
        ]
        },
        {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which programming language shares its name with an island in Indonesia?",
        "correct_answer": "Java",
        "incorrect_answers": [
        "Python",
        "C",
        "Jakarta"
        ]
        }
        ]
    
    // for (i = 0; i < results.length; i++) {}

    $(".label").hide();
    var correct = 0;
    var incorrect = 0;
    var nextQuestion = false;
    var number = 10;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }

    function decrement() {
        number--;
        $("#timer").html("<h3>Time left :  " + number + "</h3>");
        if (number === 0) {
          stop();
          $("#question").text("TIme is up! Correct answer  :  " + results[0].correct_answer);
        }
    }

    function stop() {
        clearInterval(intervalId);
      }

    $("#startGame").on("click", function () {
        $(".label").show();

        displayQuestion ();
        run ();
    });

    $(document).on("click", ".label", check);


    function displayQuestion () {
        $("#startGame").hide();
        $("#question").text(results[0].question);
        $("#opt1").text(results[0].correct_answer);
        $("#opt1").attr("value" , results[0].correct_answer);

        $("#opt2").text(results[0].incorrect_answers[0]);
        $("#opt3").text(results[0].incorrect_answers[1]);
        $("#opt4").text(results[0].incorrect_answers[2]);
    };
    
    function check () {
         if ($(this)[0].innerHTML == results[0].correct_answer) {
             $("#question").text("Correct!  :  " + results[0].correct_answer);
             $(".label").hide();
             correct ++;
             console.log(correct);
             nextQuestion = true;
             stop ();
         } else {
             $("#question").text("Incorrect!   :  " + results[0].correct_answer);
             $(".label").hide();
             incorrect ++;
             console.log(incorrect);
             nextQuestion = true;
             stop ();
         }
    }
});





