var count = 0;
var correct = 0;
var total = 4;

$(document).ready(function() {
 // alert("test"); 
  console.log(questions[0]);
  // $('.question').text(questions[0].question);
setQuestion(count);

  
  $("input:radio").change(function() {
   // alert('test');
    checkAnswer(count);
    count++;
    setQuestion(count);
  });
  
  function checkAnswer(count) {
    var question = questions[count]; 
    // alert('test');
    question.userAnswer = $('input:radio[name=answer]:checked').val();
    // alert(question.userAnswer);
    if (question.userAnswer == question.realAnswer) {
      correct++;
      alert('correct');
    }
    else {
      alert('incorrect');
    }
    
    if (count + 1 == total) {
      alert('you have reached the end the quiz');
      alert('you have scored ' + correct + ' out of ' + total);
    } 
  }
  function setQuestion(count) {
    $('input[type=radio]').prop("checked", false);
    var question = questions[count].question;
  $(".question").text(question);
  
  $(".label-1").text(questions[count].answer1);
  $(".label-2").text(questions[count].answer2);
  $(".label-3").text(questions[count].answer3);
  $(".label-4").text(questions[count].answer4);
 
  $(".answer-1").val(questions[count].answer1);
  $(".answer-2").val(questions[count].answer2);
  $(".answer-3").val(questions[count].answer3);
  $(".answer-4").val(questions[count].answer4);
  
  count++;
}
});

var questions = new Array();

questions[0] = new Question(
  'What is 2 + 2?',
  '1',
  '2',
  '3',
  '4',
  '4',
  '');

questions[1] = new Question(
  'What is 2 x 2?',
  '1',
  '2',
  '3',
  '4',
  '4',
  '');

questions[2] = new Question(
  'What is 2 + 1?',
  '1',
  '2',
  '3',
  '4',
  '3',
  '');

questions[3] = new Question(
  'What is 2 + 0?',
  '1',
  '2',
  '3',
  '4',
  '2',
  '');


function Question(question, answer1, answer2, answer3, answer4, realAnswer, userAnswer) {
  this.question   = question; 
  this.answer1    = answer1;
  this.answer2    = answer2;
  this.answer3    = answer3;
  this.answer4    = answer4;
  this.realAnswer = realAnswer;
  this.userAnswer = userAnswer;
}