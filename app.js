const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    var today = new Date(); 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    var currentDay = today.getDay(); 
    // https://www.w3schools.com/jsref/jsref_getday.asp
    var weekDays= ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = weekDays[currentDay]; 
    
    res.render("list", {kindOfDay: dayOfWeek});
    
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
}); 