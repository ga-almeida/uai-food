import ICreateRestaurantDTO from '@modules/restaurants/dtos/ICreateRestaurantDTO';
import IFindFiltersDTO from '@modules/restaurants/dtos/IFindFiltersDTO';
import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';

export default interface IRestaurantsRepository {
  findByName(name: string): Promise<Restaurant | undefined>;
  create(data: ICreateRestaurantDTO): Promise<Restaurant>;
  findFilters(data: IFindFiltersDTO): Promise<Restaurant[]>;
}
