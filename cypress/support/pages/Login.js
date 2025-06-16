class LoginPage {
  login() {
    
    cy.get('.ms-header__signin-button').click();

    cy.wait(5000)
    cy.origin('https://henrysenterprises.b2clogin.com', () => {
      cy.get('#email').type('rathodkeval70901@gmail.com');
      cy.get('#password').type('keval@123');
      cy.get('[type="submit"]').click();
    });

    
    }
    
  }


export default LoginPage;


