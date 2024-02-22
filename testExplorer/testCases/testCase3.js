const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai 
const baseURL = require("../globalVariable/baseURL");

const url = `${baseURL}`; //define global variable
//test suites
describe("Testing API restful", function () {
    //test Case 3
    it("Test GET", async function () {
        const response = await request(url)
    .get("/objects/12");
    //assertation / verifikasi
  expect(response.status).to.equal(200);
 
  console.log(response);
    });
});
