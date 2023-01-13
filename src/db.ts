import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'loja',
    entities: ["../**/*.entity.{ts,js}"],
    logging: true,
    synchronize: true,
    migrations: ['../**/*.migrations.{ts,js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
});