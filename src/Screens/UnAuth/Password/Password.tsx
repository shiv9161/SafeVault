import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Password = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Password</Text>
      </View>
    </SafeAreaView>
  )
}

export default Password

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  }
})