import paginationView from './paginationView';
import resultsView from './resultsView';
import sortView from './sortView';

class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;

    if (!query) {
      sortView.clear();
      paginationView.clear();
      throw new Error(
        'Oops!  You forgot to enter something into the search field.'
      );
      // resultsView.renderMessage(
      //   'Oops!  You forgot to enter something into the search field.'
      // );
      return;
    }

    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', async function (e) {
      e.preventDefault();
      try {
        await handler();
      } catch (e) {
        sortView.clear();
        paginationView.clear();
        e.message
          ? resultsView.renderError(e.message)
          : resultsView.renderError();
      }
    });
  }
}

export default new SearchView();
