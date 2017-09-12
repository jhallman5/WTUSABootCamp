/* eslint-env mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const url = 'http://localhost:3000';

chai.use(chaiHttp);

describe('Customer End-to-End', () => {
  context('/api/dashboard/customers/all', () => {
    it('fetches has a status code of 200', (done) => {
      chai.request(url)
        .get('/api/dashboard/customers/all')
        .then((res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('returns an array of customers', (done) => {
      chai.request(url)
        .get('/api/dashboard/customers/all')
        .then((res) => {
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.length(10);
          done();
        });
    });
    it('the array elements are customers', (done) => {
      chai.request(url)
        .get('/api/dashboard/customers/all')
        .then((res) => {
          expect(res.body[0].id).to.equal(1);
          expect(res.body[1].email).to.equal('steven4@gmail.com');
          expect(res.body[2].name).to.equal('lisa3');
          done();
        });
    });
  });
});
