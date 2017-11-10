const express = require('express');
const s3Proxy = require('s3-proxy');

const app = express();

const proxy = s3Proxy({
  bucket: 'elpa.frontside.io',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  overrideCacheControl: 'max-age=100000'
});

app.use('/', proxy);
app.listen(3000);
