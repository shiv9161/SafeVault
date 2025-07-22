import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Setting</Text>
      </View>
    </SafeAreaView>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  }
})