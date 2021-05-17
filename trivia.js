

  
  class Game {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
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
              var questions = [];
              var correct_answers = [];
              var incorrect_answers = [];

              this.triviaData.forEach(question => questions.push(question.question));
              this.questions = questions;

              this.triviaData.forEach(question => correct_answers.push(question.correct_answer));
              this.correct_answers = correct_answers;

              this.triviaData.forEach(question => incorrect_answers.push(question.incorrect_answers));
              this.incorrect_answers = incorrect_answers;
              
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
      eval('var question'+ i + ' = new Question(triviaGame.incorrect_answers[i],triviaGame.correct_answers[i],triviaGame.questions[i])');
      $("#question"+i+"question_display").html(triviaGame.questions[i]);
      $("#question"+i+"answerA_display").html(triviaGame.correct_answers[i]);
      $("#question"+i+"answerB_display").html(triviaGame.incorrect_answers[i][0]);
      $("#question"+i+"answerC_display").html(triviaGame.incorrect_answers[i][1]);
      $("#question"+i+"answerD_display").html(triviaGame.incorrect_answers[i][2]);

    } 
  })
  .catch(() => {});


function checkIndivAnswer(question, answer){
  var answerData = $(answer).html;
  console.log(question);
  // var isCorrectResult = question.isCorrectAnswer(answerData);
  var isCorrectResult;
  this.isCorrectAnswer = isCorrectAnswer(answerData);
  isCorrectResult = this.isCorrectAnswer;
  if (isCorrectResult === 'yes'){
    //current player ++;
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