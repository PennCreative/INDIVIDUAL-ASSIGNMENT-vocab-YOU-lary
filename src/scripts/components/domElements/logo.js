import renderToDom from '../../helpers/renderToDom';

const logo = () => {
  const domString = `
  <div id="leftPart" class="left">
  <h1>Logo</h1>
  <div id="createForm"></div>
  </div>
  `;
  renderToDom('#logo', domString);
};

export default logo;
