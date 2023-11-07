import React from 'react';

const Player = (props) => {
  const {setPlayerSelection, state: {options, isDisabled}} = props;

  const mappedOptions = options.map((option) => {
    const [choice, symbol] = option;
    return (
      <button
        onClick={() => setPlayerSelection(choice)}
        type="button"
        value={choice}
        key={choice}
        disabled={isDisabled}
      >
        <span role="img" aria-label={choice.toLowerCase()}>
          {symbol}
        </span>
      </button>
    );
  });

  return (
    <section className="player">
      <span
        role="img"
        aria-label="player"
      >👤</span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">
          { mappedOptions }
        </div>
      </div>
    </section>
  );
};

export default Player;
