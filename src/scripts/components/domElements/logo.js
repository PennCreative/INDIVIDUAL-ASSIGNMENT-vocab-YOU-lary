import renderToDom from '../../helpers/renderToDom';

const logo = () => {
  const domString = `
  <div id="leftPart" class="left">
  <h1><em>vocab-</em><strong>YOU</strong><em>-lary</em></h1>
  <div id="createForm"></div>
  </div>
  `;
  renderToDom('#logo', domString);
};

export default logo;
