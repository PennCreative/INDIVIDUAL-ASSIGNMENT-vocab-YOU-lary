const clearDom = () => {
  const header = document.querySelector('#pageHeader');
  const main = document.querySelector('#mainContainer');
  const holder = document.querySelector('#cardHolder');

  header.innerHTML = '';
  main.innerHTML = '';
  holder.innerHTML = '';
};

export default clearDom;
