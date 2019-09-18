const app = require("../app");
const axios = require("axios");
const req =  {
  startDate: "2016-01-26",
  endDate: "2016-12-02",
  minCount: 2700,
  maxCount: 3000
}
describe("POST /records", () => {
    test("It responds with filtered records", async () => {
      await axios.post("http://localhost:3100/records", req).then(body => {
        // make sure we filter it correctly  
        expect(body.data).toHaveProperty("records")
        expect(body.data.code).toBe(0);
        expect(body.data.msg).toBe("Success");
        })
    });
  });