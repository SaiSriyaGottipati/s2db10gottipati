var express = require('express');
const vehicle_controllers = require('../controllers/Vehicle');
var router = express.Router();

/* GET home page. */
router.get('/', vehicle_controllers.Vehicle_view_all_Page);

/* GET detail Vehicles page */
router.get('/detail', vehicle_controllers.Vehicle_view_one_Page);

/* GET create costume page */
router.get('/create', vehicle_controllers.Vehicle_create_Page);

/* GET create update page */ 
router.get('/update', vehicle_controllers.Vehicle_update_Page); 

/* GET delete costume page */ 
router.get('/delete', vehicle_controllers.Vehicle_delete_Page); 
 

module.exports = router;
