import { Request, Response } from "express";
import Product from "../entities/products";

interface ProductBody {
  name: string;
  category: string;
  quantity: number;
}

export const getProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const products = await Product.findOneBy({ id: parseInt(id) });

    if (!products) return res.status(404).json({ message: "Produto não encontrado" });

    return res.json(products);
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
  const products = new Product();
  products.name = name;
  products.category = category;
  products.quantity = quantity;
  await products.save();
  return res.json(products);
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const products = await Product.findOneBy({ id: parseInt(id) });
    if (!products) return res.status(404).json({ message: "Produto não encontrado" });

    await Product.update({ id: parseInt(id) }, req.body);

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
    const result = await Product.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Produto não encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};