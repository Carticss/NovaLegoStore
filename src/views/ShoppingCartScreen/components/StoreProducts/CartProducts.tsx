import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { ShoppingCartContext } from '../../../../context/ShoppingCartContext';
import { ThemeContext } from '../../../../context/ThemeContext';

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

const CartProductList = (props: Props) => {

  const { removeItem } = useContext(ShoppingCartContext);
  const { state } = useContext(ThemeContext)!;

  const { products } = props;

  const handleAddToCart = (product: Product) => {
    removeItem(product);
  };

  return (
    <ScrollView>
      {
        products.map((product, index) => (
          <View key={index} style={state.productContainer2}>
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
                <Text style={state.switchPlchldr}>{"Remove"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      }
    </ScrollView>
  );
};


export default CartProductList;