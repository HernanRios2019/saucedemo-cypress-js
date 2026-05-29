const BasePage = require('./base.page');

class ProductsPage extends BasePage {
  #locators = Object.freeze({
    title: '[data-test="title"]',
    inventoryList: '[data-test="inventory-list"]',
    inventoryItem: '[data-test="inventory-item"]',
    inventoryItemName: '[data-test="inventory-item-name"]',
    inventoryItemPrice: '[data-test="inventory-item-price"]',
    productSortContainer: '[data-test="product-sort-container"]',
  });

  constructor() {
    super();
  }

  getPath() {
    return '/inventory.html';
  }

  getPageIdentifier() {
    return cy.get(this.#locators.inventoryList);
  }

  sortBy(optionValue) {
    cy.get(this.#locators.productSortContainer).select(optionValue);
    return this;
  }

  addProductToCart(productName) {
    this.findProductByName(productName)
      .parents(this.#locators.inventoryItem)
      .find('button')
      .contains(/^Add to cart$/)
      .click();

    return this;
  }

  findProductByName(productName) {
    return cy.get(this.#locators.inventoryItemName).contains(productName);
  }

  shouldDisplayTitle(title) {
    cy.get(this.#locators.title).should('have.text', title);
    return this;
  }

  shouldDisplayProducts() {
    cy.get(this.#locators.inventoryItem).should('have.length.greaterThan', 0);
    return this;
  }

  shouldShowCartQuantity(quantity) {
    cy.get(this.commonLocators.shoppingCartBadge).should('have.text', String(quantity));
    return this;
  }
}

module.exports = ProductsPage;
