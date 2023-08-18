const express = require('express')
const productRoute = require('./route/product')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/ecommerse', {
  useNewUrlParser: true,
  //useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database successfully');
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});

app.use([bodyParser.urlencoded({extended: true}), express.json()])
app.use(cors())
app.use('/products', productRoute)

app.listen(port, () => {
    console.log('Working on port 3000')
})
module.exports = app