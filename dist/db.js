"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const products_1 = require("./entities/products");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'loja',
    entities: [products_1.Produto],
    logging: true,
    synchronize: true
});
