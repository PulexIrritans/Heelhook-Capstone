import { useEffect, useState } from 'react';
import { Pie } from '@ant-design/plots';

const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const SessionStats = () => {
  const [climberSessionStats, setClimberSessionStats] = useState();

  const fetchClimberSessionStats = () => {
    fetch(`${URL}/climbed_boulders_session/${USER_ID}/`)
      .then(res => res.json())
      .then(data => setClimberSessionStats(data));
  };
  useEffect(() => {
    fetchClimberSessionStats();
  }, []);

  const config = {
    appendPadding: 10,
    data:
      climberSessionStats?.filter(stat => stat.type !== 'Total Climbs') || [],
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    legend: {
      position: 'right',
      offsetX: 8,
      title: false,
      itemName: {
        formatter: (text, item) => {
          return text;
        },
        style: {
          opacity: 0.9,
          fontSize: 16,
        },
      },
      itemValue: false,
    },
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 16,
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
          climberSessionStats?.find(stat => stat.type === 'Total Climbs')
            ?.value || '',
      },
    },
  };
  return <Pie {...config} />;
};

export default SessionStats;
