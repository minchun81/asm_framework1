const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user');
const cors = require('cors');

const app = express()
const port = 3000
app.set('view engine', 'ejs');

// chỉ định thư mục gốc
app.use(express.static('assets'))
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


// kết nối database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '321',
    database: 'asm_framework'
});

app.use(cors());
// Use the post routes
app.use('/api', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
