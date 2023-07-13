import db from './config/dbconnect.js';
import express, { request, response } from 'express';
import routes from './routes/index.js';

db.on('erro', console.log.bind(console, 'erro de conexão'));
db.once('open', () => {
    console.log('conexão com o banco de dados feita com sucesso');
});

const app = express();
app.use(express.json());
routes(app);

export default app;