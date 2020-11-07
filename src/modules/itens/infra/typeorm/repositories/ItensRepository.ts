import { getRepository, Repository } from 'typeorm';

import IItensRepository from '@modules/itens/repositories/IItensRepository';
import Item from '@modules/itens/infra/typeorm/entities/Item';
import ICreateItemDTO from '@modules/itens/dtos/ICreateItemDTO';
import IUpdateItemDTO from '@modules/itens/dtos/IUpdateItemDTO';
import IFindByNameDTO from '@modules/itens/dtos/IFindByNameDTO';
import IFindByItemInRestaurantDTO from '@modules/itens/dtos/IFindByItemInRestaurantDTO';

class ItensRepository implements IItensRepository {
  private ormRepository: Repository<Item>;

  constructor() {
    this.ormRepository = getRepository(Item);
  }

  public async create({
    description,
    name,
    price,
    restaurant,
  }: ICreateItemDTO): Promise<Item> {
    const item = this.ormRepository.create({
      description,
      name,
      price,
      restaurant,
    });

    await this.ormRepository.save(item);

    return item;
  }

  public async update({ id, ...params }: IUpdateItemDTO): Promise<Item> {
    const item = {
      id,
      ...params,
    } as Item;

    const itemUpdate = await this.ormRepository.save(item);

    return itemUpdate;
  }

  public async findByName({
    name,
    restaurant,
  }: IFindByNameDTO): Promise<Item | undefined> {
    const item = await this.ormRepository.findOne({
      where: { name, restaurant },
    });

    return item;
  }

  public async findByIdInRestaurant({
    id,
    restaurant,
  }: IFindByItemInRestaurantDTO): Promise<Item | undefined> {
    const item = await this.ormRepository.findOne({
      where: { restaurant, id },
    });

    return item;
  }
}

export default ItensRepository;
