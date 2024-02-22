const { postMethod, putMethod } = require("../apiServer/apiObjects");

//test suites
describe("Testing API restful", function () {
let id;
// test Case 1
  it("Test POST from Function", async function () {
    id = await postMethod();
//   });
//   // test Case 2
//   it("Test PUT from Function", async function () {
//     await putMethod(id);
  }); 
//   // test Case 3
//   it("Test GET from Function", async function () {
//     getMethod();
});
