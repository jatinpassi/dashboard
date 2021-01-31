const conn = require('./db-config');

module.exports = {
    line:  conn.model("Line",require("./schemas/line-schema")),
    pie:  conn.model("Pie",require("./schemas/pie-schema")),
    bar:  conn.model("Bar",require("./schemas/bar-schema"))
};