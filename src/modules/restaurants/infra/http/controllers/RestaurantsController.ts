import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRestaurantService from '@modules/restaurants/services/CreateRestaurantService';

export default class RestaurantsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, city, typeCuisine, address, lat, long } = request.body;

    const createRestaurant = container.resolve(CreateRestaurantService);

    const restaurant = await createRestaurant.execute({
      name,
      city,
      typeCuisine,
      address,
      lat,
      long,
    });

    return response.json(restaurant);
  }
}
