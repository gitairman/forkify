import View from './View';
import previewView from './previewView.js';

class SortView extends View {
  _parentEl = document.querySelector('.sort');
  _errorMessage = ``;
  _message = '';

  addHandlerSort(handler) {
    this._parentEl.addEventListener('click', function ({ target }) {
      const btn = target.closest('.btn--inline');

      if (!btn) return;

      handler(btn.id);
    });
  }

  _generateMarkup() {
    return `
          <button class="btn--inline sort__btn--sortby">
            <span>SORT BY: </span>
          </button>
          <button id="title" class="btn--inline sort__btn--title">
            <span>Title</span>
          </button>
          <button id="publisher" class="btn--inline sort__btn--publisher">
            <span>Publisher</span>
          </button>
    `;
  }
}

export default new SortView();
