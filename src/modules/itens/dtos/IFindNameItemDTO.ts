import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';

export default interface IFindNameItemDTO {
  name: string;
  restaurant: Restaurant;
}
