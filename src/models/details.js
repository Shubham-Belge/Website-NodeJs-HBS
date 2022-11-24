const mongoose = require('mongoose');
const details = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [{
        label: String,
        url: String
    },
    ],
})



module.exports = mongoose.model("details", details)