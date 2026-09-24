import express from 'express';
import healthRouter from './routes/health';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', healthRouter);

app.get('/', (req, res) => {
  res.send('Hello from dummy app running in Docker!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
