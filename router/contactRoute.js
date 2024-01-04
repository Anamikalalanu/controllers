const express=require("express")
const router=express.Router() //used for routing
const {getContact, createContact, updateContact, deleteContact}=require("../controllers/contactControllers")
router.route('/').get(getContact)
.post(createContact)

router.route('/:id').put(updateContact)
.delete(deleteContact)

module.exports=router