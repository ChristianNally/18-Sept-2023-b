require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// require our routers
const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

// use our routers
app.use('/products', productRouter);
app.use('/api/admin/blogposts', blogpostRouter); // /api/admin/blogposts

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
