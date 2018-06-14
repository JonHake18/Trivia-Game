var questions = [{
    ques: "Who directed Jurassic Park?",
    ans: ["Steven Spielberg", "Tim Burton", "George Lucas", "Robert Zemeckis"],
    name: "director",
    correct: "Steven Spielberg",
    divClass: ".director"
},
{
    ques: "How many million dollars did Jurassic Park gross in the box office?",
    ans: ["325", "400", "370", "420"],
    name: "boxOffice",
    correct: "370",
    divClass: ".boxOffice"
},
{
    ques: "In what year did Jurrasic Park the ride open?",
    ans: ["1994", "1996", "1998", "2000"],
    name: "rideYear",
    correct: "1996",
    divClass: ".rideYear"
},
{
    ques: "What was the budget for Jurrasic Park in millions?",
    ans: ["51", "57", "61", "63"],
    name: "budget",
    correct: "63",
    divClass: ".budget"
},
{
    ques: "When was Jurassic Park released?",
    ans: ["1992", "1993", "1994", "1995"],
    name: "releaseDate",
    correct: "1993",
    divClass: ".releaseDate"
},
{
    ques: "Who composed the soundtrack for Jurassic Park?",
    ans: ["Hans Zimmer", "John Williams", "James Horner", "Howard Shore"],
    name: "composer",
    correct: "John Williams",
    divClass: ".composer"
},
{
    ques: "How many Oscars did Jurrasic Park win?",
    ans: ["1", "2", "3", "4"],
    name: "oscars",
    correct: "3",
    divClass: ".oscars"
},
{
    ques: "What production company released Jurassic Park?",
    ans: ["Universal Pictures", "Disney", "20th Century Fox", "Warner Bros"],
    name: "production",
    correct: "Universal Pictures",
    divClass: ".production"
},
{
    ques: "On  which Hawaiian island was Jurassic Park filmed?",
    ans: ["Maui", "Kauai", "Oahu", "Molokai"],
    name: "location",
    correct: "Kauai",
    divClass: ".location"
},
{
    ques: "how much did Jurassic Park make in its opening weekend, in millions?",
    ans: ["43", "47", "51", "55"],
    name: "opening",
    correct: "47",
    divClass: ".opening"
}
]

var labels = ["first", "second", "third", "forth"];

var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('#timer').show();
countdown(60);
questionDisplay();
});

var questionDisplay = function() {
$(".questions :not('#submit')").empty();

for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr/>');
}
}


var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.timer').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;

    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    
    clearInterval(timer);
    return;
}
}, 1000);

$('#submit').on('click', function() {
clearInterval(timer);
})
};

var gradeQuiz = $('#submit').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;

for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

countdown();
$('#timer').fadeOut(500);
$('#answerCounter').show();
$('#correctCounter').append(correctAnswers);
$('#wrongCounter').append(wrongAnswers);

});