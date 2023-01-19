const request = require('request');
const fs = require('fs');

const fetch = (url, path) => {
  request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      console.log('error:', error);
    }
    
    fs.writeFile(path, body, (err) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    });
  });
};

fetch(process.argv[2], process.argv[3]);