"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const products_1 = __importDefault(require("./entities/products"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'sapatos',
    entities: [products_1.default],
    logging: true,
    synchronize: true,
    migrations: ['../**/*.migrations.{ts,js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
