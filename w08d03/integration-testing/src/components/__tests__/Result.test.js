import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('can display the results of an api call', () => {
  const {container, getByTestId, findByText, debug} = render(<Result status="Waiting" />);

  // console.log(prettyDOM(container));
  debug();

  const highScoresButton = getByTestId('high-scores');

  fireEvent.click(highScoresButton);

  return findByText('bob', { exact: false });
});
