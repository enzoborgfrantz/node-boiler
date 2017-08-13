import 'babel-polyfill';
import { startServer } from './server';
import fetch from 'node-fetch';

global.fetch = fetch;
startServer();
