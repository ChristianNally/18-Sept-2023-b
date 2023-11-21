import useToggle from '../hooks/useToggle';

const Toggle = () => {
  const { isOn, toggleValue } = useToggle();

  return (
    <div>
      <h2>Toggle Component</h2>

      <button onClick={toggleValue}>Toggle</button>

      { isOn && <h2>🌞</h2> }
      { !isOn && <h2>🌚</h2> }
    </div>
  );
};

export default Toggle;
