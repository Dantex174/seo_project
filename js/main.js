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



  const cardSlots = document.querySelectorAll('.cardSlot'); // Все карточки на странице
  const imgCards = document.querySelectorAll('.cardSlot__img');
  const titleCards = document.querySelectorAll('.cardSlot__title');
  const descrCards = document.querySelectorAll('.cardSlot__descr');
  const openInfos = document.querySelectorAll('.cardSlot__moreInfo');
  const closeInfos = document.querySelectorAll('.cardSlot__back');
  const cardBtn = document.querySelectorAll('.cardSlot__btn');
  const textAboutSlots = document.querySelectorAll('.cardSlot__textAbout');
  
  function openCard(e) {
      e.preventDefault();
      const card = e.target.closest('.cardSlot'); // Находим ближайшего родителя с классом .cardSlot
      const imgCard = card.querySelector('.cardSlot__img');
      const titleCard = card.querySelector('.cardSlot__title');
      const descrCard = card.querySelector('.cardSlot__descr');
      const openInfos = card.querySelector('.cardSlot__moreInfo');
      const closeInfo = card.querySelector('.cardSlot__back');
      const cardBtn = card.querySelector('.cardSlot__btn');
      const textAboutSlot = card.querySelector('.cardSlot__textAbout');
  
      imgCard.classList.add('displayNone');
      titleCard.classList.add('displayNone');
      descrCard.classList.add('displayNone');
      cardBtn.classList.add('displayNone');
      openInfos.classList.add('displayNone');
      closeInfo.classList.remove('displayNone');
      textAboutSlot.classList.remove('displayNone');
  }
  
  function closeCard(e) {
    e.preventDefault();
      cardSlots.forEach(card => {
          const imgCard = card.querySelector('.cardSlot__img');
          const titleCard = card.querySelector('.cardSlot__title');
          const descrCard = card.querySelector('.cardSlot__descr');
          const openInfos = card.querySelector('.cardSlot__moreInfo');
          const closeInfo = card.querySelector('.cardSlot__back');
          const cardBtn = card.querySelector('.cardSlot__btn');
          const textAboutSlot = card.querySelector('.cardSlot__textAbout');
  
          imgCard.classList.remove('displayNone');
          titleCard.classList.remove('displayNone');
          descrCard.classList.remove('displayNone');
          cardBtn.classList.remove('displayNone');
          openInfos.classList.remove('displayNone');
          closeInfo.classList.add('displayNone');
          textAboutSlot.classList.add('displayNone');
      });
  }
  
  openInfos.forEach(info => {
      info.addEventListener('click', (e) => {
          openCard(e);
      });
  });
  
  closeInfos.forEach(info => {
      info.addEventListener('click', (e) => {
          closeCard(e);
      });
  });


  