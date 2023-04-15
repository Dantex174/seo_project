"use strict";

const question = document.querySelectorAll('.question'),
      questionArrow = document.querySelector('.question__icon'),
      answer = document.querySelectorAll('.question__text'),
      hidden = document.querySelector('.hiddenAnswer');


function hideAllAnswers() {
    answer.forEach(answer => {
      answer.classList.add('hiddenAnswer');
    });
  }
  
  function showAnswer() {
    const question = this.closest('.question');
    const answer = question.querySelector('.question__text');
  
    if (answer.classList.contains('hiddenAnswer')) {
      hideAllAnswers();
      answer.classList.remove('hiddenAnswer');
    } else {
      answer.classList.add('hiddenAnswer');
    }
  }
  
  question.forEach((question) => {
    const questionArrow = question.querySelector('.question__icon');
    questionArrow.addEventListener('click', showAnswer);
  });