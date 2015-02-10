/* jshint mocha: true, expr: true, strict: false, undef: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('hello', function () {
  it('should return world', function () {
    hello().should.equal('world');
  });
});

describe('adding rows to table', function () {
  it('should add a row to the table', function () {
    var length = $('#tbody').children.length;
    addRowToTable();
    $('#tbody').children.should.have.length(length+1);
  });
});
