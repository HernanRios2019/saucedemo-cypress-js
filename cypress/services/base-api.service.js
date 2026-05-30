class BaseApiService {
  #defaultRequestOptions = Object.freeze({
    failOnStatusCode: true,
    headers: {
      accept: 'application/json',
      'user-agent': [
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        'AppleWebKit/537.36 (KHTML, like Gecko)',
        'Chrome/125.0.0.0 Safari/537.36',
      ].join(' '),
    },
  });

  constructor() {
    if (new.target === BaseApiService) {
      throw new Error('BaseApiService is abstract and cannot be instantiated directly.');
    }
  }

  get(resource) {
    return cy.request({
      ...this.#defaultRequestOptions,
      method: 'GET',
      url: this.buildUrl(resource),
    });
  }

  buildUrl(resource) {
    return `${this.getBaseUrl()}/${this.#normalizeResource(resource)}`;
  }

  #normalizeResource(resource) {
    return resource.replace(/^\/+/, '');
  }

  // Abstract method: each API service must define its own base URL.
  getBaseUrl() {
    throw new Error('getBaseUrl() must be implemented by subclasses.');
  }
}

module.exports = BaseApiService;
