var expect = require('chai').expect

describe('hello-world method in hello-world.js', function () {
  it('must match Hello World', function(done){
    var helloWorld = require('../hello-world')()
    helloWorld = helloWorld.replace('\n', '')
    expect(helloWorld).to.equal('Hello World')
    done()
  })
})

describe('heyWorld method in heyWorld.js', function () {
  it('must return string "Hey World"', function(done) {
    var heyWorld = require('../heyWorld')()
    expect(heyWorld).to.equal('Hey World!')
    done()
  })
})