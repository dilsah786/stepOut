const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    trainName:{type:String,required:true},
    trainNumber:{type:String,required:true},
    source : {type:String,required:true},
    destination:{type:String,required:true},
    bookedSeat:{type:Number,required:true},
    bookingId:{type:String,required:true},
    bookingTime:{type:String,required:true},
    userId:{type:String,required:true}
});

const BookingModel = mongoose.model("booking",bookingSchema)

module.exports = {bookingSchema,BookingModel}