import { Router } from 'express';

import RestaurantsController from '@modules/restaurants/infra/http/controllers/RestaurantsController';

const restaurantsRouter = Router();
const restaurantsController = new RestaurantsController();

restaurantsRouter.get('/', restaurantsController.index);
restaurantsRouter.post('/', restaurantsController.create);

export default restaurantsRouter;
