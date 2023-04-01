const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    let today = new Date(); 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let dayOfWeek = today.toLocaleDateString("en-US",options);
     
    
    res.render("list", {kindOfDay: dayOfWeek, newListItems: items});
    
});

app.post("/", function(req, res) {
    let item = req.body.newItem;
    items.push(item); //  passes each new to do list item to the global "items" array

    res.redirect("/"); // when post request is triggered, redirect to home route
    // bringing you back to app.get("/", function(req, res) {

})

app.listen(3000, function() {
    console.log("Server listening on port 3000");
}); 