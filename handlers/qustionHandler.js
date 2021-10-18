const db = require("../database/connection");
function get(req,res) {
    db.query("SELECT * FROM qustion").then((res) => {
        if (!res.rows.length) {
            res.send(res.rows)
        }
        else{
            res.send({success: false})
        }
    })
};
function set(req,res) {
    const data = req.body;
    db.query("INSERT INTO answer WHERE ").then((res) => {
        if (!res.rows.length) {
            res.send(res.rows)
        }
        else{
            res.send({success: false})
        }
    })
}
function tryfunction(req,res) {
    res.send("this is work");
}

module.exports = {get, set, tryfunction};