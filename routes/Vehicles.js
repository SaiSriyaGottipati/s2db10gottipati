var express = require('express');
const vehicle_controllers= require('../controllers/Vehicle'); 
var router = express.Router();

/* GET home page. */
router.get('/', vehicle_controllers.Vehicle_view_all_Page);

module.exports = router;
