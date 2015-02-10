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

describe('add/remove address function', function () {
  before(function () {
    if (window.__karma__) {
      $('body').append('<table><thead></thead><tbody id="tbody"></tbody></table>');
    }
  });

  afterEach(function () {
    $('tbody').empty();
  });

  describe('add address function', function (){
    it('should add a row to the table', function () {
      addRowToTable();
      $('body').children().find('tbody').children().length.should.equal(1);
    });
  });

  describe('remove address function', function () {
    it('should remove a row from the table', function () {
      var $tbody = $('body').children().find('tbody');
      $tbody.append('<tr><button class="removeButton"></button></tr>')
      addRowToTable();
      $('.removeButton')[0].click();
      $tbody.children().length.should.equal(1);
    });
  });
});

