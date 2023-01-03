import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { ThemeContext } from '../../context/ThemeContext';
import BackArrow from '../../common/components/BackArrow';
import ToggleDarkMode from '../../common/components/ToggleDarkMode';

interface Product {
  description: string,
  image: string,
  name: string,
  stock: number,
  unit_price: number
}

interface Productt {
  id: number,
  name: string,
  unit_price: number,
  stock: number,
  image: string
}

interface Props {
  product: Product
}

const ProductDetailView = ({ route }) => {

  const { product } = route.params;
  const { dispatch, state } = useContext(ThemeContext)!;
  const { items, addItem, removeItem } = useContext(ShoppingCartContext);

  const handleAddToCart = (productt: Productt) => {
    addItem(productt);
  };

  return (
    <>
      <View style={state.container}>
        <Image source={{ uri: product.image }} style={state.image} />
        <Text style={state.name}>{product.name}</Text>
        <Text style={state.price}>${product.unit_price}</Text>
        <Text style={state.stock}>{product.stock} in stock</Text>
        <Text style={state.description}>{product.description}</Text>
        <TouchableOpacity
          disabled={product.stock === 0}
          onPress={() => { handleAddToCart(product) }}
          style={product.stock === 0 ? [state.addToCartButton, { backgroundColor: 'grey' }] : state.addToCartButton}
        >
          <Text style={state.switchPlchldr}>{"Add to Cart"}</Text>
        </TouchableOpacity>
        <BackArrow />
        <ToggleDarkMode />
      </View>
    </>
  );
};


export default ProductDetailView;