require('dotenv').config()
const express = require('express')
const compression = require('compression');

const app = express();
const port = process.env.PORT
