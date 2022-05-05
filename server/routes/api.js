import express from 'express';
const router = express.Router();
import { Boulder } from '../models/boulder.js';
import { Climbed_boulder } from '../models/climbed_boulder.js';

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

router.post('/add/', async (req, res, next) => {
  const climber_id = req.body.climber_id;
  const boulder_id = req.body.boulder_id;
  const newClimbedBoulder = req.body;

  console.log(newClimbedBoulder);

  const filteredClimbedBoulder = await Climbed_boulder.findOne({
    climber_id: climber_id,
    boulder_id: boulder_id,
  });

  if (filteredClimbedBoulder) {
    Climbed_boulder.replaceOne(filteredClimbedBoulder, newClimbedBoulder)
      .then(data => {
        res.status(200).send(newClimbedBoulder);
        console.log(data);
      })
      .catch(() => {
        next();
      });
  } else {
    Climbed_boulder(newClimbedBoulder)
      .save()
      .then(data => {
        res.status(201).send(data);
      })
      .catch(() => {
        next();
      });
  }
});

export default router;
