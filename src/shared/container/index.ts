import { container } from 'tsyringe';

import IRestaurantsRepository from '@modules/restaurants/repositories/IRestaurantsRepository';
import RestaurantsRepository from '@modules/restaurants/infra/typeorm/repositories/RestaurantsRepository';

import IItensRepository from '@modules/itens/repositories/IItensRepository';
import ItensRepository from '@modules/itens/infra/typeorm/repositories/ItensRepository';

container.registerSingleton<IRestaurantsRepository>(
  'RestaurantsRepository',
  RestaurantsRepository,
);

container.registerSingleton<IItensRepository>(
  'ItensRepository',
  ItensRepository,
);
