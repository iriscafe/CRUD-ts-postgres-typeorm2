import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import productsRouter from './routes/products.routes'

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(productsRouter);

export default app;