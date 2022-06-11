import domBuilder from '../components/domElements/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import logo from '../components/domElements/logo';
import filterButtons from '../components/buttons/filterButtons';
import addCardForm from '../components/form/addCard';
import domEvents from '../events/domEvents';
import { getCards } from '../../api/cardData';
import { showCards } from '../components/cards';
import formEvents from '../events/formEvents';
import navbar from '../components/domElements/navbar';
import filterButtonEvents from '../events/filterEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder();
  logo();
  navbar();
  filterButtons();
  filterButtonEvents(user.uid);
  navEvents();
  addCardForm();
  logoutButton();
  domEvents(user.uid);
  formEvents(user.uid);
  getCards(user.uid).then((cardsArray) => showCards(cardsArray));
};

export default startApp;
