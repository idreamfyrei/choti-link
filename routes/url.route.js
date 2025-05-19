import express from 'express';
import {handleGetUrlShortener} from '../controllers/url.controller.js';

const router = express.Router();

router.post('/', handleGetUrlShortener);

export default router;

