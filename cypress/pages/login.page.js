const BasePage = require('./base.page');

class LoginPage extends BasePage {
  #locators = Object.freeze({
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]',
  });

  constructor() {
    super();
  }

  getPath() {
    return '/';
  }

  getPageIdentifier() {
    return cy.get(this.#locators.loginButton);
  }

  typeUsername(username) {
    cy.get(this.#locators.usernameInput).clear().type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.#locators.passwordInput).clear().type(password, { log: false });
    return this;
  }

  submitLogin() {
    cy.get(this.#locators.loginButton).click();
    return this;
  }

  loginAs(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.submitLogin();
    return this;
  }

  shouldShowErrorMessage(message) {
    cy.get(this.#locators.errorMessage).should('be.visible').and('contain.text', message);
    return this;
  }
}

module.exports = LoginPage;
