const server = require("../../dist/server");
const axios = require("axios").default;
const base = "http://localhost:3000/";
//const base = axios.create({baseURL: "http://localhost:3000"});

describe("routes : static", () => {

  describe("GET /", () => {
    it("should return status code 200", (done) => {
      axios.get(base)
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })

});