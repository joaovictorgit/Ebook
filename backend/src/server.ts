import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from '../src/routes/index';

dotenv.config({ path: '.env' });
const port = 4444;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(port, () => {
    console.log("Servidor rodando na porta "+port);
});