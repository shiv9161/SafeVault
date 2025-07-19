import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../utils/Colors'
import { Shield } from 'lucide-react-native'

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <Shield size={52} color={Colors.blue} strokeWidth={2} />
                </View>
                <View style={styles.mainHeader}>
                    <Text>Safe Vault</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',    
        paddingHorizontal: 20,
        paddingTop: 20
    },
    iconWrapper: {
        borderWidth: 1,
        padding: 30,
        borderRadius: 100,
        borderColor: Colors.black,
        backgroundColor: Colors.white,
      
        // iOS Shadow
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      
        // Android Shadow (elevation)
        elevation: 5,
      },
      mainHeader:{
        marginTop: 30
      }
})
