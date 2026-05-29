const LoginPage = require('../pages/login.page');
const ProductsPage = require('../pages/products.page');

describe('Products', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  it.skip('TC-P-01 — Add item to cart from products page', () => {
    loginPage
      .visit()
      .shouldBeLoaded()
      .loginAs(Cypress.env('STANDARD_USER'), Cypress.env('VALID_PASSWORD'));

    productsPage
      .shouldHavePath()
      .shouldBeLoaded()
      .shouldDisplayTitle('Products')
      .addProductToCart(Cypress.env('PRODUCT_NAME_1'))
      .shouldShowCartQuantity(1);
  });

  it('TC-P-02 — Add multiple items to cart', () => {
    loginPage
      .visit()
      .shouldBeLoaded()
      .loginAs(Cypress.env('STANDARD_USER'), Cypress.env('VALID_PASSWORD'));

    productsPage
      .shouldHavePath()
      .shouldBeLoaded()
      .shouldDisplayTitle('Products')
      .addProductToCart(Cypress.env('PRODUCT_NAME_1'))
      .shouldShowCartQuantity(1)
      .addProductToCart(Cypress.env('PRODUCT_NAME_2'))
      .shouldShowCartQuantity(2);
  });
});