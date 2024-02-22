const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai 
const baseURL = require("../globalVariable/baseURL");

// const url = supertest("https://api.restful-api.dev"); // global variable url
const url = `${baseURL}`; //define global variable
//test suites
describe("Testing API restful", function () {
    //test Case 1
    it("Test POST", async function () {
        const response = await request(url)
    .post("/objects")
    .send({
      name: "Dias Mariah Qibtiah",
      data: {
        Generation: "Millenial",
        Position: "QA Tester",
        Location: "Jakarta",
      },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Dias Mariah Qibtiah");

  console.log(response.body);
    });
});
