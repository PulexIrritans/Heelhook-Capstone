import express from 'express';
const router = express.Router();
import dayjs from 'dayjs';
import { Boulder } from '../models/boulder.js';
import { Climbed_boulder } from '../models/climbed_boulder.js';

router.get('/boulders', async (req, res, next) => {
  const all = await Boulder.find({});
  const boulders = await Promise.all(
    all.map(async boulder => {
      const tempBoulders = await Climbed_boulder.find({
        boulder_id: boulder.id,
        liked: true,
      });
      const amount = tempBoulders?.length;
      const copy = JSON.parse(JSON.stringify(boulder));
      copy.likeAmount = amount;
      return copy;
    })
  );
  res.status(200).send(boulders);
});

router.get('/boulders_filter', (req, res, next) => {
  Boulder.find({})
    .then(data => {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      const holdColorArray = [];
      const levelArray = [];
      const sectorArray = [];
      data.map(boulderItem => {
        holdColorArray.push(boulderItem.hold_color);
        levelArray.push(boulderItem.level);
        sectorArray.push(boulderItem.sector);
      });
      const uniqueHoldColors = holdColorArray.filter(onlyUnique).sort();
      const uniqueLevels = levelArray.filter(onlyUnique).sort();
      const uniqueSectors = sectorArray.filter(onlyUnique).sort();
      const filter = {
        hold_colors: uniqueHoldColors,
        levels: uniqueLevels,
        sectors: uniqueSectors,
      };
      res.status(200).send(filter);
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

router.get('/climbed_boulders_days/:climberID', async (req, res, next) => {
  const { climberID } = req.params;

  await Climbed_boulder.find({
    climber_id: climberID,
  })
    .sort({ date: -1 })
    .then(data => {
      res.status(200).send(data[0].date);
    })
    .catch(e => {
      console.error(e);
    });
});

router.get('/climbed_boulders_session/:climberID', async (req, res, next) => {
  const { climberID } = req.params;

  const allClimbedBoulders = await Climbed_boulder.find({
    climber_id: climberID,
  }).sort({ date: -1 });
  const latestDateISO = allClimbedBoulders[0].date;
  const allLatestSessionClimbs = allClimbedBoulders.filter(climbedBoulder =>
    dayjs(climbedBoulder.date).isSame(dayjs(latestDateISO), 'day')
  );
  const amountAll = allLatestSessionClimbs?.length;
  const amountResultZone = allLatestSessionClimbs?.filter(
    item => item.result === 'zone'
  )?.length;
  const amountResultTop = allLatestSessionClimbs?.filter(
    item => item.result === 'top'
  )?.length;
  const amountResultFlash = allLatestSessionClimbs?.filter(
    item => item.result === 'flash'
  )?.length;
  const amountResultFail =
    amountAll - amountResultZone - amountResultTop - amountResultFlash;
  res.status(200).send([
    {
      type: 'Total Climbs',
      value: amountAll,
    },
    {
      type: 'Flash',
      value: amountResultFlash,
    },
    { type: 'Top', value: amountResultTop },
    { type: 'Zone', value: amountResultZone },
    {
      type: 'Touched',
      value: amountResultFail,
    },
  ]);
});

router.get('/climbed_boulders/:climberID', async (req, res, next) => {
  const { climberID } = req.params;

  await Climbed_boulder.find({
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
      const amountResultFail =
        amountAll - amountResultZone - amountResultTop - amountResultFlash;
      res.status(200).send([
        {
          type: 'Total Climbs',
          value: amountAll,
        },
        {
          type: 'Flash',
          value: amountResultFlash,
        },
        { type: 'Top', value: amountResultTop },
        { type: 'Zone', value: amountResultZone },
        {
          type: 'Touched',
          value: amountResultFail,
        },
      ]);
    })
    .catch(e => {
      next();
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

router.get('/boulders_by_level/:climberID', async (req, res, next) => {
  const { climberID } = req.params;

  const filteredClimbedBoulder = await Climbed_boulder.find({
    climber_id: climberID,
  });

  const climbsPerLevel = {};
  await Promise.all(
    filteredClimbedBoulder.map(async e => {
      const boulder = await Boulder.findOne({
        _id: e.boulder_id,
      });
      if (climbsPerLevel[boulder.level] === undefined) {
        climbsPerLevel[boulder.level] = {};
      }
      const levelObject = climbsPerLevel[boulder.level];
      const climbType = e.result || 'none';
      levelObject[climbType] = (levelObject[climbType] || 0) + 1;
    })
  );

  const mylevel = climbsPerLevel['4'];
  const myvalue = mylevel['zone'];
  const myvalue2 = climbsPerLevel['4']['zone']; // equivalent zu ^

  // das array für den graph
  const climbsPerLevelChartData = [];
  // alle 'level' keys aus unserem 'climbsPerLevel' object (e.g. 1, 2, 4, 7)
  const levelKeys = Object.keys(climbsPerLevel);
  for (const levelKey of levelKeys) {
    // mit dem key holen wir uns das eigentlich object für das level
    // e.g. aus climbsPerLevel['4'] holen wir uns dann { zone: 3, tops: 6 }
    const level = climbsPerLevel[levelKey];
    // dann holen wir uns wieder alle keys aus dem level object
    // das wären dann e.g. 'zone' und 'tops'
    const climbTypeKeys = Object.keys(level);
    for (const climbTypeKey of climbTypeKeys) {
      // für jeden key aus dem level object (welcher 'zone order 'tops) entspicht
      // holen wir uns den dazu gehörigen wert
      const value = climbsPerLevel[levelKey][climbTypeKey];
      climbsPerLevelChartData.push({
        level: levelKey,
        climbType: climbTypeKey,
        value: value,
      });
    }
  }

  res.status(200).send({
    asObject: climbsPerLevel,
    asArray: climbsPerLevelChartData,
  });
});

export default router;
