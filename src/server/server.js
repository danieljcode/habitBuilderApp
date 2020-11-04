const express = require("express");
const BodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const { dbURI } = require("../../config.json")

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(express.json());

mongoose.connect(dbURI, {useNewUrlParser: true});


app.post('/addHabit', function (request, response) {

})

app.get("/:id", (request, response) => {

});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});