

  
  class Game {
    constructor(player1, player2) {
      this.player1 = new Player(player1, 0, 0, 0);
      this.player2 = new Player(player2, 0, 0, 0);
      this.questions = [];///
    }

    start(){
      this.currentPlayer = this.player1;
      $('#currentPlayer').html(this.currentPlayer.name+", you're up!");

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
                this.questions.push(new Question(q.incorrect_answers, q.correct_answer, q.question));///


              // var questions = [];
              // var correct_answers = [];
              // var incorrect_answers = [];

              // this.triviaData.forEach(question => questions.push(question.question));
              // this.questions = questions;

              // this.triviaData.forEach(question => correct_answers.push(question.correct_answer));
              // this.correct_answers = correct_answers;

              // this.triviaData.forEach(question => incorrect_answers.push(question.incorrect_answers));
              // this.incorrect_answers = incorrect_answers;
              });
                resolve();
            })
            .catch(function (error) {
              console.error(error);
              reject(error);
            });

        });
          
    }

    addPoint(player){
      
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
var triviaGame = new Game('Sally', 'Bobby');
// var questionSet;
triviaGame.start()
  .then(() => {
    // $("#question_display").html(triviaGame.questions);//working

    //need to add logic to randomize answers
    for(i=0; i<triviaGame.questions.length; i++){
      var q = triviaGame.questions[i];///

      $(`#question${i}question_display`).html(q.question);///

      $("#question"+i+"answerA_display").html(q.correctAns);///
      $(`#ans${i}A`).val(q.correctAns);///
      
      $("#question"+i+"answerB_display").html(q.answers[0]);///
      $(`#ans${i}B`).val(q.answers[0]);///

      $("#question"+i+"answerC_display").html(q.answers[1]);///
      $(`#ans${i}C`).val(q.answers[1]);///

      $("#question"+i+"answerD_display").html(q.answers[2]);///
      $(`#ans${i}D`).val(q.answers[2]);///

      // new Question(triviaGame.incorrect_answers[i],triviaGame.correct_answers[i],triviaGame.questions[i])');
      // $("#question"+i+"question_display").html(triviaGame.questions[i]);
      // $("#question"+i+"answerA_display").html(triviaGame.correct_answers[i]);
      // $("#question"+i+"answerB_display").html(triviaGame.incorrect_answers[i][0]);
      // $("#question"+i+"answerC_display").html(triviaGame.incorrect_answers[i][1]);
      // $("#question"+i+"answerD_display").html(triviaGame.incorrect_answers[i][2]);

    } 
    //do I need a resolve here?
  })
  .catch(() => {});


function checkIndivAnswer(i, ans){
  var answerData = $(`#ans${i}${ans}`).val();///
  var question = triviaGame.questions[i];///
  var isCorrectResult = question.isCorrectAnswer(answerData);

  if (isCorrectResult === 'yes'){
    triviaGame.currentPlayer.score++;//need to remove a point if first select correct and then change
    console.log("right answer");
  } else{
    console.log("Wrong");
  }
}


function switchPlayers(){
 if(triviaGame.currentPlayer = triviaGame.player2) {

 } else{
    triviaGame.currentPlayer = triviaGame.player2;
    $('#currentPlayer').html(triviaGame.currentPlayer.name+", you're up!");
 }

}