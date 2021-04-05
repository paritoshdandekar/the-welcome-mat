const router = require('express').Router();
let Menu = require('../models/menu.model');

router.route('/:id').delete((req, res) => {
  Menu.findByIdAndDelete(req.params.id)
    .then(() => res.json('Menu item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/breakfast').post((req, res) => {
  menu_type.find({ menu_type: 'breakfast' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/lunch').post((req,res)=>{
  menu_type.find({ menu_type: 'lunch' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/dinner').post((req,res)=>{
  menu_type.find({ menu_type: 'dinner' })
    .then((menus) => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const menu_name = req.body.menu_name;
  const menu_type = req.body.menu_type;
  const menu_price = req.body.menu_price;
  const menu_imglink = req.body.menu_imglink;

  const newMenu = new Menu({ menu_name, menu_type, menu_price, menu_imglink });

  newMenu.save()
    .then(() => res.json('New Menu added!'))
    .catch(err => res.status(400).json('Error: ' + err));


});

module.exports = router;