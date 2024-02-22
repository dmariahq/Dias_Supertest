const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai 
const baseURL = require("../globalVariable/baseURL"); 

const url = baseURL; //define global variable



async function postMethod() {
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
}

  async function putMethod(id) {
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
   
    // console.log(response.body);


}


async function getMethod() {
  const response = await request(url).get("/objects/12");
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  console.log(response.body);
}

module.exports = { postMethod, putMethod, getMethod };