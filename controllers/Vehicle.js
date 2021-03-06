var Vehicle = require('../models/VehicleSchema');

// List of all Vehicles 
exports.Vehicle_list = async function (req, res) {
    try {
        theVehicles = await Vehicle.find();
        res.send(theVehicles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Vehicles. 
exports.Vehicle_detail = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Vehicle detail: ' + req.params.id); 
    console.log("detail" + req.params.id)
    try {
        result = await Vehicle.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Vehicles create on POST. 
exports.Vehicle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Vehicle();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.Vehicle_type = req.body.Vehicle_type;
    document.color = req.body.color;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Vehicles delete form on DELETE. 
exports.Vehicle_delete = async function (req, res) {
    // res.send('NOT IMPLEMENTED: Vehicle delete DELETE ' + req.params.id);
    console.log("delete " + req.params.id)
    try {
        result = await Vehicle.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Vehicles update form on PUT. 
exports.Vehicle_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Vehicle.findById(req.params.id)
        // Do updates of properties 
        if (req.body.Vehicle_type)
            toUpdate.Vehicle_type = req.body.Vehicle_type;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`);
    }
};

// VIEWS 
// Handle a show all view 
exports.Vehicle_view_all_Page = async function (req, res) {
    try {
        theVehicles = await Vehicle.find();
        res.render('Vehicles', { title: 'Vehicle Search Results', results: theVehicles });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle a show one view with id specified by query 
exports.Vehicle_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Vehicle.findById(req.query.id)
        res.render('vehicledetail',
            { title: 'Vehicle Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a vehicle. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Vehicle_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('vehiclecreate', { title: 'Vehicle Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a vehicle. 
// query provides the id 
exports.Vehicle_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Vehicle.findById(req.query.id)
        res.render('vehicleupdate', { title: 'vehicle Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.Vehicle_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Vehicle.findById(req.query.id)
        res.render('vehicledelete', {
            title: 'vehicle Delete', toShow: result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}; 