
class Game {
  constructor( questionIndie ) {
    this.questions = this.createQuestions();
    this.questionIndie = 0;

  }

  changeIndie() {
    this.questionIndie = this.questionIndie + 1
  }

  createQuestions() {
const questions = [
  new Question('At what age does schizophrenia develop?', ['childhood', 'middle-age', 'late teens/early twenties', 'late in life'],
   'late teens/early twenties'),

new Question('What percentage of the population is diagnosed with schizophrenia?', ['5%', '20%', '1%', '30%'], '1%'),

new Question('Schizophrenia is more common among women than men:', ['True', 'False'], 'False'),

new Question('Studies have shown that use of which drug increases the risk of schizophrenia:', ['cocaine', 'PCP', 'marijuana', 'ecstasy'], 'marijuana'),

new Question('Negative symptoms are one of the symptoms of schizophrenia. What is the general definition of negative symptoms?', ['lack of motivation, emotionless affect, and poverty in speech or thought', 'delusional beliefs not grounded in reality', 'physical symptoms such as uncontrollable shaking or twitching and inabiity to sit still'],
'lack of motivation, emotionless affect, and poverty in speech or thought'),

new Question('What is the difference between a genetic and a hereditary cause of a disease?', ['genetic causes of disease may be hereditary but are due mainly to a change in the organism\'s biological makeup, whereas hereditary disease are mostly inherited through close family memebers', 'hereditary diseases are much more responsive to medical treatment/invention, while diseases with genetic causes are more resistant to treatment', 'one can generally predict which generation will suffer from a hereditary illness by examining recessive/dominant traits, while genetic causes of disease seemingly strike at random'], 'genetic causes of disease may be hereditary but are due mainly to a change in the organism\'s biological makeup, whereas hereditary disease are mostly inherited through close family memebers'),

new Question('What is the common cause of death in people with schizphrenia?', ['suicide', 'drug overdose',
'phenumonia', 'heart disease'], 'heart disease'),
]

return questions;
};

/*
get activeQuestion() {
return this.questions.find(question => question.active);
}




valueChecked() {
  if (document.querySelector(`input[name="question${this.questions.active.answer}"]:checked`).value === this.active.answer) {
    alert('you correct');
  } else  {
    alert('you are not correct');
  }
}

/*
valueChecked() {
for (let i = 0; i < this.activeQuestion.choices.length; i++) {
  if (slide.childNodes.querySelector(`input[name=${this.activeQuestion.answer}]:checked`).value === this.activeQuestion.answer) {
    alert('you correct');
  }  else {
    alert('you are not correct');
  }
}
}
/*
valueChecked() {
  if(document.querySelector(`input[name=${this.questions.answer}]:checked`).value === this.questions.answer) {
    alert('you correct');
  }  {
    alert('you are not correct');
  }

}
*/
}


/*
startGame() {
  this.slide.drawSlide();
}

}
*/
