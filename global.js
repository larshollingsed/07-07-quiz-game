var correct = 0
var wrong = 0
function winOrLose (answer, guess) {
    if (answer == guess.toLowerCase()) {
      correct++
      alert("Correct!")
    } else {
      wrong++
      alert("Incorrect :( ")
    }
}

var answer = "b"
var guess = "z"
while (guess.toLowerCase() !== "a" && guess.toLowerCase() !== "b" && guess.toLowerCase() !== "c" && guess.toLowerCase() !== "d") {
    var guess = prompt("This ballet, composed by Igor Stravinsky and choreographed by Vaslav Nijinsky, almost caused a riot at its 1913 premiere.\nA - Coppelia\nB - The Rite of Spring\nC - Les Sylphides\nD - The Nutcracker", "Enter A, B, C, or D")
}

winOrLose (answer, guess)

var answer = "c"
var guess = "z"
while (guess.toLowerCase() !== "a" && guess.toLowerCase() !== "b" && guess.toLowerCase() !== "c" && guess.toLowerCase() !== "d") {
    var guess = prompt("Twyla Tharp won a Tony for Best Choroeography in 2003 for this Broadway show, based on the music of Billy Joel.\nA - Kinky Boots\nB - Spiderman: Out of Darkness\nC - Movin' Out\nD - Hairspray", "Enter A, B, C, or D")
}

winOrLose(answer, guess)

var answer = "a"
var guess = "z"
while (guess.toLowerCase() !== "a" && guess.toLowerCase() !== "b" && guess.toLowerCase() !== "c" && guess.toLowerCase() !== "d") {
    var guess = prompt("An average cat has this many tails.\nA - 1\nB - 2\nC - 3\nD - 4", "Enter A, B, C, or D")
}

winOrLose(answer, guess)

var answer = "d"
var guess = "z"
while (guess.toLowerCase() !== "a" && guess.toLowerCase() !== "b" && guess.toLowerCase() !== "c" && guess.toLowerCase() !== "d") {
    var guess = prompt("This is not gluten free.\nA - a Nectarine\nB - a Brussel Sprout\nC - a Chicken Egg\nD - a Beer", "Enter A, B, C, or D")
}

winOrLose(answer, guess)

var rounds = wrong + correct
alert ("Out of " + rounds + " questions, you answered " + correct + " correctly\n" + (correct / rounds * 100).toFixed(0) + "% correct")