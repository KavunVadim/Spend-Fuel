import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import {
  DirectionsCarOutlined,
  AddRoadOutlined,
  LocalGasStationOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [value, setValue] = useState('car');

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <BottomNavigation
      showLabels
      sx={{
        width: '100%',
        margin: '0 auto',
        position: 'fixed',
        left: '0',
        bottom: '0',
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        onClick={() => handleNavigate('/')}
        label="Машини"
        value="car"
        icon={<DirectionsCarOutlined />}
      />
      <BottomNavigationAction
        onClick={() => handleNavigate('/inputRun')}
        label="Дані"
        value="inputRun"
        icon={<AddRoadOutlined />}
      />
      <BottomNavigationAction
        onClick={() => handleNavigate('/totalTable')}
        label="Таблиця"
        value="totalTable"
        icon={<LocalGasStationOutlined />}
      />
    </BottomNavigation>
  );
};
export default Navigation;
