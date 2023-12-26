require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = require('./environments/environment')
const cors = require('cors');
app.options("*", cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to markup convertor backend! Please use valid url to proceed' });
});

let apiRoutes = require("./routes");
app.use("/api", apiRoutes);
// Start the server
const PORT = environment.port || 3500;
const HOST = "0.0.0.0";
const server = app.listen(PORT, HOST,() => {
    const port = server.address().port;
    console.log(`Server running on port ${port}`);
});