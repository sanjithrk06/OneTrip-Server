import express from 'express';
import { getDestinationByName } from '../controllers/destination.controller.js';

const router = express.Router();

router.get('/single-page/:name', getDestinationByName);

export default router;
