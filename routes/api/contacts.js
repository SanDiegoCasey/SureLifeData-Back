const express = require('express');
const router = express.Router();

//Contact model
const Contact = require('../../models/Contact');

// @route   GET api/contacts
// @descr   GET Get all contacts
// @access  Public (temporary in dev)

router.get('/', (req, res) => {
    Contact.find()
    .sort({ date: -1})
    .then(contacts => res.json(contacts))
});

// @route   POST api/contact
// @descr   Create a contact
// @access  Public (temporary in dev)

router.post('/', (req, res) => {
  const requiredFields = ['username', 'firstname', 'lastname'];
  console.log("looky here");
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
    Contact.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      img: req.body.img
    })
    .then(contact => {
      res.status(201).json(contact);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      });
});

// @route   DELETE api/contacts
// @descr   DELETE a contact
// @access  Public (temporary in dev)

router.delete('/:id', (req, res) => {
    Contact.findById(req.params.id)
      .then(contact => contact.remove().then(() => res.json({success : true})))
      .catch(err => res.status(404).json({success: false}))

    });


module.exports = router;
