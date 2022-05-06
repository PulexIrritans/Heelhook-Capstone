import { useEffect, useState } from 'react';
import { Pie } from '@ant-design/plots';

const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const OverallStats = () => {
  const [climberOverallStats, setClimberOverallStats] = useState();

  const fetchClimberOverallStats = () => {
    fetch(`${URL}/api/climbed_boulders/${USER_ID}/`)
      .then(res => res.json())
      .then(data => setClimberOverallStats(data));
  };
  useEffect(() => {
    fetchClimberOverallStats();
  }, []);

  const config = {
    appendPadding: 10,
    data:
      climberOverallStats?.filter(stat => stat.type != 'Total Climbs') || [],
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content:
          climberOverallStats?.find(stat => stat.type === 'Total Climbs')
            ?.value || '',
      },
    },
  };
  return <Pie {...config} />;
};

export default OverallStats;
