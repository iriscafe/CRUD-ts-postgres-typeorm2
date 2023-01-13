import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AppDataSource } from "../db";
import Produto  from "../entities/products";

const productRepository = AppDataSource.getRepository(Produto);

export const getProduct = async (req: Request, res: Response) => {
  try {
    const produto = await productRepository.find();
    return res.json(produto);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const produto = await productRepository.findOneBy({ id: parseInt(id) });

    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

    return res.json(produto);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, category, quantity } = req.body;

  const user = productRepository.create({ name, category, quantity });
  const result = await productRepository.save(user)
  return res.json(result);
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const produto = await productRepository.findOneBy({ id: parseInt(id) });
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

    await productRepository.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await productRepository.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Produto não encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};