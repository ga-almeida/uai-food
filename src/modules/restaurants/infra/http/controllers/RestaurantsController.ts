import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRestaurantService from '@modules/restaurants/services/CreateRestaurantService';
import FindRestaurantsService from '@modules/restaurants/services/FindRestaurantsService';

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

  public async index(request: Request, response: Response): Promise<Response> {
    const { city, lat, long, km, typeCousine, item } = request.query;

    const findRestaurants = container.resolve(FindRestaurantsService);

    const restaurants = await findRestaurants.execute({
      city,
      lat,
      long,
      km,
      typeCousine,
      item,
    });

    return response.json(restaurants);
  }
}
