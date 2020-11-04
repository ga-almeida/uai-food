import ICreateItemDTO from '@modules/itens/dtos/ICreateItemDTO';
import IUpdateItemDTO from '@modules/itens/dtos/IUpdateItemDTO';
import IFindNameItemDTO from '@modules/itens/dtos/IFindNameItemDTO';
import IFindByItemInRestaurantDTO from '@modules/itens/dtos/IFindByItemInRestaurantDTO';
import Item from '@modules/itens/infra/typeorm/entities/Item';

export default interface IItensRepository {
  create(data: ICreateItemDTO): Promise<Item>;
  update(data: IUpdateItemDTO): Promise<Item>;
  findByName(data: IFindNameItemDTO): Promise<Item | undefined>;
  findByIdInRestaurant(
    data: IFindByItemInRestaurantDTO,
  ): Promise<Item | undefined>;
}
