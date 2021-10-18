const express=require("express");
const router = express.Router();
const handlers=require("./handlers/qustionHandler");

router.get('/',handlers.get);

module.exports = router;