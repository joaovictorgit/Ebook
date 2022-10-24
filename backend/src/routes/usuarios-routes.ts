import express from 'express';
const router = express.Router();

import UsuarioController from '../controllers/usuarios-controller';
const usuarioController: UsuarioController = new UsuarioController();

router.post('/', (req, res, next) => {
    return usuarioController.createUser(req, res);
});

router.post('/login', (req, res, next) => {
    return usuarioController.login(req, res);
});

router.get('/', (req, res, next) => {
    return usuarioController.showAllUsers(req, res);
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return usuarioController.showByUserId(id, res);
});

router.patch('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return usuarioController.updateUser(id, req, res);
});

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return usuarioController.deleteUser(id, res);
});

export default router;