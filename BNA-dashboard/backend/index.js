require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const cors = require("cors");
const routes = require("./routes/main.route");
const config_port = require("./config/PORT.json");
const config_uri = require("./config/DB.json");

const PORT = process?.env?.PORT || config_port.PORT;
const app = express();
app.use(cors());
app.use(express.json());


// Connect MongoDB .
mongoose.connect(config_uri.uri);

// Use Routes
app.use(routes);

//Listen APP
app.listen(PORT, () => console.log(`LISTENING ON ${PORT}`));
