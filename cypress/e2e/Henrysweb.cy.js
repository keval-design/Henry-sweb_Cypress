import LoginPage from '../support/pages/Login';
import Cart from '../support/pages/Cart';
import Home from '../support/pages/Home';
import Checkout from '../support/pages/Checkout';
import Search from '../support/pages/Search';
import Product from '../support/pages/Product';

describe('Login to Henrys website', () => {
  const loginPage = new LoginPage();
  const carts = new Cart()
  const homes = new Home()
  const checks = new Checkout()
  const searches = new Search()
  const products = new Product()
beforeEach(() => {
  cy.visit('https://www.henrys.com/')
});
  it('should log in successfully', () => {
   
    loginPage.login();
  });
  it('Complete add to cart process', () => {
    carts.cart()
  });
  it('Visit the complete homepage', () => {
    homes.home()
  });
  it('Complete checkout process', () => {
    checks.checkout()
  });
   it('Validate the search feature ', () => {
  searches.search()
  });
  it('Validate the product page', () => {
    products.product()
  });

});
