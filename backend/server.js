import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('api is running');
});
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4000;
app.listen(
  PORT,
  console.log(
    `SERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`.green
      .underline.bold
  )
);
