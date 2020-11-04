import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateItemService from '@modules/itens/services/CreateItemService';
import UpdateItemService from '@modules/itens/services/UpdateItemService';

export default class ItensController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { price, description, name, restaurant } = request.body;

    const createItem = container.resolve(CreateItemService);

    const item = await createItem.execute({
      price,
      description,
      name,
      restaurant,
    });

    return response.json(item);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { price, description, name, restaurant } = request.body;
    const { id } = request.params;

    const updateItem = container.resolve(UpdateItemService);

    const item = await updateItem.execute({
      id: parseInt(id),
      price,
      description,
      name,
      restaurant,
    });

    return response.json(item);
  }
}
