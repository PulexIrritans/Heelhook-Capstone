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

router.post('/add/', (req, res, next) => {
  const climber_id = req.body.climber_id;
  const boulder_id = req.body.boulder_id;
  const date = req.body.date;
  const projected = req.body.projected;
  const attempts = req.body.attempts;
  const result = req.body.result;
  const liked = req.body.liked;
  const level_feedback = req.body.level_feedback;
  const newClimbed_boulder = Climbed_boulder({
    climber_id,
    boulder_id,
    date,
    projected,
    attempts,
    result,
    liked,
    level_feedback,
  });

  const filteredClimbedBoulder = Climbed_boulder.find({
    climber_id: climber_id,
    boulder_id: boulder_id,
  });

  filteredClimbedBoulder
    ? Climbed_boulder.updateOne(filteredClimbedBoulder._id, newClimbed_boulder)
        .then(data => {
          res.status(200).send(data);
        })
        .catch(() => {
          next();
        })
    : newClimbed_boulder
        .save()
        .then(data => {
          res.status(201).send(data);
        })
        .catch(() => {
          next();
        });
});

export default router;
