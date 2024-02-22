const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai 
const baseURL = require("../globalVariable/baseURL");

const url = `${baseURL}`; //define global variable
//test suites
describe("Testing API restful", function () {
    //test Case 2
    it("Test PUT", async function () {
        const response = await request(url)
    .put("/objects/7")
    .send({
      name: "Dias Mariah Qibtiah",
      data: {
        Generation: "Millenial",
        Position: "QA Tester",
        Location: "Jakarta", 
        Task: "Supertest",
      },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(405);
  // expect(response.body.data.Task).to.equal("Supertest");
  // expect(response.body.name).to.equal("Dias Mariah Qibtiah");
  

  console.log(response.body);
    });
});
