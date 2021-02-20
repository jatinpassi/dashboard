const express = require('express');
const router = express.Router();
const conn = require('../connections');



// [fake user logic]

// const bcrypt = require('bcrypt');
// const Chance = require('chance')
// const chance = new Chance();
// function fakeUser() {
//   let users = [];
//   for (let i = 0; i < 100000;i++){
//     users.push({
//       userName: chance.first(),
//       lastName: chance.last(),
//       email: chance.email({ domain: "gmail.com" }),
//       gender: chance.gender(),
//       dob:chance.birthday({string: true, american: false}),
//       phone_number: [chance.phone()],
//       password: "65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5",//sha256
//       address: {
//         location:chance.address(),
//         city: chance.city(),
//         country: chance.country(),
//       }
//     })
//   }
//   return users;
// }

// router.get('/fakeUser', async function (req, res, next) {
//   users = await fakeUser();
//   data = await conn.user.insertMany(users);
//   res.send({message:"done"})
// });
router.get("/", function (req, res, next) {
  res.status(200).send({message:"hi baby"})
})

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
