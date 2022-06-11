import { showCards } from '../components/cards';
import {
  getCards,
  cssLang,
  htmlLang,
  otherLang,
  jsLang
} from '../../api/cardData';

const filterButtonEvents = (uid) => {
  document.querySelector('#html').addEventListener('click', () => {
    htmlLang(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#css').addEventListener('click', () => {
    cssLang(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#js').addEventListener('click', () => {
    jsLang(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#other').addEventListener('click', () => {
    otherLang(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#allCards').addEventListener('click', () => {
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });
};

export default filterButtonEvents;
