import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Input } from './index';
import userEvent from '@testing-library/user-event';

test('should set a value to input', async () => {
  render(<Input label={"Name"} />)
  const input = screen.getByTestId("Name");
  userEvent.type(input, "Amanda");
  expect(input).toHaveValue("Amanda");
})
