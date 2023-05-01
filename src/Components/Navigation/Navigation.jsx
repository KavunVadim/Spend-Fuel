import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
  DirectionsCarOutlined,
  AddRoadOutlined,
  LocalGasStationOutlined,
} from '@mui/icons-material';

const Navigation = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    setValue(pathname);
  }, [pathname]);

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
    >
      <BottomNavigationAction
        onClick={() => handleNavigate('/')}
        label="Машини"
        value="/"
        icon={<DirectionsCarOutlined />}
      />
      <BottomNavigationAction
        onClick={() => handleNavigate('/inputRun')}
        label="Дані"
        value="/inputRun"
        icon={<AddRoadOutlined />}
      />
      <BottomNavigationAction
        onClick={() => handleNavigate('/totalTable')}
        label="Таблиця"
        value="/totalTable"
        icon={<LocalGasStationOutlined />}
      />
    </BottomNavigation>
  );
};
export default Navigation;
