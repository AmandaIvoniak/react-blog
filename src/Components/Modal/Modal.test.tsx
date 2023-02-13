import React from 'react';
import { render } from '@testing-library/react';
import Modal from './index';

test('modal shows the children', () => {
  // Act
  const { getByText } = render(
    <Modal isOpen={true} children={<div>ContentModal</div>} />,
  )
  // Assert
  expect(getByText('ContentModal')).toBeTruthy();
})

