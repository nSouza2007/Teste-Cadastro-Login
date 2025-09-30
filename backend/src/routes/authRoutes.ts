import express from 'express';
import { register, login } from '../controllers/authController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Exemplo de rota protegida (para home, mas no backend pode ser algo como user info)
router.get('/protected', protect, (req, res) => {
  res.json({ message: 'Protected route accessed' });
});

export default router;