"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProduct = void 0;
const db_1 = require("../db");
const products_1 = __importDefault(require("../entities/products"));
const productRepository = db_1.AppDataSource.getRepository(products_1.default);
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produto = yield productRepository.find();
        return res.json(produto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getProduct = getProduct;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const produto = yield productRepository.findOneBy({ id: parseInt(id) });
        if (!produto)
            return res.status(404).json({ message: "Produto não encontrado" });
        return res.json(produto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category, quantity } = req.body;
    const user = productRepository.create({ name, category, quantity });
    const result = yield productRepository.save(user);
    return res.json(result);
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const produto = yield productRepository.findOneBy({ id: parseInt(id) });
        if (!produto)
            return res.status(404).json({ message: "Produto não encontrado" });
        yield productRepository.update({ id: parseInt(id) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield productRepository.delete({ id: parseInt(id) });
        if (result.affected === 0)
            return res.status(404).json({ message: "Produto não encontrado" });
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteProduct = deleteProduct;
