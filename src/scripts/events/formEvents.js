import { showCards } from '../components/cards';
import { createCard, updateCard } from '../../api/cardData';

const formEvents = (uid) => {
  document.querySelector('#pageHeader').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-card')) {
      const cardObj = {
        language: document.querySelector('#select-lang').value,
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        uid,
        time: new Date().toLocaleString()
      };
      createCard(cardObj).then((cardsArray) => showCards(cardsArray));
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        firebaseKey,
        language: document.querySelector('#select-lang').value,
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        uid,
        time: new Date().toLocaleString()
      };
      updateCard(cardObj).then(showCards);
    }
  });
};

export default formEvents;
