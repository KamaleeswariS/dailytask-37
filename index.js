// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialize the Express app
const app = express();

// Route to test server setup
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js File System Task!');
});

// Route to create and read a file
app.get('/file', (req, res) => {
    const filePath = path.join(__dirname, 'example.txt');
    
    // Step 1: Create a file and write content
    fs.writeFile(filePath, 'This is an example text', (err) => {
        if (err) {
            return res.status(500).send('File creation failed!');
        }

        // Step 2: Read the created file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).send('File reading failed!');
            }

            // Step 3: Send the file content in response
            res.send(`File Content: ${data}`);
        });
    });
});

// Start the server on port 3000

app.listen(3000, () => {
    console.log("Server is running in port 3000");
});
