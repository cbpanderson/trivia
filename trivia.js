

  
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
        axios.get(api_url, config)
        .then(function (response) {
         // console.log(response.data.results);
    
        })
        .catch(function (error) {
        console.error(error);
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

//   $("#question_display").html(question_set_1.)

  //easiest way to randomize is have a shuffle routine
//get user names
//ask what category and difficulty, pass params to Game
var triviaGame = new Game(['sally', 'bobby']);
triviaGame.start();