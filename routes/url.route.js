import express from 'express';
import { handleGetUrlShortener, handleRedirectURL, handleAnalytics } from '../controllers/url.controller.js';

const router = express.Router();

router.post('/', handleGetUrlShortener);

router.get('/:shortID', handleRedirectURL);

router.get('/analytics/:shortID', handleAnalytics);

export default router;

