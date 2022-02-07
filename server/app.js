import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import './config';
import { Response } from '@utilities';
import transactionRoutes from './routes/transactionRoutes';
const fileUpload = require('express-fileupload');
var cron = require('node-cron');
import transactionController from './controllers/transactionController';
import transactionService from './services/transactionService';


const PORT = process.env.PORT || 2000;
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const app = express();

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
}));
app.set('trust proxy', true);
// MIDDLEWARES
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  return Response.success(
    res, 200, 'I am alive at this port', PORT )
  });
  app.use('/api/v1/transaction', transactionRoutes);
  
  
  app.listen(PORT, () => {
    console.log(`Server running, ${PORT}`);
  });
  
  // cron.schedule('* * * * *', async() => {
  //   await transactionController.fundAccount({ body: {amount: 100, customerId: 1}});
  // });
  
  
  cron.schedule(process.env.fetchTransactionAndSendToQueue, async () => {
    await transactionService.fetchTransactionAndSendToQueue();
  });
  
  export default app;
