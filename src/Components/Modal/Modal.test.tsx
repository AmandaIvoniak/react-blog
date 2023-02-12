import React from 'react';
import { render } from '@testing-library/react';
import Modal from './index';

test('modal shows the children', () => {
  // Arrange
  const handleClose = jest.fn();
  // Act
  const { getByText } = render(
    <Modal isOpen={true} name={'Modal'} onClose={handleClose} children={<div>ContentModal</div>} divider={0} />,
  )
  // Assert
  expect(getByText('ContentModal')).toBeTruthy();
})

