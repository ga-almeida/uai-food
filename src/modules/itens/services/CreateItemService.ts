import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IItensRepository from '@modules/itens/repositories/IItensRepository';
import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';
import Item from '@modules/itens/infra/typeorm/entities/Item';

interface IRequest {
  name: string;
  description: string;
  price: number;
  restaurant: Restaurant;
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
  }: IRequest): Promise<Item> {
    const itemExistName = await this.itensRepository.findByName({
      name,
      restaurant,
    });

    if (itemExistName) {
      throw new AppError(
        'There is already an item registered with that name in the restaurant!',
        400,
      );
    }

    const item = await this.itensRepository.create({
      price,
      description,
      name,
      restaurant,
    });

    return item;
  }
}

export default CreateItemService;
