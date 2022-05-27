import React from 'react';
import { ScrollView, TouchableHighlight, Text, StyleSheet, Button } from 'react-native';

export default ScrollHeader = () => {
    const sports = ['FEATURED','NBA', 'NFL', 'MLB', 'SOCCER', 'NHL', 'NASCAR', 'BOXING', 'MMA', 'NASCAR']

    return(
        <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
            {sports.map((sport, i) => {
                return(
                    <TouchableHighlight style={styles.btnContainer} key={i}>
                        <Button color='white' title={sport}/>
                    </TouchableHighlight>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        padding:10,
        justifyContent:'space-between',
    },
    btnContainer:{
        justifyContent:'center',
    },
})