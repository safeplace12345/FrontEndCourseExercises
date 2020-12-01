const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  xit('says hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
