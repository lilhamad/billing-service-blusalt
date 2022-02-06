import { Router } from 'express';
import transactionController from '../controllers/transactionController';
const router = Router();
router.post('/create', transactionController.fundAccount);

export default router;