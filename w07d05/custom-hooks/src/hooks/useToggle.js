import {useState} from 'react';

const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleValue = () => {
    setIsOn(!isOn);
  };

  // return [isOn, toggleValue];
  return {
    isOn,
    toggleValue,
  };
};

export default useToggle;
