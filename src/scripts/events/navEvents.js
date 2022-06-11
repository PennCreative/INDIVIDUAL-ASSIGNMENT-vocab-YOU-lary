import addCard from '../components/form/addCard';

const navEvents = () => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addCard();
    }
  });
};

export default navEvents;
