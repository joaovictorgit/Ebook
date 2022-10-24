import express, { Router } from 'express';
import RouterUsuarios from './usuarios-routes';
import RouterLivros from './livros-routes';
import RouterCarrinhos from './car-routes';
const router = express.Router();

router.use('/usuarios', RouterUsuarios);
router.use('/livros', RouterLivros);
router.use('/carrinhos', RouterCarrinhos);

export default router;