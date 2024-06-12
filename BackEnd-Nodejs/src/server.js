const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cors = require('cors');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

// chỉ định thư mục gốc
app.use(express.static('assets'));
app.use(express.static('js'))
app.use(express.static('uploads'))
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
// Use the post routes
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
