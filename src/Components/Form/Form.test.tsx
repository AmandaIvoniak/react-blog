import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './index';

test('should show itens from form and empty inputs', () => {
  render(<Form data={{ action: "Add", info: null }} id={0} modal={function (): void {
    throw new Error('Function not implemented.');
  }} clean={function (): void {
    throw new Error('Function not implemented.');
  }} />)
  const inputName = screen.getByText('Name');
  const inputComment = screen.getByText('Comment');
  const saveButton = screen.getByText('Save');
  const cancelButton = screen.getByText('Cancel');

  expect(inputName).toBeInTheDocument();
  expect(inputComment).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
})

test('Required inputs', async () => {
  render(<Form data={{ action: "Add", info: null }} id={0} modal={function (): void {
    throw new Error('Function not implemented.');
  }} clean={function (): void {
    throw new Error('Function not implemented.');
  }} />)

  fireEvent.click(screen.getByText('Save'));
  
  expect(await screen.findByText("Name is required")).toBeVisible()
  expect(await screen.findByText("Comment is required")).toBeVisible()
})

