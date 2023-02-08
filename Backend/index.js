const express = require('express');
const app = express();
const port = 5000;
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: '2170032411',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
});

app.get("/", (req, res) =>{
    res.send("bicycle loan system");
});

app.use(express.json());

client.connect().then(() => {
    console.log('Connected to the database');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});