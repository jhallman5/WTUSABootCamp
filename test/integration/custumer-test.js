const { expect } = require('chai');
const Customer = require('../../src/models/customers')

describe('Customer Integration', () => {
  context('findById()', () => {
    it('returns an object', (done) => {
      Customer.findById(2)
        .then((response) => {
          expect(response.attributes).to.be.an('object');
          done();
        });
    });
    it('fetches the corrected Customer', (done) => {
      Customer.findById(2)
        .then((response) => {
          expect(response.attributes.id).to.equal(2);
          expect(response.attributes.name).to.equal('steven4');
          expect(response.attributes.email).to.equal('steven4@gmail.com');
          done();
        });
    });
  });
});
