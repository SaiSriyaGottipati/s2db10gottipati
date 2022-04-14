var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var vehicle_controller = require('../controllers/Vehicle'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/Vehicles', vehicle_controller.Vehicle_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/Vehicles/:id', vehicle_controller.Vehicle_delete); 
 
// PUT request to update Costume. 
router.put('/Vehicles/:id', vehicle_controller.Vehicle_update_put); 
 
// GET request for one Costume. 
router.get('/Vehicles/:id', vehicle_controller.Vehicle_detail); 
 
// GET request for list of all Costume items. 
router.get('/Vehicles', vehicle_controller.Vehicle_list); 
 
module.exports = router; 