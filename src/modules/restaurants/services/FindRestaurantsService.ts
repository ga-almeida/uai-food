import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IRestaurantsRepository from '@modules/restaurants/repositories/IRestaurantsRepository';
import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';

interface IRequest {
  city: any;
  lat: any;
  long: any;
  km: any;
  typeCousine: any;
  item: any;
}

@injectable()
class FindRestaurantsService {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: IRestaurantsRepository,
  ) {}

  public async execute({
    city,
    lat,
    long,
    km,
    typeCousine,
    item,
  }: IRequest): Promise<Restaurant[]> {
    const restaurantsFilters = await this.restaurantsRepository.findFilters({
      typeCousine,
      km: parseInt(km),
      item,
      long: Number(long),
      lat: Number(lat),
      city,
    });

    if (!restaurantsFilters || restaurantsFilters.length === 0) {
      throw new AppError(
        'Does not exist restaurants with the filters provided!',
        400,
      );
    }

    return restaurantsFilters;
  }
}

export default FindRestaurantsService;
