class Search {
  search() {
    cy.get('.ms-header__topbar > .ms-search > .ms-search__form > .ms-search__searchForm > .ms-search__form-control')
      .type('Camera');

    cy.get('.ms-header__topbar > .ms-search > .ms-search__form > .ms-search__searchForm > .ms-search__form-submitSearch')
      .click();

  
    cy.url().should('include', 'q=Camera');
    cy.url().should('include', 'aspect=GRID');

  }
}

export default Search;

