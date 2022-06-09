import renderToDom from '../../helpers/renderToDom';

const filterBtn = () => {
  const domString = `
<button type="button" id="html" class="btn btn-secondary">HTML</button>
<button type="button" id="css" class="btn btn-secondary">CSS</button>
<button type="button" id="js" class="btn btn-secondary">JS</button>
<button type="button" id="react" class="btn btn-secondary">React</button>
<button type="button" id="other" class="btn btn-secondary">Other</button>
<button type="button" id="allCards" class="btn btn-secondary">All</button>
`;
  renderToDom('#filterButtons', domString);
};

export default filterBtn;
