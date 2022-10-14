const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "name must be more then 3"],
      maxLength: [100, "name must be more then 100"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minLength: [3, "Description must be more then 3"],
      maxLength: [200, "Description must be more then 200"],
      trim: true,
    },
    tourCost: {
      type: Number,
      required: true,
      min: [0, "Cost Could not be Nagative"],
    },
    country: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enums: {
        values: ["available", "not available"],
        message: "Fill status",
      },
    },
    image:{
      type:String,
      required:true
    },
    viewCount:{
      type:Number,
      default:0
    }
  },
  { timestamps: true }
);

TourSchema.methods.logger=function(){
  console.log("Data saved for")
}

const Tour=mongoose.model('Tour',TourSchema)

module.exports=Tour