import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@ShoppingCart:items';

interface ShoppingCartItem {
  id: number;
  name: string;
  unit_price: number;
  stock: number;
  image: string;
}

interface ShoppingCartContextType {
  items: ShoppingCartItem[];
  addItem: (item: ShoppingCartItem) => void;
  removeItem: (item: ShoppingCartItem) => void;
  payAll: () => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  items: [],
  addItem: (item: ShoppingCartItem) => {},
  removeItem: (item: ShoppingCartItem) => {},
  payAll: () => {},
});

export const ShoppingCartProvider = (props: { children: React.ReactNode }) => {
    
  const [items, setItems] = useState<ShoppingCartItem[]>([]);

  const saveItems = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  };

  const loadItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    saveItems();
  }, [items]);

  const addItem = (item: ShoppingCartItem) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const removeItem = async (item: ShoppingCartItem) => {
    const newItems = items
    newItems.splice(newItems.indexOf(item), 1)
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    loadItems();
    setItems(newItems);
  };

  const payAll = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    loadItems();
    setItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        payAll
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
