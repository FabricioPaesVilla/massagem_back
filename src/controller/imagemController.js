import { consultarMassagemPorId, alterarImagemMassagem} from "../repository/massagemRepository.js"
import { Router } from "express";

const endpoints = Router();
//----
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//const fs = require('fs');
//const path = require('path');
//const multer = require('multer');

import fs from 'fs';
import path from 'path';
import multer from 'multer';
//----


const uploadPath = path.join(__dirname, '../../uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

endpoints.post('/massagem/:id/imagem', upload.single('imagem'),async (req, resp) => {
    try {
        const { id } = req.params;
        
        //processamento
        const imagem = req.file.filename;
        await alterarImagemMassagem(id, imagem);
        //-------

    
        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.put('/massagem/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        const { id } = req.params;

        //processamento
        const registro = await consultarMassagemPorId(id);
        if (!registro) return resp.status(400).send(criarErro(err))
        
        const imagemAntiga = registro.imagem;
        if (imagemAntiga) {
            const caminhoAntigo = path.join(uploadPath, imagemAntiga);
            if (fs.existsSync(caminhoAntigo)) fs.unlinkSync(caminhoAntigo);
        }

        const novaImagem = req.file.filename;
        await alterarImagemMassagem(id, novaImagem);
        //----------


        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.delete('/massagem/:id/imagem', async (req, resp) => {
    try {
        const { id } = req.params;

        //processamento
        const registro = await consultarMassagemPorId(id);
        if (!registro) return resp.status(400).send(criarErro(err))

        const imagem = registro.imagem;
        if (imagem) {
            const caminho = path.join(uploadPath, imagem);
            if (fs.existsSync(caminho)) fs.unlinkSync(caminho);
        }
        await alterarImagemMassagem(id, null);
        //-----------

        resp.status(204).send();
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})


export default endpoints;