import express from'express';
import connectMongoDB from './connection.js';
import router from './routes/url.route.js';
import path from 'path';
import staticRoute from './routes/static.route.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


const PORT = process.env.PORT || 8000;

connectMongoDB(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'))

app.use('/url', router);

app.use('/', staticRoute);

app.listen(PORT, () => console.log(`Port is running on ${PORT}`));

