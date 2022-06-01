import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function NHL() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>NHL</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    content:{
        color:'white',
    }
})