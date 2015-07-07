var correct = 0;

function winOrLose (answer, guess) {
    if (answer == guess) {
      correct++
      alert("Correct!")
    } else {
      alert("Incorrect :( ")
    }
};

var question1 = {question: "This ballet, composed by Igor Stravinsky and choreographed by Vaslav Nijinsky, almost caused a riot at its 1913 premiere.\nA - Coppelia\nB - The Rite of Spring\nC - Les Sylphides\nD - The Nutcracker", answer: "b"};

var question2 = {question: "Twyla Tharp won a Tony for Best Choroeography in 2003 for this Broadway show, based on the music of Billy Joel.\nA - Kinky Boots\nB - Spiderman: Turn Off the Dark\nC - Movin' Out\nD - Hairspray", answer: "c"};

var question3 = {question: "An average cat has this many tails.\nA - 1\nB - 2\nC - 3\nD - 4", answer: "a" };

var question4 = {question: "This is not gluten free.\nA - a Nectarine\nB - a Brussel Sprout\nC - a Chicken Egg\nD - a Beer", answer: "d" };

var questions = [question1, question2, question3, question4];

for (index = 0, guess = "z"; index < questions.length; index++, guess = "z") {
    while (guess !== "a" && guess !== "b" && guess !== "c" && guess !== "d") {
      var guess = prompt(questions[index].question, "Enter A, B, C, or D")
      guess = guess.toLowerCase()
    }
    winOrLose(questions[index].answer, guess)
}

var rounds = wrong + correct
alert ("Out of " + rounds + " questions, you answered " + correct + " correctly\n" + (correct / questions.length * 100).toFixed(0) + "% correct");