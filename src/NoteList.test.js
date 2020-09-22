import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//import renderer from 'react-test-renderer';

import NoteList from './NoteList'

test('user can see a note', () => {
  render(<NoteList />);

  const note = screen.getByText("A test note!");

  expect(note).toBeInTheDocument();
})
