import express from 'express';
import mongoose from 'mongoose';
import config from './Config/config.js';
import Userroutes from './Routes/Userroutes.js'
import authRoutes from './Routes/authRoutes.js'
import Addroutes from './Routes/Addroutes.js'
const app = express();
app.use(express.json());
app.use('/register', Userroutes);
app.use('/login',authRoutes)
app.use('/add',Addroutes)

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`)))
  .catch((error) => console.log(error));



