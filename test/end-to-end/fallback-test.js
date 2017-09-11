/* eslint-env mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const url = 'http://localhost:3000';

chai.use(chaiHttp);

describe('Fallback URL', () => {
  it('delivers index.html for / route', (done) => {
    chai.request(url)
      .get('/')
      .then((res) => {
        expect(res.text).to.contain('<div id="app"></div>');
        done();
      });
  });
  it('delivers index.html for unknown API route', (done) => {
    chai.request(url)
      .get('/notAnAPIroute')
      .then((res) => {
        expect(res.text).to.contain('<div id="app"></div>');
        done();
      });
  });
});
