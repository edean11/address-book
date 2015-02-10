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

describe('add address function', function () {
  it('should add a row to the table', function () {
    var $tbody = $('#tbody');
    var length = $tbody.children().length;
    addRowToTable();
    $tbody.children().length.should.equal(length+1);
  });
});

describe('remove address function', function () {
  it('should remove a row from the table', function () {
    var $tbody = $('#tbody');
    addRowToTable();
    var length = $tbody.children().length;
    $('.removeButton')[0].click();
    $tbody.children().length.should.equal(length-1);
  });
});
