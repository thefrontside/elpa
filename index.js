const express = require('express');
const s3Proxy = require('s3-proxy');

const app = express();

app.use('/', s3Proxy({
  bucket: 'elpa.frontside.io',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  overrideCacheControl: 'max-age=100000'
}));

const server = new Promise((resolve, reject) => {
  app.listen(process.env.PORT, (err) => {
    if (err) {
      reject(err);
    } else {
      console.log('listening on port 3000');
      resolve();
    }
  });
});

module.exports = server;
