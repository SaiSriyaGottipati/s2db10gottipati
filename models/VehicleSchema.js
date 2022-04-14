const mongoose = require("mongoose") 
const VehicleSchema = mongoose.Schema({ 
 Vehicle_type: String, 
 color: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Vehicle", 
VehicleSchema) 