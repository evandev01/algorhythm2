// Requiring necessary npm packages
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3001;
// require('dotenv').config()
// const routes = require("./routes");
// const db = require("./model");

// Define middleware here
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to SQL DB
// db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
// });