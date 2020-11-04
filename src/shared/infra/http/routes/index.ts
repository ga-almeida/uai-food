import { Router } from 'express';

import restaurantsRouter from '@modules/restaurants/infra/http/routes/restaurants.routes';
import itensRouter from '@modules/itens/infra/http/routes/itens.routes';

const routes = Router();

routes.use('/restaurants', restaurantsRouter);
routes.use('/itens', itensRouter);

export default routes;
