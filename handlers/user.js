const db = require("../database/connection");
function get(req,res) {
    const data = req.body;
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
    db.query("INSERT INTO answer ").then((res) => {
        if (!res.rows.length) {
            res.send(res.rows)
        }
        else{
            res.send({success: false})
        }
    })
}

module.exports = {get, set};