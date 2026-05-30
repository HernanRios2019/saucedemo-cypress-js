const BaseApiService = require('./base-api.service');

class MercadoLibreService extends BaseApiService {
  constructor() {
    super();
  }

  getBaseUrl() {
    return Cypress.env('API_URL');
  }

  getDepartments(resource) {
    return this.get(resource);
  }

  shouldReturnDepartments(resource) {
    return this.getDepartments(resource).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('departments');
      expect(response.body.departments).to.be.an('array').and.not.be.empty;
    });
  }
}

module.exports = MercadoLibreService;
