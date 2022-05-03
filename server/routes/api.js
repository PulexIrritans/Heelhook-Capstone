import express from 'express';
const router = express.Router();
import { Boulder } from '../models/boulder.js';

router.get('/', (req, res, next) => {
  Boulder.find({})
    .then(data => {
      res.send(data);
    })
    .catch(() => {
      next();
    });
});

router.get('/add/:id', (req, res, next) => {
  const { id } = req.params;
  Boulder.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(() => {
      next();
    });
});

export default router;
