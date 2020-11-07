import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';

export default interface IUpdateItemDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  restaurant: Restaurant;
}
