const express = require('express');
const router = express.Router();
const conn = require('../connections');


router.get('/line', async function (req, res, next) {
  data = await conn.line.find();
  res.send(data)
});
router.get('/pie', async function (req, res, next) {
  data = await conn.pie.find();
  res.send(data)
});
router.get('/bar', async function (req, res, next) {
  data = await conn.bar.find();
  res.send(data)
});

router.post('/line', async function (req, res, next) {
  queryEle = Buffer.from(req.body.payload, 'base64').toString();
  data = await conn.line.deleteOne({ _id: queryEle });
  res.send({message:"success"})
});

router.post('/pie', async function (req, res, next) {
  queryEle = Buffer.from(req.body.payload, 'base64').toString();
  data = await conn.pie.deleteOne({ _id: queryEle });
  res.send({message:"success"})
});

router.post('/bar', async function (req, res, next) {
  queryEle = Buffer.from(req.body.payload, 'base64').toString();
  data = await conn.bar.deleteOne({ _id: queryEle });
  console.log(queryEle);
  res.send({message:"success"})
});

module.exports = router;
