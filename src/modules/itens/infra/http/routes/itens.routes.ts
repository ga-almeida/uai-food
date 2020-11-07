import { Router } from 'express';

import ItensController from '@modules/itens/infra/http/controllers/ItensController';

const itensRouter = Router();
const itensController = new ItensController();

itensRouter.post('/', itensController.create);
itensRouter.put('/:id/:restaurantId', itensController.update);

export default itensRouter;
