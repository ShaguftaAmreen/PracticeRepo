const express = require('express');
const app = express();
const { connect } = require("./Config/db");
const signUpModel = require('./models/signup');
const cors = require("cors");

app.use(cors()); // Enable CORS for all routes

// Middleware to parse JSON
app.use(express.json());


// Connect to the database
connect();

// Test route
app.get("/", (req, res) => {
    res.send("MongoDB connected");
});

// Signup route
app.post('/api/signup', (req, res) => {
    const { name, email, password, confirmpassword } = req.body;

    // Validate input
    if (!name || !email || !password || !confirmpassword) {
        return res.status(400).send("All fields are required.");
    }

    // Check password confirmation
    if (password !== confirmpassword) {
        return res.status(400).send("Passwords do not match.");
    }

    // Create and save user
    const signup = new signUpModel({ name, email, password });

    signup.save()
        .then(() => res.status(201).send(`User ${name} signed up successfully!`))
        .catch((error) => res.status(500).send(`Error signing up: ${error.message}`));
});

// Start the server
app.listen(4000, () => {
    console.log("Server running on port 4000");
});
