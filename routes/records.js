const express = require("express");
const router = express.Router();
const { Records } = require("../startup/db");
const Joi = require("joi");
// for sure about request data's schema
const filterSchema = {
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  minCount: Joi.number().required(),
  maxCount: Joi.number().required()
};
router
  .route("/")
  .post(filterRecord)
  .get(getRecords);

function filterRecord(req, res) {
  const validateResult = Joi.validate(req.body, filterSchema);
  if (validateResult.error) {
    res.status(406).json({ msg: validateResult.error.details[0].message });
    return;
  }
  let $match = {
    createdAt: { $gte: new Date(req.body.startDate), $lte: new Date(req.body.endDate) },
    totalCounts: { $gte: req.body.minCount, $lte: req.body.maxCount }
  };
  let $project = {
    _id: 0,
    key: "$key",
    createdAt: "$createdAt",
    totalCounts: {$sum: "$counts"}
  }
  let response = {};
  Records.aggregate([
    { $project },
    { $match },
    {
      $sort: { "totalCounts": 1 }
    }
  ]).then(data => {
    response.code = 0;
    response.msg = "Success";
    response.records = data;
    res.status(200).send(response)
  }).catch(err => {
    response.code = -1;
    response.msg = err.errmsg;
    res.status(400).send(response)
  });
}
// for checking of DB connection
function getRecords(req, res) {
  Records.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).send(err)
    });
}

module.exports = router;
