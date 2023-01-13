import { DataSource } from "typeorm";
import Product from "./entities/products";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'loja',
    entities: [Product],
    logging: true,
    synchronize: true
});