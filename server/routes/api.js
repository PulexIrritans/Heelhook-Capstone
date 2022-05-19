import express from 'express';
const router = express.Router();
import dayjs from 'dayjs';
import { Boulder } from '../models/boulder.js';
import { Climbed_boulder } from '../models/climbed_boulder.js';
import { Climber } from '../models/climber.js';

// Boulder list for Find page

router.get('/boulders_all/:climberID', async (req, res, next) => {
  const { climberID } = req.params;
  const all = await Boulder.find({});
  const boulders = await Promise.all(
    all.map(async boulder => {
      const likedBoulders = await Climbed_boulder.find({
        boulder_id: boulder.id,
        liked: true,
      });
      const amount = likedBoulders?.length;
      const copy = JSON.parse(JSON.stringify(boulder));

      const resultBoulder = await Climbed_boulder.findOne({
        boulder_id: boulder.id,
        climber_id: climberID,
      });

      copy.likeAmount = amount;
      copy.climbed = resultBoulder ? resultBoulder.result : 'None';
      return copy;
    })
  );
  res.status(200).send(boulders);
});

// Boulder Filter for Find page

router.get('/boulders_filter/:climberID', async (req, res, next) => {
  const { climberID } = req.params;
  const allBoulders = await Boulder.find({});
  const userClimbedBoulders = await Climbed_boulder.find({
    climber_id: climberID,
  });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const holdColorArray = [];
  const levelArray = [];
  const sectorArray = [];
  allBoulders.map(boulderItem => {
    holdColorArray.push(boulderItem.hold_color);
    levelArray.push(boulderItem.level);
    sectorArray.push(boulderItem.sector);
  });
  const uniqueHoldColors = holdColorArray.filter(onlyUnique).sort();
  const uniqueLevels = levelArray.filter(onlyUnique).sort();
  const uniqueSectors = sectorArray.filter(onlyUnique).sort();

  const climbResultsArray = [];
  userClimbedBoulders.map(climbedBoulderItem => {
    climbResultsArray.push(climbedBoulderItem.result);
  });
  const uniqueClimbResults = climbResultsArray.filter(onlyUnique);
  if (userClimbedBoulders.length < allBoulders.length)
    uniqueClimbResults.push('None');
  uniqueClimbResults.sort();
  const filter = {
    hold_colors: uniqueHoldColors,
    levels: uniqueLevels,
    sectors: uniqueSectors,
    climb_results: uniqueClimbResults,
  };
  res.status(200).send(filter);
});

// Boulder Card for Add page

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

// Prefilled Climbed boulder for Add page

router.get('/climbed_boulders/:climberID/:boulderID', (req, res, next) => {
  const { climberID, boulderID } = req.params;
  Climbed_boulder.findOne({
    climber_id: climberID,
    boulder_id: boulderID,
  })
    .then(data => {
      data === null
        ? res.status(200).send({
            projected: false,
            attempts: 0,
            result: 'None',
            liked: false,
            level_feedback: '',
          })
        : res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
});

// Latest session date for main page

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

// Climbed boulders for latest session on main page

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
    item => item.result === 'Zone'
  )?.length;
  const amountResultTop = allLatestSessionClimbs?.filter(
    item => item.result === 'Top'
  )?.length;
  const amountResultFlash = allLatestSessionClimbs?.filter(
    item => item.result === 'Flash'
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

// Overall climbed boulders for main page

router.get('/climbed_boulders/:climberID', async (req, res, next) => {
  const { climberID } = req.params;

  await Climbed_boulder.find({
    climber_id: climberID,
  })
    .then(data => {
      const amountAll = data?.length;
      const amountResultZone = data?.filter(
        item => item.result === 'Zone'
      )?.length;
      const amountResultTop = data?.filter(
        item => item.result === 'Top'
      )?.length;
      const amountResultFlash = data?.filter(
        item => item.result === 'Flash'
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

// Save or replace new climbed boulder in db from add page

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

// Get climber profile for profile page

router.get('/climber/:climberID', (req, res, next) => {
  const { climberID } = req.params;
  Climber.findOne({
    climber_id: climberID,
  })
    .then(data => {
      data === null
        ? res.status(200).send({
            climber_id: climberID,
            user_name: '',
            first_name: '',
            last_name: '',
            birthday: '',
            boulder_start_date: '',
          })
        : res.status(200).send(data);
    })
    .catch(error => {
      next();
    });
});

// Save climber profile

router.post('/climber/:climberID', async (req, res, next) => {
  const { climberID } = req.params;
  const newClimber = req.body;

  const climberCheck = await Climber.findOne({
    climber_id: climberID,
  });

  if (climberCheck) {
    Climber.replaceOne(climberCheck, newClimber)
      .then(data => {
        res.status(200).send(newClimber);
      })
      .catch(() => {
        next();
      });
  } else {
    Climber(newClimber)
      .save()
      .then(data => {
        res.status(201).send(data);
      })
      .catch(() => {
        next();
      });
  }
});

// Overall climbed boulders by level

router.get('/climbed_boulders_by_level/:climberID', async (req, res, next) => {
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
      const climbType = e.result || 'None';
      levelObject[climbType] = (levelObject[climbType] || 0) + 1;
    })
  );

  const climbsPerLevelChartData = [];
  const levelKeys = Object.keys(climbsPerLevel);
  for (const levelKey of levelKeys) {
    const level = climbsPerLevel[levelKey];
    const climbTypeKeys = Object.keys(level);
    for (const climbTypeKey of climbTypeKeys) {
      const value = climbsPerLevel[levelKey][climbTypeKey];
      climbsPerLevelChartData.push({
        level: `Lvl ${levelKey}`,
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
