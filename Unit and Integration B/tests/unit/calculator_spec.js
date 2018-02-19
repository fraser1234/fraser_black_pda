var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add', function(){
    calculator.previousTotal = 5
    calculator.add(5);

    assert.equal(calculator.runningTotal, 10 );
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 10
    calculator.subtract(5);

    assert.equal(calculator.runningTotal, 5 );
  })

  it('should be able to multiply', function(){
    calculator.previousTotal = 5
    calculator.multiply(5);

    assert.equal(calculator.runningTotal, 25);
  })

  it('should be able to divide', function(){
    calculator.previousTotal = 6
    calculator.divide(2);

    assert.equal(calculator.runningTotal, 3 );
  })

  it('should be able to number click', function(){
    calculator.numberClick(2);
    calculator.numberClick(4);
    calculator.numberClick(6);

    assert.equal(calculator.runningTotal, 246);
  })

  it('should be able to operator click', function(){
    calculator.operatorClick(calculator.add(4));
    calculator.operatorClick(calculator.add(6));
    calculator.operatorClick(calculator.divide(2));

    assert.equal(calculator.runningTotal, 5);
  })

  it('should be able to clear click', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.clearClick();

    assert.equal(calculator.runningTotal, 0);
  })


});
