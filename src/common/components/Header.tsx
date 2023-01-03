import React, { useContext } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { ThemeContext } from '../../context/ThemeContext';
import { Icons } from '../media';

interface Props {
    rightButtonText: string;
    onRightButtonPress: () => void;
}

const Header = ({ rightButtonText, onRightButtonPress }: Props) => {

    const { dispatch, state } = useContext(ThemeContext)!;
    const { items, addItem, removeItem } = useContext(ShoppingCartContext);

    return (
        <View 
            style={state.container.backgroundColor === "#212121" ? 
                { flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: "#212121" } : 
                { flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: "white", alignItems: 'center' }}
        >
            <TouchableOpacity
                onPress={() => {onRightButtonPress()}}
                style={state.bagContainer}
            >
                <Text style={state.switchPlchldr}>{`(${items.length})`}</Text>
                <Image style={state.bagIcon} source={state.container.backgroundColor === "#212121" ? Icons.login.bagIconDark : Icons.login.bagIconLigth} />
                <Text style={state.switchPlchldr}>{""}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Header;
