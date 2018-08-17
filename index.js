// Code your solution in this file!

describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('raises error if the companyName is changed', function () {
      expect(function () { companyName = 'specialCompany' }).to.throw(TypeError);
    });
  });