const router = require('express').Router();
let Internet = require('../models/internet.model');

router.route('/').get((req, res) => {
    Internet.find()
      .then(internet => res.json(internet))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {

    const userId=req.body.userId;
    const specific= req.body.specific;
    const status= req.body.status;
    const data= req.body.data;
    

    const newInternet = new Internet({userId,specific,status,data});

  newInternet.save()
    .then(() => res.json('Internet query added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
