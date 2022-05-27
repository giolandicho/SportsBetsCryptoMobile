import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';

export default CloseButton = (props) => {
    return(
        <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
            <Image source={require("../../../assets/icons/close-darkmode.png")}/>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginLeft:200,
    },
    btnIcon: {
        height:10,
        width:10
    }
})