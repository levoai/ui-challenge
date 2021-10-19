import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Collapsible from './Collapsible';
import { act } from 'react-dom/test-utils';

describe('Collapsible', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <Collapsible header="test">
        <p>item1</p>
        <p>item2</p>
        <p>item3</p>
      </Collapsible>,
    );
    getByText('test');
    getByText('item1');
    getByText('item2');
    getByText('item3');
  });

  test('collapses when the header is touched', () => {
    const { queryByText } = render(
      <Collapsible header="test">
        <p>item1</p>
        <p>item2</p>
        <p>item3</p>
      </Collapsible>,
    );
    act(() => {
      fireEvent.click(queryByText('test'));
    });

    expect(queryByText('item1')).toBeNull();
    expect(queryByText('item2')).toBeNull();
    expect(queryByText('item3')).toBeNull();
  });

  test('once collapsed it expands again when header is touched', () => {
    const { queryByText, getByText } = render(
      <Collapsible header="test">
        <p>item1</p>
        <p>item2</p>
        <p>item3</p>
      </Collapsible>,
    );
    act(() => {
      fireEvent.click(queryByText('test'));
    });

    expect(queryByText('item1')).toBeNull();
    expect(queryByText('item2')).toBeNull();
    expect(queryByText('item3')).toBeNull();

    act(() => {
      fireEvent.click(queryByText('test'));
    });

    getByText('item1');
    getByText('item2');
    getByText('item3');
  });
});
