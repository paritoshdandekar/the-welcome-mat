const router = require('express').Router();
let Internet = require('../models/internet.model');

router.route('/').get((req, res) => {
    Internet.find()
      .then(internet => res.json(internet))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {

    const userId=req.body.userId;
    const status= req.body.status;
    const data= req.body.data;
    const specific= req.body.specific;
    const isdownload= req.body.isdownload;
    const isupload= req.body.isupload;
    const isfluctuate= req.body.isfluctuate;
    const isrange= req.body.isrange;

    const newInternet = new Internet({userId,status,data,specific,isdownload,isupload,isfluctuate,isrange});

  newInternet.save()
    .then(() => res.json('Internet query added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});