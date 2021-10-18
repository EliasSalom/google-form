const express=require("express");
const router = express.Router();
const handlers=require("./handlers/qustionHandler");


router.get('/',handlers.tryfunction);
router.get('/qustion',handlers.get);
router.post('/answer',handlers.set);
module.exports = router;