const getContact=((req,res)=>{
    
    res.status(200).json({"message":"get all contacts"})
})

const createContact=((req,res)=>{
    
    res.status(200).json({"message":`create contact ${req.body.name}`})
})
const updateContact=((req,res)=>{
    
    res.status(200).json({"message":`update contact  for${req.params.id}`})
})
const deleteContact=((req,res)=>{
    
    res.status(200).json({"message":`delete contact ${req.params.id}`})
})
module.exports={getContact,createContact,updateContact,deleteContact}