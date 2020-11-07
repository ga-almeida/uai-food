import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IItensRepository from '@modules/itens/repositories/IItensRepository';
import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';
import Item from '@modules/itens/infra/typeorm/entities/Item';

interface IRequest {
  id: number;
  name: string;
  description: string;
  price: number;
  restaurant: Restaurant;
  restaurantDoItem: {
    id: number;
  };
}

@injectable()
class CreateItemService {
  constructor(
    @inject('ItensRepository')
    private itensRepository: IItensRepository,
  ) {}

  public async execute({
    price,
    description,
    name,
    restaurant,
    id,
    restaurantDoItem,
  }: IRequest): Promise<Item> {
    const itemExistName = await this.itensRepository.findByIdInRestaurant({
      id,
      restaurant: restaurantDoItem as Restaurant,
    });

    if (!itemExistName) {
      throw new AppError('Does not exist item in the restaurant!', 400);
    }

    const item = await this.itensRepository.update({
      id,
      price,
      description,
      name,
      restaurant,
    });

    return item;
  }
}

export default CreateItemService;
