const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
let app = express();
let db = require("./db/db.json");
app.use(express.json());