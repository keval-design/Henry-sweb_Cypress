class Product{
    product(){
        cy.get('.ms-header__topbar > .ms-search > .ms-search__form > .ms-search__searchForm > .ms-search__form-control')
      .type('Camera');

  
    cy.get('.ms-header__topbar > .ms-search > .ms-search__form > .ms-search__searchForm > .ms-search__form-submitSearch')
      .click();
            cy.wait(5000)
      cy.get('#unbxd_category_uFilter > .UNX-text-facet-wrap > .UNX-facets-all > .UNX-facets > :nth-child(1) > .UNX-facets-block').click()
cy.wait(3000)
      cy.get('#v_Attr_5637147576_uFilter > .UNX-text-facet-wrap > .UNX-facets-all > .UNX-facets > :nth-child(1) > .UNX-facets-block').click()

      cy.get('#v_onlineInventoryMessage_uFilter > .UNX-text-facet-wrap > .UNX-facets-all > .UNX-facets > :nth-child(1) > .UNX-facets-block').click()



    }
}

export default Product;