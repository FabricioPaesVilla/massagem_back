/*import 'dotenv/config'*/ 
import './utils/global.js';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import cors from 'cors'

import adicionarRotas from './router.js'

const servidor = express();
servidor.use(express.json());
servidor.use(cors());

adicionarRotas(servidor);

const PORT = process.env.PORT;
servidor.listen(
  PORT,
  () => console.log(`API subiu na porta ${PORT}!`));