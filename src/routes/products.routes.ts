import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controllers/products.controllers'

const router = Router();

router.post('/produtos', createProduct);
router.get('/produtos', getProduct);
router.get('/produtos/:id', getProductById);
router.put('/produtos/:id', updateProduct);
router.delete('/produtos/:id', deleteProduct);

export default router;