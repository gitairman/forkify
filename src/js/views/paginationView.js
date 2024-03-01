import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  _errorMessage = '';

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function ({ target }) {
      const btn = target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    const curPage = this._data.page;

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
          <button class="btn--inline pagination__btn--page" disabled>
            <span>First Page</span>
          </button>
        <button class="btn--inline pagination__btn--page" disabled>
            <span>${curPage} of ${numPages}</span>
        </button>
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
          <button class="btn--inline pagination__btn--page" disabled>
            <span>${curPage} of ${numPages}</span>
          </button>
          <button class="btn--inline pagination__btn--page" disabled>
            <span>Last Page</span>
          </button>
      `;
    }

    // Other page
    if (curPage < numPages) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
          <button class="btn--inline pagination__btn--page" disabled>
            <span>${curPage} of ${numPages}</span>
          </button>
          <button data-goto="${
            curPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // Page 1, and there are No other pages
    return '';
  }
}

export default new PaginationView();
