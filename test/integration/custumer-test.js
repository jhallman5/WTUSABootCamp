const { expect } = require('chai');
const Customer = require('../../src/models/customers');

describe('Customer Integration', () => {
  context('findById()', () => {
    it('returns an object', (done) => {
      Customer.findById(2)
        .then((res) => {
          expect(res.attributes).to.be.an('object');
          done();
        });
    });
    it('fetches the corrected Customer', (done) => {
      Customer.findById(2)
        .then((res) => {
          expect(res.attributes.id).to.equal(2);
          expect(res.attributes.name).to.equal('steven4');
          expect(res.attributes.email).to.equal('steven4@gmail.com');
          done();
        });
    });
  });
  context('findAll()', () => {
    it('returns and array', (done) => {
      Customer.findAll()
        .then((res) => {
          expect(res.models).to.be.an('array');
          expect(res.models.length).to.equal(10);
          done();
        });
    });
    it('Array elements are customers', (done) => {
      Customer.findAll()
        .then((res) => {
          expect(res.models[0].attributes.id).to.equal(1);
          expect(res.models[1].attributes.email).to.equal('steven4@gmail.com');
          expect(res.models[2].attributes.name).to.equal('lisa3');
          done();
        });
    });
  });
});
