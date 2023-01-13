"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
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
