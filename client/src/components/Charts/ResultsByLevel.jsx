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
    color: ({ climbType }) => {
      if (climbType === 'Flash') {
        return 'rgb(98, 147, 249)';
      } else if (climbType === 'Top') {
        return 'rgb(97, 217, 169)';
      } else if (climbType === 'Zone') {
        return 'rgb(100, 118, 150)';
      } else return 'rgb(240, 189, 42)';
    },
    yAxis: {
      tickInterval: 1,
    },
    label: false,
  };
  return <Column {...config} />;
};
export default ResultsByLevel;
