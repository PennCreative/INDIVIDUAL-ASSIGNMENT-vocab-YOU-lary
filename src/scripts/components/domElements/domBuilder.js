import renderToDom from '../../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="pageHeader" class="head">
  <div id="logo"></div>
  <div id="formArea"></div>
  <div id="buttons"></div>
  </div>
  <div id="main-container" class="main">
    <div id="filterButtons" class="btnGroup"></div>
    <div id="cardHolder"></div>
  </div>
  `;
  renderToDom('#app', domString);
};

export default domBuilder;
