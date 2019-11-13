class Question {
  constructor(prompt, choices, answer) {
    this.prompt = prompt;
    this.choices = choices;
    this.answer = answer;
  //this._active = active;



  }

get active() {
  return this._active;
}

set active(newActive) {
  this._active = newActive;
}


  drawSlide() {
    const fillin = [];
    const fillup = [];
    const output = [];




    document.getElementById('slide_background').classList.add('active-slide');

document.getElementById('button_container').style.display = 'initial';
    //appendChild( prompslide );

  //  prompslide.classList.add('active-slide');
    fillin.push(`<p class = "question-property">
${this.prompt}
</p>`);

for (let i = 0; i < this.choices.length; i++) {
fillup.push(`<label>

<input type="radio" name="question${this.answer}" value="${this.choices[i]}">
${this.choices[i]}
</label>`)};

output.push(`<p class = "answers">${fillup.join('')}</p>`)
document.getElementById('slide_background').innerHTML = fillin;
document.getElementById('slide_background').innerHTML += output;


  }


  displaySlide() {
    const currentSlide = document.querySelector('.active-slide');
  //  const submitButton = document.querySelector('#submit-answer');
  //  submitButton.classList.remove('hide') ;


  }

  valueChecked() {
    if (document.querySelector(`input[name="question${this.answer}"]:checked`).value === this.answer) {
      alert('you correct');
    } else  {
      alert('you are not correct');
    }
  }

}


/*

valueChecked() {

  if (document.querySelector(`input[name=${this.active.answer}]:checked`).value === this.active.answer) {
    alert('you correct');
  }  else {
    alert('you are not correct');
  }
}


};







/*

  createSlide() {u
    const slides = [];
    for (let i = 0; i < 5; i++) {
      let slide = new Slide();
      slides.push(slide);
    }
    return slides;
  }

*/
