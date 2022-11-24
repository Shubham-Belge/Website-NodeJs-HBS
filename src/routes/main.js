const express = require('express');

const routes = express.Router();

const details = require('../models/details');
const slider = require('../models/slider');
const Service = require('../models/service');
const contact = require('../models/contact');




routes.get("/", async (req, res) => {

    const detail = await details.findOne({ "_id": "636b474b189b9cb3795f6ed6" })
    const slides = await slider.find()
    // console.log(slides);
    // console.log(detail);

    const services = await Service.find()

    res.render("index", {
        detail: detail,
        slides: slides,
        services: services
    })
})

routes.get("/gallery", async (req, res) => {
    const detail = await details.findOne({ "_id": "636b474b189b9cb3795f6ed6" })
    res.render("gallery", {
        detail: detail
    })
});


// process contact form
routes.post('/process-contact-form', async (req, res) => {

    // console.log("we got data");
    console.log(req.body);

    //save data to db
    try {

        const data = await contact.create(req.body)
        console.log(data);
        res.redirect("/")


    }
    catch (e) {
        console.log(e);
        res.redirect("/")
    }

})




module.exports = routes