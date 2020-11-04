import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTableRestaurantsAndItens1604444331001
  implements MigrationInterface {
  name = 'CreateTableRestaurantsAndItens1604444331001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `restaurants` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `type_cuisine` varchar(255) NOT NULL, `lat` decimal(9,6) NOT NULL, `long` decimal(9,6) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `itens` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` decimal(6,2) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `restaurant_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `itens` ADD CONSTRAINT `FK_e8f7376b181957914aef2ce647f` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `itens` DROP FOREIGN KEY `FK_e8f7376b181957914aef2ce647f`',
    );
    await queryRunner.query('DROP TABLE `itens`');
    await queryRunner.query('DROP TABLE `restaurants`');
  }
}
