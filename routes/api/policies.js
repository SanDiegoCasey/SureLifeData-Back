const express = require('express');
const router = express.Router();

//Policy model
const Policy = require('../../models/Policy');

// @route   GET api/policies
// @descr   GET Get all policies
// @access  Public (temporary in dev)

router.get('/', (req, res) => {
    Policy.find()
    .sort({ date: -1})
    .then(policies => res.json(policies))
});

// @route   POST api/policies
// @descr   Create a Post
// @access  Public (temporary in dev)

router.post('/', (req, res) => {
  const requiredFields = ['company', 'typeofins', 'policynum', 'contactnum'];
  console.log(`from router ${req.body}`);
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message)
    }
  }

console.log(req.body);
    Policy.create({
      company: req.body.company,
      typeofins: req.body.typeofins,
      policynum: req.body.policynum,
      contactnum: req.body.contactnum,
      userID: req.body.userID,
      dollarvalue: req.body.dollarvalue
    })
    .then(policy => {
      res.status(201).json(policy);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      });
});

// @route   DELETE api/policies
// @descr   DELETE a policy
// @access  Public (temporary in dev)

router.delete('/:id', (req, res) => {
    Policy.findById(req.params.id)
      .then(policy => policy.remove().then(() => res.json({success : true})))
      .catch(err => res.status(404).json({success: false}))

    });


module.exports = router;
