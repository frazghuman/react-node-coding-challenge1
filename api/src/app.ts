import express from 'express';
import router from './router';
import cors from 'cors';

const app = express();

app.disable('etag');
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log('Request body:', req.body);
    next();
})

app.use(router);

export default app;
