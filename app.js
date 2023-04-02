const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); 
// because module is local and not using npm

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    const dayOfWeek = date.getDate();
    res.render("list", {listTitle: dayOfWeek, newListItems: items});
});

app.post("/", function(req, res) {
    const item = req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item); //  passes each new to do list item to the global "items" array
        res.redirect("/"); // when post request is triggered, redirect to home route
        // bringing you back to app.get("/", function(req, res) {
    } 
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
}); 