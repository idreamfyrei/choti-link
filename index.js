import express from'express';
import connectMongoDB from './connection.js';
import path from 'path';
import cookieParser from 'cookie-parser';

import { checkForAuth, restrictUser } from './middlewares/auth.middlewares.js';
import router from './routes/url.route.js';
import staticRoute from './routes/static.route.js'
import userRoute from './routes/user.route.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuth);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


const PORT = process.env.PORT || 8000;

connectMongoDB(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'))

//* Inline Middleware
app.use('/url', restrictUser(['user', 'admin']), router);
app.use('/user', userRoute);
app.use('/', staticRoute);

app.listen(PORT, () => console.log(`Port is running on ${PORT}`));

