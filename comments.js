// Create web server
// 1. Load the express module
// 2. Create an express application
// 3. Define a route on the application
// 4. Start the server
// 5. Test the server

// 1. Load the express module
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Define a route on the application
app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { username: 'Alice', comment: 'I love cats!' },
      { username: 'Bob', comment: 'I love dogs!' }
    ]
  });
});

// 4. Start the server
const port = 4001;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// 5. Test the server
// http://localhost:4001/comments
// {"comments":[{"username":"Alice","comment":"I love cats!"},{"username":"Bob","comment":"I love dogs!"}]}