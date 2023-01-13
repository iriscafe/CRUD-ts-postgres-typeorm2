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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProduct = void 0;
const products_1 = require("../entities/products");
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produto = yield products_1.Produto.find();
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
        const produto = yield products_1.Produto.findOneBy({ id: parseInt(id) });
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
    const produto = new products_1.Produto();
    produto.name = name;
    produto.category = category;
    produto.quantity = quantity;
    yield produto.save();
    return res.json(produto);
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const produto = yield products_1.Produto.findOneBy({ id: parseInt(id) });
        if (!produto)
            return res.status(404).json({ message: "Produto não encontrado" });
        yield products_1.Produto.update({ id: parseInt(id) }, req.body);
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
        const result = yield products_1.Produto.delete({ id: parseInt(id) });
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
