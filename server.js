const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const events = require("events");

connectDb();

// Increase the default max listeners to avoid memory leak warning
events.EventEmitter.defaultMaxListeners = 15;

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Routes for the contacts API
app.use("/api/contacts", require("./routes/contactRoutes"));

// Routes for the users API
app.use("/api/users", require("./routes/userRoutes"));  

// Middleware for error handling (must be after routes)
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
