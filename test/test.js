const assert = require('chai').assert;
const sumAsync = require("../src/utils").sumAsync;
const sumSync = require("../src/utils").sumSync;


describe('utils', function() {
//   describe('#sumSync', function() {
//     it('should return 2 when the value is (1,1)', function() {
//       assert.equal(sumSync(1,1),2);
//     });

//       it('should return 21 when the value is ("2",1)', function() {
//         assert.equal(sumSync(2,"1"),"21");
//       });
//   });

  describe('#sumAsync', function() {
    it('should return 2 when the value is (1,1)', async function() {
      assert.equal(await sumAsync(1,1),2);
    });

    //   it('should return 21 when the value is ("2",1)', async function() {
    //     assert.equal(await sumSAync(2,"1"),"21");
    //   });
  });
});