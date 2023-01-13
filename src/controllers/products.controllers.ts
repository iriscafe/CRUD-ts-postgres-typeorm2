import { Request, Response } from "express";
import { Produto } from "../entities/products";

interface ProductBody {
  name: string;
  category: string;
  quantity: number;
}

export const getProduct = async (req: Request, res: Response) => {
  try {
    const produto = await Produto.find();
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
    const produto = await Produto.findOneBy({ id: parseInt(id) });

    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

    return res.json(produto);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createProduct = async (
  req: Request<unknown, unknown, ProductBody>,
  res: Response
) => {
  const { name, category, quantity } = req.body;
  const produto = new Produto();
  produto.name = name;
  produto.category = category;
  produto.quantity = quantity
  await produto.save();
  return res.json(produto);
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const produto = await Produto.findOneBy({ id: parseInt(id) });
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });

    await Produto.update({ id: parseInt(id) }, req.body);

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
    const result = await Produto.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Produto não encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};