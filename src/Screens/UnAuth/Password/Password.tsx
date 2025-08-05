import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FileLock, Plus, Search } from 'lucide-react-native'
import { Colors } from '../../../../utils/Colors'

const Password = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.mainHeader}>
          <View>
            <Text style={styles.mainHeadPara}>Passwords</Text>
          </View>
          <TouchableOpacity style={styles.sideBar}>
            <Plus size={22} color={Colors.blue} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTwo}>
          <Search color={Colors.grey} size={20} style={styles.icon} />
          <TextInput
            placeholder="Search passwords..."
            placeholderTextColor={Colors.grey}
            style={styles.input}
          />
        </View>

        <View>
          {
            [1, 1, 1]?.map((item: any, index: number) => {
              return (
                <View key={index} style={styles.mainCard}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: '18%' }}>
                      <View style={styles.cardMainIcon}>
                        <FileLock size={22} color={Colors.blue} strokeWidth={2} />
                      </View>
                    </View>
                    <View style={{ width: '58%' }}>
                      <Text style={{ fontWeight: '600', color: Colors.black, lineHeight: 22 }}>Gmail</Text>
                      <Text style={{ color: Colors.black, lineHeight: 22 }}>Shiv@gmail.com</Text>
                    </View>
                    <View style={{ width: '20%', alignItems: 'center', backgroundColor: Colors.lightBlue, borderRadius: 6, paddingVertical: 2 }}>
                      <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.blue }}>Strong</Text>
                    </View>
                  </View>
                  <Text style={{ marginTop: 10, color: Colors.grey, fontWeight: '500' }}>PASSWORD</Text>
                  <View>
                  </View>
                </View>
              )
            })
          }
        </View>
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
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainHeadPara: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black
  },
  sideBar: {
    padding: 10,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.white,
  },
  containerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
    marginTop: 20,
    marginBottom: 20
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  mainCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
  },
  cardMainIcon: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})