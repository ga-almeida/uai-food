import { getRepository, Repository } from 'typeorm';

import IRestaurantsRepository from '@modules/restaurants/repositories/IRestaurantsRepository';
import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';
import ICreateRestaurantDTO from '@modules/restaurants/dtos/ICreateRestaurantDTO';
import IFindFiltersDTO from '@modules/restaurants/dtos/IFindFiltersDTO';

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

  public async findFilters({
    city,
    lat,
    long,
    item,
    km,
    typeCousine,
  }: IFindFiltersDTO): Promise<Restaurant[]> {
    let sql =
      'SELECT * FROM restaurants INNER JOIN itens ON restaurants.id = itens.restaurant_id';
    const filters = [];

    if (city) {
      filters.push(`restaurants.city = "${city}"`);
    }

    if (lat && long && km) {
      filters.push(
        `(6371 * acos(cos(radians(${lat})) * cos(radians(restaurants.lat)) * cos(radians(${long}) - radians(restaurants.long)) + sin(radians(${lat})) * sin(radians(restaurants.lat)))) <= ${km}`,
      );
    }

    if (item) {
      filters.push(`itens.name = "${item}"`);
    }

    if (typeCousine) {
      filters.push(`restaurants.type_cuisine = "${typeCousine}"`);
    }

    if (filters.length !== 0) {
      let existeFilterAdd = false;

      for (let index = 0; index < filters.length; index++) {
        if (!existeFilterAdd) {
          sql = sql.concat(` WHERE ${filters[index]}`);
          existeFilterAdd = true;
        } else {
          sql = sql.concat(` and ${filters[index]}`);
        }
      }
    }

    console.log(sql);

    const restaurants = await this.ormRepository.query(sql);

    return restaurants;
  }
}

export default RestaurantsRepository;
