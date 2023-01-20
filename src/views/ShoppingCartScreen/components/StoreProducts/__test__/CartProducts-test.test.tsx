/**
 * @format
 */

import 'react-native';
import React from 'react';
import CartProductList from '../CartProducts';
import { ThemeContext } from '../../../../../context/ThemeContext';
import { lightStyles } from '../../../../../context/styles/lightStyles';
import { render, screen, fireEvent } from '@testing-library/react-native';
import AsyncStorage from '@react-native-community/async-storage';

const products = [
  {
    "id": 1,
    "name": "Product 1",
    "unit_price": 100,
    "stock": 10,
    "image": "https://picsum.photos/200/300"
  },
  {
    "id": 1,
    "name": "Product 1",
    "unit_price": 100,
    "stock": 0,
    "image": "https://picsum.photos/200/300"
  },
]

beforeAll(() => {
  jest.mock('@react-native-community/async-storage');
})

describe('Tests in App.tsx', () => {
  test('should render correctly App.tsx', () => {
    const dispatch = jest.fn();
    const screen = render(
      <>
        <ThemeContext.Provider
          value={
            {
              state: lightStyles,
              dispatch: dispatch
            }
          }
        >
          <CartProductList products={products} />
        </ThemeContext.Provider>
      </>).toJSON();
    expect(screen).toMatchSnapshot();
  });

  test('should remove product to cart', () => { 
    const dispatch = jest.fn();
    const setItem = jest.fn(async () => {});
    jest.spyOn(AsyncStorage, 'setItem').mockResolvedValueOnce(new setItem);
    render(
      <>
        <ThemeContext.Provider
          value={
            {
              state: lightStyles,
              dispatch: dispatch
            }
          }
        >
          <CartProductList products={products} />
        </ThemeContext.Provider>
      </>).toJSON();
     fireEvent.press(screen.getAllByText('Remove')[0]);
      expect(setItem).toHaveBeenCalled();
  })
});
