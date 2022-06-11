import { deleteCard, getSingleCard } from '../../api/cardData';
import { showCards } from '../components/cards';
import addCard from '../components/form/addCard';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, uid)
          .then((cardsArray) => showCards(cardsArray));
      }
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey)
        .then((cardObj) => addCard(cardObj));
    }

    if (e.target.id.includes('add-card-btn')) {
      addCard({}, uid);
    }
  });
};

export default domEvents;
