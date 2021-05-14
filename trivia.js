

  
  class Game {
    constructor(players) {
      this.players = players;
    }

    start(){
        var api_url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
        var config = {
            params: {

            }
          };
        return new Promise((resolve, reject) => {
          axios.get(api_url, config)
            .then((response) => {
              this.triviaData = response.data.results;
              // this.triviaData.forEach(question => console.log(question));
              this.questions = this.triviaData.forEach(question => console.log(question.question));
              this.correct_answers = this.triviaData.forEach(question => console.log(question.correct_answer));
              this.incorrect_answers = this.triviaData.forEach(question => console.log(question.incorrect_answers));
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
      constructor(answers, correctAns) {
        this.answers = answers;
        this.correctAns = correctAns;
      }

      isCorrectAnswer(ans){

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
var triviaGame = new Game(['sally', 'bobby']);
triviaGame.start()
  .then(() => {
    // triviaGame.question;
    // triviaGame.correct_answer;
    // triviaGame.incorrect_answers
    $("#question_display").html(triviaGame.question);//just to test
  })
  .catch(() => {});

// numbers.map( (number)=>{
//   return number * 2
// } )