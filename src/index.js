import express from 'express';
import configApp from './config/index.js';
import routes from './routes/index.js';

const app = express();
await configApp(app, routes)
