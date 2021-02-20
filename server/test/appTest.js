const supertest = require("supertest");
const app = require("../app");

describe("plain text response", function () {

    it("returns a plain text response", function (done) {
        supertest(app)
        .get("/")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect("Access-Control-Allow-Origin", "*")
        .expect(200,done)
        // .end(function(err, res) {
        //     if (err) throw err;
        //     });
    })
    // it("returns a user agent", function () {
        
    // })
})