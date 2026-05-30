const MercadoLibreService = require('../services/mercado-libre.service');

describe('Mercado Libre API', () => {
  const mercadoLibreService = new MercadoLibreService();

  it('TC-API-01 — Get menu departments', () => {
    mercadoLibreService.shouldReturnDepartments('menu/departments');
  });
});
