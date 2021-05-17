


  class Game {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
      this.questions = [];
    }

    start(){
      this.currentPlayer = this.player1;
        var api_url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
        var config = {
            params: {

            }
          };
        return new Promise((resolve, reject) => {
          axios.get(api_url, config)
            .then((response) => {
              this.triviaData = response.data.results;

              this.triviaData.forEach((q) => {
                this.questions.push(new Question(q.incorrect_answers, q.correct_answer, q.question));
              });

              resolve();
            })
            .catch(function (error) {
              console.error(error);
              reject(error);
            });
        });

    }
}

  class Question {
      constructor(answers, correctAns, question) {
        this.answers = answers;
        this.correctAns = correctAns;
        this.question = question;
      }

      isCorrectAnswer(ans){
        if(ans === this.correctAns){
          return "yes";
        }else{
          return "no";
        }

      }
  }

  class Player {
      constructor(name, score, wins, losses, questions) {
        this.name = name;
        this.score = score;
        this.wins = wins;
        this.losses = losses;
        this.questions = questions;
      }
  }



  //easiest way to randomize is have a shuffle routine
//get user names
//ask what category and difficulty, pass params to Game
var triviaGame = new Game('sally', 'bobby');
// var questionSet;
triviaGame.start()
  .then(() => {
    // $("#question_display").html(triviaGame.questions);//working

    //need to add logic to randomize answers
    for(i=0; i<triviaGame.questions.length; i++){
      var q = triviaGame.questions[i];
      $(`#question${i}question_display`).html(q.question);

      $("#question"+i+"answerA_display").html(q.correctAns);
      $(`#ans${i}A`).val(q.correctAns);

      $("#question"+i+"answerB_display").html(q.answers[0]);
      $(`#ans${i}B`).val(q.answers[0]);

      $("#question"+i+"answerC_display").html(q.answers[1]);
      $(`#ans${i}C`).val(q.answers[1]);

      $("#question"+i+"answerD_display").html(q.answers[2]);
      $(`#ans${i}D`).val(q.answers[2]);
    }
  })
  .catch(() => {});


function checkIndivAnswer(i, ans){
  var answerData = $(`#ans${i}${ans}`).val();
  var question = triviaGame.questions[i];
  console.log(i, ans, answerData, question.correctAns);
  var isCorrectResult = question.isCorrectAnswer(answerData);
  if (isCorrectResult === 'yes'){
    //current player ++;
    console.log('correct!');
  } else {
    console.log('wrong!')
  }
}


function checkPlayerAnswers(event){
  event.preventDefault();
 //  document.querySelectorAll('#triviaGameQuestions input');
 //clear all

 //switch players
 // triviaGame.currentPlayer = player2;
}

// $(question1answerA_display).click(function(){

// });
