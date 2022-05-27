import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MenuButton from '../../components/MenuButton/MenuButton';
import CloseButton from '../../components/CloseButton/CloseButton';

export default DrawerContainer = (props) => {
    const { navigation } = props;
    return(
        <View style={styles.content}>
            <View style={styles.container}>
                <CloseButton onPress={()=> navigation.closeDrawer()}/>
                <MenuButton
                    title='HOME'
                    source={require('../../../assets/icons/home-darkmode.png')}
                    onPress={() => {
                        navigation.navigate('Home');
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title='SETTINGS'
                    source={require('../../../assets/icons/settings-darkmode.png')}
                    onPress={() => {
                        navigation.navigate('Settings');
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title='WALLET'
                    source={require('../../../assets/icons/wallet-darkmode.png')}
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
      justifyContent: 'center',
      backgroundColor:'#22241f',
    },
    container: {
      marginTop:80,  
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
