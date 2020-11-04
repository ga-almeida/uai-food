import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';

export default interface IFindByItemInRestaurantDTO {
  id: number;
  restaurant: Restaurant;
}
