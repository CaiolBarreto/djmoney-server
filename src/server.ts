import express from 'express';
import { routes } from './routes';
import { requestHandler, errorHandler } from './middlewares';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);
app.use(requestHandler);

app.listen(3001, () => console.log("Server is running in port 3001 🚀"))