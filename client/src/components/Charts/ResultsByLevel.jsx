import { useEffect, useState } from 'react';
import { Column } from '@ant-design/plots';

const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const ResultsByLevel = () => {
  const [climberResultsByLevel, setClimberResultsByLevel] = useState();

  const fetchResultsByLevel = () => {
    fetch(`${URL}/climbed_boulders_by_level/${USER_ID}/`)
      .then(res => res.json())
      .then(data => setClimberResultsByLevel(data.asArray));
  };
  useEffect(() => {
    fetchResultsByLevel();
  }, []);

  const config = {
    data: climberResultsByLevel || [],
    isGroup: true,
    xField: 'level',
    yField: 'value',
    seriesField: 'climbType',
    yAxis: {
      tickInterval: 1,
    },
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Column {...config} />;
};
export default ResultsByLevel;
