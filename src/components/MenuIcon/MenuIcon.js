import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default MenuIcon = (props) => {
    return(
        <TouchableOpacity style={styles.headerButtonContainer} onPress={props.onPress}>
            <Image style={styles.headerButtonImage} source={require('../../../assets/icons/menu-darkmode.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerButtonContainer: {
        padding:10,
    },
    headerButtonImage: {
        justifyContent: 'center',
        width: 25,
        height: 25,
        margin: 6
    }
})