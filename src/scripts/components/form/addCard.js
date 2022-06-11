// import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

// Remember to put uid after the empty obj
const addCardForm = (obj = {}) => {
  // clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="card">Word</label>
        <input type="text" class="form-control" id="word" aria-describedby="word" placeholder="Enter Word" value="${obj.word || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Card Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <label for="select-lang">Language Category</label>
  <select class="form-select" aria-label="Select Language" id="select-lang">
    <option selected>${obj.language || 'Select Language'}</option>
    <option value="Language">Language</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JS">JS</option>
    <option value="other">Other</option>
  </select>
      <button type="submit" id="submit-card" class="btn btn-primary">Submit Card
      </button>
    </form>`;

  renderToDom('#formArea', domString);
};

export default addCardForm;
