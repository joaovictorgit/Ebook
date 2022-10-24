import express from 'express';
const router = express.Router();

import LivrosController from '../controllers/livros-controller';
const livrosController = new LivrosController();

router.post('/', (req, res, next) => {
    return livrosController.createBook(req, res);
});

router.get('/', (req, res, next) => {
    return livrosController.showAllBook(req, res);
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return livrosController.showBooksByUserId(id, res);
});

router.get('/book/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return livrosController.showByBookId(id,res);
});

router.patch('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return livrosController.updateBook(id, req, res);
});

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return livrosController.deleteBook(id, res);
});

export default router;