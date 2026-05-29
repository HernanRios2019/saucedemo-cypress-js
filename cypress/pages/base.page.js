class BasePage {
  #commonLocators = Object.freeze({
    appLogo: '.app_logo',
    burgerMenuButton: '#react-burger-menu-btn',
    shoppingCartLink: '[data-test="shopping-cart-link"]',
    shoppingCartBadge: '[data-test="shopping-cart-badge"]',
    inventorySidebarLink: '[data-test="inventory-sidebar-link"]',
    aboutSidebarLink: '[data-test="about-sidebar-link"]',
    logoutSidebarLink: '[data-test="logout-sidebar-link"]',
    resetSidebarLink: '[data-test="reset-sidebar-link"]',
  });

  constructor() {
    if (new.target === BasePage) {
      throw new Error('BasePage is abstract and cannot be instantiated directly.');
    }
  }

  get path() {
    return this.getPath();
  }

  get commonLocators() {
    return this.#commonLocators;
  }

  visit() {
    cy.visit(this.path);
    return this;
  }

  getByDataTest(dataTest) {
    return cy.get(`[data-test="${dataTest}"]`);
  }

  getPageTitle() {
    return cy.get(this.commonLocators.appLogo);
  }

  openSideMenu() {
    cy.get(this.commonLocators.burgerMenuButton).click();
    return this;
  }

  goToCart() {
    cy.get(this.commonLocators.shoppingCartLink).click();
    return this;
  }

  logout() {
    this.openSideMenu();
    cy.get(this.commonLocators.logoutSidebarLink).click();
    return this;
  }

  shouldHavePath(path = this.path) {
    cy.location('pathname').should('eq', path);
    return this;
  }

  shouldBeLoaded() {
    this.getPageIdentifier().should('be.visible');
    return this;
  }

  // Abstract method: each page must define its own application route.
  getPath() {
    throw new Error('getPath() must be implemented by subclasses.');
  }

  // Abstract method: each page must define the element that proves it is loaded.
  getPageIdentifier() {
    throw new Error('getPageIdentifier() must be implemented by subclasses.');
  }
}

module.exports = BasePage;
