



/*
const questions = [new Question(
    'At what age does schizophrenia develop?',
    ['childhood', 'middle-age',
      'late teens/early twenties',
      'late in life'
    ], 'late teens/early twenties', true),


  new Question(
    'What percentage of the population is diagnosed with schizophrenia',
    ['5%', '20%', '1%', '30%'], '1%'),


  new Question(
    'Schizophrenia is more common among women than men',
    ['True', 'False']),
  new Question(
    'Studies have shown that use of which drug increases the risk of schizophrenia',
    ['cocaine', 'PCP', 'marijuana',
      'ecstasy'
    ], 'marijuana'),
  new Question(
    'Negative symptoms are one of the symptoms of schizophrenia What is the general definition of negative symptoms',
    ['lack of motivation, emotionless affect, poverty in speech or thought',
      'depression and thoughts of suicide or self-harm',
      'physical symptoms such as uncontrollable shaking or twitching and inabiity to sit still'
    ],
    'lack of motivation, emotionless affect, poverty in speech or thought'
  )];
*/

const game = new Game(0);



document.getElementById('begin-game').addEventListener('click',
function() {
    game.questions[game.questionIndie].drawSlide();
    document.getElementById('begin-game').style.display='none';



    //question.createSlide(questions.length);
  });



    document.getElementById('submit-answer').addEventListener('click', function() {
game.questions[game.questionIndie].valueChecked();
//  game.questions[game.questionIndie].displaySlide();
  //game.changeIndie();
  game.questions[game.questionIndie].drawSlide();

  });

document.getElementById('next-question').addEventListener('click', function() {
  game.questions[game.questionIndie].displaySlide();
  game.changeIndie();
 game.questions[game.questionIndie].drawSlide();
//  game.questions[game.questionIndie].displaySlide();
  document.getElementById('submit-answer').classList.remove('hide');
  document.getElementById('next-question').classList.add('hide');
});
