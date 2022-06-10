import { getCards } from '../../api/cardData';
import domBuilder from '../components/domElements/domBuilder';
import navbar from '../components/domElements/navbar';
import logoutButton from '../components/buttons/logoutButton';
import logo from '../components/domElements/logo';
import filterButtons from '../components/buttons/filterButtons';
import addCardForm from '../components/form/addCard';
import domEvents from '../events/domEvents';
import { showCards } from '../components/cards';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  logo();
  navbar();
  filterButtons();
  addCardForm();
  logoutButton();
  domEvents(user.uid);
  formEvents(user.uid);
  getCards(user.uid).then((cardsArray) => showCards(cardsArray));
};

export default startApp;
