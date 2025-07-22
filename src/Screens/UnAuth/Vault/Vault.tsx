import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Vault = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Vault</Text>
      </View>
    </SafeAreaView>
  )
}

export default Vault

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  }
})