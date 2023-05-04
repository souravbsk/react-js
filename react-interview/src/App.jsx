import React from 'react';
import SelectOption from './components/SelectOption/SelectOption';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <SelectOption></SelectOption>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
