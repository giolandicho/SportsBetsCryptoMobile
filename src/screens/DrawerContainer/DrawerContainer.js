import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MenuButton from '../../components/MenuButton/MenuButton';

export default DrawerContainer = (props) => {
    const { navigation } = props;
    return(
        <View style={styles.content}>
            <View style={styles.container}>
                <MenuButton
                    title='HOME'
                    source={require('../../../assets/icons/home.png')}
                    onPress={() => {
                        navigation.navigate('Home');
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title='SETTINGS'
                    source={require('../../../assets/icons/settings.png')}
                    onPress={() => {
                        navigation.navigate('Settings');
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title='WALLET'
                    source={require('../../../assets/icons/wallet.png')}
                    onPress={() => {
                        navigation.navigate('Wallet');
                        navigation.closeDrawer();
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      marginTop:100,  
      flex: 1,
      alignItems: 'flex-start',
      paddingHorizontal: 20
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginLeft:20,
    },
  });
