// Check the README.md file for instructions to the exercise

// Set up your web server in Node.js and import the necessary modules such as http, fs, and path into your server.ts file.
// Create a route for /view-image that will show the image veryhappydog.jpg to the user when the route is opened in the browser. For example: http://localhost:3000/view-image
// Make sure the response Content-Type is set to image/jpeg.
// Compile your src/server.ts to dist/server.js and run the server with node dist/server.js.
// Commit and push you changes once you are done. Create a PR and merge your dev branch to your main branch.

import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  if (req.url === "/view-image") {
    const imagePath = path.join(__dirname, "images/", "veryhappydog.jpg");
    console.log(`Serving image from: ${imagePath}`);
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading image");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
