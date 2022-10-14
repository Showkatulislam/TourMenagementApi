const Tour = require("../model/Tour")

exports.addTourService=async(data)=>{
    const result=await Tour.create(data)
    return result;
}

exports.getTourService=async(data,page)=>{
    const skipPage=page-1;
    const result=await Tour.find({}).sort("tourCost").select(data).skip(skipPage*3).limit(3);
    return result;
}

exports.getATourService=async(id)=>{
    Tour.pre()
    const result=await Tour.findOne({_id:id});
    return result;
}


exports.UpdateAtour=async(id,data)=>{
    
    const result=await Tour.updateOne({_id:id},{$set:data},{
        runValidators:true
    })
    return result;
}