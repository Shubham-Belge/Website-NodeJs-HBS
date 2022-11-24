const { request, response } = require('express');
const hbs = require('hbs');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/main');
const details = require('./models/details');
const Slider = require('./models/slider');
const Service = require('./models/service');
const bodyParser = require('body-parser');



// app.get("/", (req, res) => {
//     res.send("this is home")
// })

app.use(bodyParser.urlencoded({
    extended: true
}))
//  /static/css/style.css
app.use('/static', express.static("public"))
app.use("/", routes)




//(template engine)
app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://localhost/website_tut", () => {
    console.log("database connected");

    // Service.create([
    //     {
    //         icon: 'fab fa-accusoft',
    //         title: 'Provide Best Courses',
    //         description: 'we provide courses that will lead you to a best future',
    //         linkText: 'https//www.learncodewithrushikesh.com',
    //         link: 'Check'
    //     },
    //     {
    //         icon: "fab fa-affiliatetheme",
    //         title: 'Learn Projects',
    //         description: 'we provide courses that will lead you to a best future',
    //         linkText: 'https//www.learncodewithrushikesh.com',
    //         link: 'Learn'
    //     },
    //     {
    //         icon: "fab fa-affiliatetheme",
    //         title: 'Learn Projects',
    //         description: 'we provide courses that will lead you to a best future',
    //         linkText: 'https//www.learncodewithrushikesh.com',
    //         link: 'Learn'
    //     },
    // ])



    // Slider.create([
    //     {
    //         title: "learn javascript in easy manner",
    //         subTitle: "javascript is one of the most popular language",
    //         imageUrl: "/static/images/pic1.png"
    //     },
    //     {
    //         title: "what is Django in python?",
    //         subTitle: "Django is most popular framework in python",
    //         imageUrl: "/static/images/pic2.png"
    //     },
    //     {
    //         title: "what about java",
    //         subTitle: "java is mostly used for security purpose",
    //         imageUrl: "/static/images/pic3.png"
    //     }
    // ])

    //details.create({
    //     brandName: "Info Technical Solution",
    //     brandIconUrl: "/static/images/website_logo.jpg",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         },
    //     ]
    // })

})


app.listen(process.env.PORT | 5555, () => {
    console.log("server is running on port 5555");
})
