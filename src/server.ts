import express from 'express';
import { routes } from './routes';
import { requestHandler, errorHandler } from './middlewares';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);
app.use(requestHandler);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} 🚀`)
})