class Home{
    home(){
        cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(1)').click()
        cy.contains('Hot Deals').should('be.visible')
        cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(2)').click()
        cy.contains('Best Sellers').should('be.visible')
        cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(3)').click()
        cy.contains('Hot Deals').should('be.visible')
        cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(4)').click()
        cy.contains('Best Sellers').should('be.visible')
        cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(5)').click()
        cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(6)').click()
       cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(7)').click()
       cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(9)').click()
       cy.get('.ms-header__desktop-view > .ms-nav > .ms-nav__list > .hei-navi-menu > .hei-menu-bar > :nth-child(11)').click()
    }
}

export default Home;