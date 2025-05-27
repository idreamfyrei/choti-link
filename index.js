import express from'express';
import connectMongoDB from './connection.js';
import path from 'path';
import cookieParser from 'cookie-parser';

import { allowLoggedInUser, checkAuth } from './middlewares/auth.middlewares.js';
import router from './routes/url.route.js';
import staticRoute from './routes/static.route.js'
import userRoute from './routes/user.route.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


const PORT = process.env.PORT || 8000;

connectMongoDB(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'))

//* Inline Middleware
app.use('/url', allowLoggedInUser, router);

app.use('/',checkAuth, staticRoute);

app.use('/user', userRoute);

app.listen(PORT, () => console.log(`Port is running on ${PORT}`));

