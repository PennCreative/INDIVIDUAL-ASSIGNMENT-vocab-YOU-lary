import renderToDom from '../helpers/renderToDom';
// import clearDom from '../helpers/clearDom';

const emptyCards = () => {
  const domString = '<h1>No Items</h1>';
  renderToDom('#cardHolder', domString);
};
const clearCardHolder = () => {
  document.querySelector('#cardHolder').innerHTML = '';
};

const showCards = (array) => {
  clearCardHolder();
  if (array.length) {
    let domString = '';
    array.forEach((card) => {
      domString += `
  <div class="card text-dark bg-light mb-3">
  <div class="card-word">${card.word}</div>
  <div class="card-body">
    <h5 class="card-lang">${card.language}</h5>
    <hr>
    <p class="card-def">${card.definition}</p>
    <p class="card-time">${card.time}</p>
    <hr>
    <i id="edit-card-btn--${card.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-card-btn--${card.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
  </div>
  `;
    });
    renderToDom('#cardHolder', domString);
  } else {
    emptyCards();
  }
};
export { emptyCards, showCards };
