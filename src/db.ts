import { DataSource } from "typeorm";
import { Produto } from './entities/products'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'loja',
    entities: [Produto],
    logging: true,
    synchronize: true
});