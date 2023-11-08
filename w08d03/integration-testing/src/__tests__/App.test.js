import React from 'react';
import ReactDOM from 'react-dom'; 

import App from '../App';
import {render, fireEvent} from '@testing-library/react';

test('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});

test('can toggle the cheating state by clicking on the robot head', () => {
  const { getByTestId } = render(<App />);

  const robotHeadIcon = getByTestId('robot-head');

  fireEvent.click(robotHeadIcon);

  expect(robotHeadIcon).toHaveClass('cheating');

  fireEvent.click(robotHeadIcon);

  expect(robotHeadIcon).not.toHaveClass('cheating');
});
