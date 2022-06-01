import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MLB() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>MLB</Text>
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