var expect = require('chai').expect
var helloWorld = require('../hello-world.js')

describe('hello-world method in hello-world.js', function () {

  it('must match Hello World', function(done){
    expect(helloWorld.hi()).to.equal('Hello World')
    done()
  })

  it('adds to numbers together', function(done) {
    expect(helloWorld.sum(1,2)).to.equal(3)
    done()
  })

  it('says my name', function(done) {
    expect(helloWorld.sayMyName("Frank")).to.equal("My name is Frank")
    done()
  })
})
