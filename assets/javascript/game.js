//      SETTING THE VARIABLES
var keepScore = 0;
var goalNumber = Math.floor(Math.random() * 30 + 20);
var playerWin = 0;
var playerLose = 0;
var isDone = false;
//      WRITING THE VARIABLES TO PAGE
$("#score").text(keepScore);
$("#goal").text(goalNumber);
$("#playerWin").text(playerWin);
$("#playerLose").text(playerLose);
//      CREATING CRYSTAL VALUES
var crystal1 = Math.floor(Math.random() * 10 + +1);
var crystal2 = Math.floor(Math.random() * 10 + +1);
var crystal3 = Math.floor(Math.random() * 10 + +1);
var crystal4 = Math.floor(Math.random() * 10 + +1);

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
//      ON CLICK ACTION
$("#crystal-1").on("click", function () {
    keepScore += crystal1;
    $("#score").text(keepScore);
    winCondition();
});
$("#crystal-2").on("click", function () {
    keepScore += crystal2;
    $("#score").text(keepScore);
    winCondition();
});
$("#crystal-3").on("click", function () {
    keepScore += crystal3;
    $("#score").text(keepScore);
    winCondition();
});
$("#crystal-4").on("click", function () {
    keepScore += crystal4;
    $("#score").text(keepScore);
    winCondition();
});
//      WIN CONDITION
function winCondition() {
    if (keepScore === goalNumber) {
        playerWin++;
        $("#playerWin").text(playerWin);
        alert("You win!");
        isDone = true;
        if (isDone) {
            init();
        }
    }
    else {
        if (keepScore > goalNumber) {
            playerLose++;
            $("#playerLose").text(playerLose);
            alert("You lose!!");
            isDone = true;
            if (isDone) {
                init();
            }
        }
    }
}
//      RESET
function init() {
    keepScore = 0;
    goalNumber = Math.floor(Math.random() * 30 + 20);
    $("#score").text(keepScore);
    $("#goal").text(goalNumber);
    crystal1 = Math.floor(Math.random() * 10 + +1);
    crystal2 = Math.floor(Math.random() * 10 + +1);
    crystal3 = Math.floor(Math.random() * 10 + +1);
    crystal4 = Math.floor(Math.random() * 10 + +1);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    isDone = false;
}