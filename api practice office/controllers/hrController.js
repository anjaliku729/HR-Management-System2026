const hrModel = require('../models/hr')



const hrDisplay = async(req,res)=> {
    try {
        const hr = await hrModel.find()
        res.json(hr)
    } catch (error)  {

        console.log(error)
    } 
}

const hrCreate = async(req,res)=> {
    try {
     // console.log(req.body) //object
     const {name, email, city, phone} = req.body
     await hrModel.create({
        name,
        email,
        city,
        phone
     })

     res.json("hr create")
    } catch (error)  {

        console.log(error)
    } 
}










const hrView = async(req,res)=> {
    try {
    // console.log(req.params.id)
    const hr = await hrModel.findById(req.params.id)
    
    res.json(hr)

    } catch (error)  {
        console.log(error)
    } 
}



const hrUpdate = async(req,res)=> {
    try {
        // console.log(req.params.id)
        const id = req.params.id;
        const {name, email, city, phone} = req.body;
        await hrModel.findByIdAndUpdate(id,{
            name,
            email,
            city,
            phone
        })
        res.json( "hr update")
    } catch (error) {
        console.log(error)
    }
}



const hrDelete = async (req, res) => {
    try {
        //console.log(req.params.id)
        await hrModel.findByIdAndDelete(req.params.id);
        res.json("hr delete");

    }catch (error){
        console.log(error);
    }
};











module.exports = {
    hrDisplay,
    hrCreate,
    hrView,
    hrUpdate,
    hrDelete
}