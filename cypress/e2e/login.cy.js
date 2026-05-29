const LoginPage = require('../pages/login.page');
const ProductsPage = require('../pages/products.page');

describe('Login', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  it('TC-L-01 — Successfully login with valid credentials', () => {
    loginPage
      .visit()
      .shouldBeLoaded()
      .loginAs(Cypress.env('STANDARD_USER'), Cypress.env('VALID_PASSWORD'));

    productsPage
      .shouldHavePath()
      .shouldBeLoaded()
      .shouldDisplayTitle('Products');
  });

  it('TC-L-02 — Fail to login with invalid credentials', () => {
    loginPage
      .visit()
      .shouldBeLoaded()
      .loginAs(Cypress.env('STANDARD_USER'), Cypress.env('INVALID_PASSWORD'))
      .shouldShowErrorMessage('Username and password do not match any user in this service')
      .shouldBeLoaded()
      .shouldHavePath();
  });
});
