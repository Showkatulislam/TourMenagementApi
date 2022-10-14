const { addTourService, getTourService, getATourService, UpdateAtour } = require("./Tour.route.services");

exports.addTour = async (req, res) => {
  try {
    const result = await addTourService(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    let slt,
      page = 0;
    if (req.query.fields) {
      slt = req.query.fields.split(",").join(" ");
    }
    if (req.query.page) {
      page = req.query.page;
    }
    const result = await getTourService(slt, page);
    res.send(result);
  } catch (error) {
    res.status(400).json({
      message: "Data is not Get",
    });
  }
};

exports.getATour = async(req, res) => {
  try {
    const id=req.params.id
   
    const result=await getATourService(id)
    res.send(result)
  } catch (error) {
    res.status(400).json({
      message: "Data is not Get",
    });
  }
};

exports.updateATour=async(req,res)=>{
    try {
        const id=req.params.id;
        const result=await UpdateAtour(id,req.body)
        res.send(result)
    } catch (error) {
        res.send(400).json({
            message:"Data is not update",
            result:result
        })
    }
}