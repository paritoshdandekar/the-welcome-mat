const router = require('express').Router();
let Menu = require('../models/menu.model');

router.route('/:id').delete((req, res) => {
    Menu.findByIdAndDelete(req.params.id)
      .then(() => res.json('Menu item deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const menu_name=req.body.menu_name;
    const menu_type=req.body.menu_type;
    const menu_price=req.body.menu_price;
    const menu_imglink=req.body.imglink;

    const newMenu = new Menu({menu_name,menu_type,menu_price,menu_imglink});

  newMenu.save()
    .then(() => res.json('New Menu added!'))
    .catch(err => res.status(400).json('Error: ' + err));


  });

module.exports = router;