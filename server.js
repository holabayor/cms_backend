import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.disable('x-powered-by');

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
