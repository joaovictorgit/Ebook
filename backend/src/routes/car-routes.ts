import express from 'express';
const router = express.Router();

import CarController from '../controllers/car-controller';
const carController = new CarController();

router.post('/', (req, res, next) => {
    return carController.createCar(req, res);
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return carController.showCarByUserID(id, res);
});

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    return carController.deleteCar(id, res);
});

export default router;