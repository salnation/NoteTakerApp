const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
let app = express();
let db = require("./db/db.json");
// first app.use requests 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// parse command - JSON.parse to retrieve from directory 
const dbNotes = JSON.parse(
fs.readFileSync(path.join(__dirname, "/db/db.json"), (err, data) => {
    if (err) throw err;
})
);

// new function created for dbupdate calling JSON.stringify
const dbUpdate = dbNotes => {
fs.writeFileSync(
    path.join(__dirname, "/db/db.json"),
    JSON.stringify(dbNotes),
    err => {
    if (err) throw err;
    }
);
};

// these first app.get requests are for the html pages
app.get("/assets/css/styles.css", function(req, res) {
res.sendFile(path.join(__dirname, "/public/assets/css/style.css"));
});
    
app.get("/assets/js/index.js", function(req, res) {
res.sendFile(path.join(__dirname, "/public/assets/js/index.js"));
});
    
app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, "public/index.html"));
});
    
app.get("/notes", function(req, res) {
res.sendFile(path.join(__dirname, "/public/notes.html"));
});
    
app.get("/api/notes", function(req, res) {
return res.json(dbNotes);
});
