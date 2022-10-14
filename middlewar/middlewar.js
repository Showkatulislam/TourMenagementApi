
let count=0;
const ViewCounter=(req,res,next)=>{
    console.log(count)
    count++;
    next()
}

module.exports=ViewCounter