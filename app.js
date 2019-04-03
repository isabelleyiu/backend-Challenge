const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.')
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/contacts/:company', (req, res) => {
  const company = req.params.company;
  console.log(req.params.company)
  const sql = 
  `SELECT DISTINCT permits."Street Number", permits."Street Number Suffix", permits."Street Name", permits."Street Suffix", permits."Unit", permits."Supervisor District", permits.Zipcode, permits.Location 
  FROM contacts INNER JOIN permits ON contacts."Permit Number" = permits."Permit Number" 
  INNER JOIN fire_violations ON permits.Location = fire_violations.Location 
  WHERE contacts."Company Name" = ? 
  AND permits.Status != 'withdrawn'
  AND permits.Status != 'cancelled'`


  db.all(sql, [company], (err, results) => {
    if(err) console.log(err);
    res.json(results);
  });
});

// app.get('/fireviolations/:block/:date')

app.listen(3000, console.log('backend challenge is ON!'));