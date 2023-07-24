import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmDialog from './ConfirmDialog';

describe('ConfirmDialog', () => {
  test('renders ConfirmDialog with title and message', () => {
    const title = 'Confirmation Dialog';
    const message = 'Are you sure you want to proceed?';

    render(
      <ConfirmDialog
        title={title}
        message={message}
        confirmText='Delete' 
        cancelText='Cancel'
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test('calls onConfirm when Confirm button is clicked', () => {
    const onConfirm = jest.fn();

    render(
      <ConfirmDialog
        title="Confirmation Dialog"
        message="Are you sure you want to proceed?"
        confirmText='Delete' 
        cancelText='Cancel'
        onConfirm={onConfirm}
        onCancel={() => {}}
      />
    );

    fireEvent.click(screen.getByText('Confirm'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  test('calls onCancel when Cancel button is clicked', () => {
    const onCancel = jest.fn();

    render(
      <ConfirmDialog
        title="Confirmation Dialog"
        message="Are you sure you want to proceed?"
        confirmText='Delete' 
        cancelText='Cancel'
        onConfirm={() => {}}
        onCancel={onCancel}
      />
    );

    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
