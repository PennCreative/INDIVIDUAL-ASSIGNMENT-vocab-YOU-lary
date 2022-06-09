import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// TODO: Get Cards
const getCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cards.json`, cardObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cards/${response.data.name}.json`, payload)
        .then(() => {
          getCards(cardObj.uid).then(resolve);
        });
    }).catch((error) => reject(error));
});

const deleteCard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cards/${firebaseKey}.json`)
    .then(() => {
      getCards(uid).then((cardArray) => resolve(cardArray));
    }).catch((error) => reject(error));
});

const updateCard = (cardObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cards/${cardObj.firebaseKey}.json`, cardObj)
    .then(() => getCards(cardObj.uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getCards,
  getSingleCard,
  createCard,
  deleteCard,
  updateCard
};
