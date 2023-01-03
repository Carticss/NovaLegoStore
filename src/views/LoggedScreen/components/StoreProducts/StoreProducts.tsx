import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { ShoppingCartContext } from '../../../../context/ShoppingCartContext';
import { ThemeContext } from '../../../../context/ThemeContext';
import { useStoreList } from '../StoreList/useStoreList';

interface Product {
  id: number,
  name: string,
  unit_price: number,
  stock: number,
  image: string
}

interface Props {
  products: Product[]
}

const StoreProductList = (props: Props) => {

  const navigate = useNavigation<StackNavigationProp<any>>();
  const { items, addItem, removeItem } = useContext(ShoppingCartContext);
  const { dispatch, state } = useContext(ThemeContext)!;

  const { details } = useStoreList();

  const { products } = props;

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <ScrollView>
      {products.map(product => (
        <TouchableOpacity 
          key={product.id} 
          style={state.productContainer}
          onPress={
            () => {
              navigate.navigate("ProductDetail", { product: details!![product.id - 1] })
            }
          }
        >
          <Image source={{ uri: product.image }} style={state.productImage} />
          <View style={state.productDetailsContainer}>
            <Text style={state.productName}>{product.name}</Text>
            <Text style={state.productPrice}>${product.unit_price}</Text>
            <Text style={state.productStock}>{product.stock} in stock</Text>
            <TouchableOpacity
              disabled={product.stock === 0}
              onPress={() => { handleAddToCart(product) }}
              style={product.stock === 0 ? [state.addToCartButton, { backgroundColor: 'grey' }] : state.addToCartButton}
            >
              <Text style={state.switchPlchldr}>{"Add to Cart"}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};


export default StoreProductList;