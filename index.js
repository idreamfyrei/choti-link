import express from'express';
import connectMongoDB from './connection.js';
import router from './routes/url.route.js';


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

connectMongoDB(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'))

app.use('/url', router);


app.listen(PORT, () => console.log(`Port is running on ${PORT}`));

