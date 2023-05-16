const express = require('express');
const users = require('./users-router');
const cors = require('cors');
const bodyParser = require('body-parser');
// создали express app
const app = express();
const port = 7542;

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/users');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

app.get('/tasks', async (req, res) => {
    res.send('tasks');
})

// добавляем перехватчик (middleware)
app.use( (req, res) => {
    res.sendStatus(404);
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})