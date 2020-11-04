import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';

export default interface ICreateItemDTO {
  name: string;
  description: string;
  price: number;
  restaurant: Restaurant;
}
