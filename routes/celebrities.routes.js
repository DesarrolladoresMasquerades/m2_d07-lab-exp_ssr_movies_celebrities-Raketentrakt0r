const router = require("express").Router();


const res = require("express/lib/response");
const Celebrity = require("../models/Celebrity.model")



router.get("/celebrity-create",(req,res)=>{
   
        res.render("celebrities/create")
    })   


router.post("/celebrities/create", (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    const catchPhrase = req.body.catchPhrase

    Celebrity.create({name, occupation,catchPhrase})
    .then(() =>
        res.redirect("/celebrities")
        )
        .catch((err)=>{
            console.log(err)
            res.redirect("celebrities/new-celebrity")
         })
    
    })




module.exports = router;