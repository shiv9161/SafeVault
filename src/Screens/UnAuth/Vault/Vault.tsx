import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreditCard, FolderClosed, Lock, Notebook, Shield } from 'lucide-react-native'
import { Colors } from '../../../../utils/Colors'

const Vault = () => {
  const data = [
    {
      total: 12,
      name: 'Passwords',
      icon: <Lock size={22} color={Colors.blue} strokeWidth={2} />
    },
    {
      total: 8,
      name: 'Notes',
      icon: <Notebook size={22} color={Colors.blue} strokeWidth={2} />
    },
    {
      total: 3,
      name: 'Cards',
      icon: <CreditCard size={22} color={Colors.blue} strokeWidth={2} />
    },
    {
      total: 12,
      name: 'Documents',
      icon: <FolderClosed size={22} color={Colors.blue} strokeWidth={2} />
    },
  ]
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.topHeader}>
          <Text style={styles.topHeaderPara}>Your Vault is Secure</Text>
          <View style={styles.topHeaderShield}>
            <Shield size={22} color={Colors.blue} strokeWidth={2} />
          </View>
        </View>

        <View style={styles.secMidHeader}>
          <View style={styles.secMid}>
            <Shield size={25} color={Colors.white} strokeWidth={2} />
          </View>
          <View style={styles.secMidTwo}>
            <Text style={styles.secParaOne}>Vault Status</Text>
            <Text style={styles.secParaTwo}>All system secure</Text>
          </View>
          <View style={styles.secMidThree}>
            <View style={styles.midder}>
              <Text style={styles.midderPara}>100%</Text>
            </View>
          </View>
        </View>

        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          {
            data?.map((item, index) => {
              return (
                <View style={{ borderWidth: 1, width: '23%', borderRadius: 12, alignItems: 'center', padding: 10 }} key={index}>
                  <View style={{ borderWidth: 1, padding: 10, borderRadius: 50 }}>
                    {item?.icon}
                  </View>
                  <View style={{alignItems: 'center', marginTop: 10}}>
                    <Text>{item?.total}</Text>
                    <Text style={{textAlign: 'center', marginTop: 5}}>{item?.name}</Text>
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

export default Vault

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topHeaderPara: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black
  },
  topHeaderShield: {
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
  secMidHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#50C878',
    borderRadius: 12,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  secMid: {
    width: '10%'
  },
  secMidTwo: {
    width: '70%'
  },
  secMidThree: {
    width: '20%',
    alignItems: 'flex-end'
  },
  secParaOne: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
    lineHeight: 25
  },
  secParaTwo: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.white,
    lineHeight: 25
  },
  midder: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  midderPara: {
    color: Colors.white,
    fontWeight: '600'
  }
})