const router = require('express').Router();
let Menu = require('../models/menu.model');

router.route('/:id').delete((req, res) => {
    Menu.findByIdAndDelete(req.params.id)
      .then(() => res.json('Menu item deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;