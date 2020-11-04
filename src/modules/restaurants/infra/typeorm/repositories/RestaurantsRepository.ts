import { getRepository, Repository } from 'typeorm';

import IRestaurantsRepository from '@modules/restaurants/repositories/IRestaurantsRepository';
import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';
import ICreateRestaurantDTO from '@modules/restaurants/dtos/ICreateRestaurantDTO';

class RestaurantsRepository implements IRestaurantsRepository {
  private ormRepository: Repository<Restaurant>;

  constructor() {
    this.ormRepository = getRepository(Restaurant);
  }

  public async create({
    city,
    typeCuisine,
    name,
    address,
    lat,
    long,
  }: ICreateRestaurantDTO): Promise<Restaurant> {
    const restaurant = this.ormRepository.create({
      city,
      typeCuisine,
      name,
      address,
      lat,
      long,
    });

    await this.ormRepository.save(restaurant);

    return restaurant;
  }

  public async findByName(name: string): Promise<Restaurant | undefined> {
    return await this.ormRepository.findOne({ name });
  }
}

export default RestaurantsRepository;
