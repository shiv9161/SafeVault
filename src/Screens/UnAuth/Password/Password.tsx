import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Copy, Eye, EyeOff, FileLock, Plus, Search, Trash } from 'lucide-react-native'
import { Colors } from '../../../../utils/Colors'
import PasswordCard from './Component/PasswordCard'
import CreatePassModal from './Component/CreatePassModal'

const Password = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.mainHeader}>
          <View>
            <Text style={styles.mainHeadPara}>Passwords</Text>
          </View>
          <TouchableOpacity style={styles.sideBar} onPress={()=>{
            setIsModalVisible(true)
          }}>
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

        <CreatePassModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />

        <PasswordCard />
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
})