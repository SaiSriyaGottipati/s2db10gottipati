var Vehicle = require('../models/VehicleSchema'); 
 
// List of all Vehicles 
exports.Vehicle_list = async function(req, res) { 
    try{ 
        theVehicles = await Vehicle.find(); 
        res.send(theVehicles); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
}; 
 
// for a specific Vehicles. 
exports.Vehicle_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehicle detail: ' + req.params.id); 
}; 
 
// Handle Vehicles create on POST. 
exports.Vehicle_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Vehicle(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.Vehicle_type = req.body.Vehicle_type; 
    document.color = req.body.color; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 
 
// Handle Vehicles delete form on DELETE. 
exports.Vehicle_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehicle delete DELETE ' + req.params.id); 
}; 
 
// Handle Vehicles update form on PUT. 
exports.Vehicle_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehicle update PUT' + req.params.id); 
};

// VIEWS 
// Handle a show all view 
exports.Vehicle_view_all_Page = async function(req, res) { 
    try{ 
        theVehicles = await Vehicle.find(); 
        res.render('Vehicles', { title: 'Vehicle Search Results', results: theVehicles }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 