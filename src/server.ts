import express from 'express';
import { routes } from './routes';
const cors = require('cors')
import { requestHandler, errorHandler } from './middlewares';

const app = express();

app.use(express.json());

app.use(routes);
app.use(errorHandler);
app.use(cors());
app.use(requestHandler);
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} 🚀`)
})