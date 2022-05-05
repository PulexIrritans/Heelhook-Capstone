import express from 'express';
const router = express.Router();
import { Boulder } from '../models/boulder.js';
import { Climbed_boulder } from '../models/climbed_boulder.js';

router.get('/', (req, res, next) => {
  Boulder.find({})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
});

router.get('/add/:climberID/:boulderID', (req, res, next) => {
  const { boulderID } = req.params;
  Boulder.findById(boulderID)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
});

router.get('/prefill/:climberID/:boulderID', (req, res, next) => {
  const { climberID, boulderID } = req.params;
  Climbed_boulder.findOne({
    climber_id: climberID,
    boulder_id: boulderID,
  })
    .then(data => {
      data === null ? res.status(200).send({}) : res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
});

router.post('/add/', async (req, res, next) => {
  const climber_id = req.body.climber_id;
  const boulder_id = req.body.boulder_id;
  const newClimbedBoulder = req.body;

  const filteredClimbedBoulder = await Climbed_boulder.findOne({
    climber_id: climber_id,
    boulder_id: boulder_id,
  });

  if (filteredClimbedBoulder) {
    Climbed_boulder.replaceOne(filteredClimbedBoulder, newClimbedBoulder)
      .then(data => {
        res.status(200).send(newClimbedBoulder);
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
