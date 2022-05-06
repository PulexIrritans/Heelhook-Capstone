import express from 'express';
const router = express.Router();
import { Boulder } from '../models/boulder.js';
import { Climbed_boulder } from '../models/climbed_boulder.js';

router.get('/boulders', (req, res, next) => {
  Boulder.find({})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
});

router.get('/boulders/:climberID/:boulderID', (req, res, next) => {
  const { boulderID } = req.params;
  Boulder.findById(boulderID)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
});

router.get('/climbed_boulders/:climberID/:boulderID', (req, res, next) => {
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

router.get('/climbed_boulders/:climberID', async (req, res, next) => {
  const { climberID } = req.params;

  const filteredSortedClimbedBoulders = await Climbed_boulder.find({
    climber_id: climberID,
  })

    .then(data => {
      const amountAll = data?.length;
      const amountResultZone = data?.filter(
        item => item.result === 'zone'
      )?.length;
      const amountResultTop = data?.filter(
        item => item.result === 'top'
      )?.length;
      const amountResultFlash = data?.filter(
        item => item.result === 'flash'
      )?.length;
      console.log(amountAll, amountResultZone);
      res.status(200).send([
        {
          label: 'amountAll',
          amount: amountAll,
        },
        { label: 'amountResultZone', amount: amountResultZone },
        { label: 'amountResultTop', amount: amountResultTop },
        {
          label: 'amountResultFlash',
          amount: amountResultFlash,
        },
      ]);
    })
    .catch(e => {
      console.error(e);
    });
});

router.post('/climbed_boulders/', async (req, res, next) => {
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
