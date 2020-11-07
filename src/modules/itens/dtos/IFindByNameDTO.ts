import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';

export default interface IFindByNameDTO {
  name: string;
  restaurant: Restaurant;
}
