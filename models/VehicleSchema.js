const mongoose = require("mongoose") 
const VehicleSchema = mongoose.Schema({ 
 Vehicle_type: String, 
 color: {
    type: String,
    required: true
}, 
 cost: {
    type: Number,
    min: 3,
    max: 50
  } 
}) 
 
module.exports = mongoose.model("Vehicle", 
VehicleSchema) 