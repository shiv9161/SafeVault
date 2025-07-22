import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notes = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Notes</Text>
      </View>
    </SafeAreaView>
  )
}

export default Notes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  }
})