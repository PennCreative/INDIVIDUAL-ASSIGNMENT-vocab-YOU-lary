import renderToDOM from '../../helpers/renderToDom';

const navbar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-secondary bg-secondary mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">Vocab-YOU-Lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
            <li class="nav-item">
              <a class="nav-link" href="#" id="add-card-btn">Create Entry</a>
            </li>
            <li>
            <input class="form-control mr-sm-2" id="search" placeholder="Search" aria-label="Search"/>
            </li>
          </ul>
        </div>
        </div>
      </nav>`;

  renderToDOM('#formArea', domString);
};

export default navbar;
