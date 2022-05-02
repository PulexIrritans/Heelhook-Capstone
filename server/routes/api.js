import express from 'express';
const router = express.Router();
import { Boulder } from '../models/boulder.js';

router.get('/', (req, res, next) => {
  Boulder.find({}).then(data => {
    res.send(data);
  });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

export default router;
