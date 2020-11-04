import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IRestaurantsRepository from '@modules/restaurants/repositories/IRestaurantsRepository';
import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';

interface IRequest {
  city: string;
  typeCuisine: string;
  name: string;
  address: string;
  lat: number;
  long: number;
}

@injectable()
class CreateRestaurantService {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: IRestaurantsRepository,
  ) {}

  public async execute({
    city,
    typeCuisine,
    name,
    address,
    long,
    lat,
  }: IRequest): Promise<Restaurant> {
    const existRestaurantName = await this.restaurantsRepository.findByName(
      name,
    );

    if (existRestaurantName) {
      throw new AppError(
        'There is already a registered restaurant with that name!',
        400,
      );
    }

    const restaurant = await this.restaurantsRepository.create({
      city,
      typeCuisine,
      name,
      address,
      long,
      lat,
    });

    return restaurant;
  }
}

export default CreateRestaurantService;
