const router = require('express').Router();
let Invoice = require('../models/invoice.model');

router.route('/').get((req, res) => {
    Invoice.find().sort({createdAt:-1})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Invoice.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').put((req, res) => {
    const userId=req.body.userId;
    const amount=req.body.amount;
    const newInvoice = new Invoice({userId,amount});

  newInvoice.save()
    .then(() => res.json('New User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
