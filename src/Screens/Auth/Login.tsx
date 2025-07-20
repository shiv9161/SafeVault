import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../utils/Colors'
import { Fingerprint, Lock, Shield } from 'lucide-react-native'

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <Shield size={52} color={Colors.blue} strokeWidth={2} />
                </View>
                <View style={styles.mainHeader}>
                    <Text style={styles.mainHeaderPara}>Safe Vault</Text>
                    <Text style={styles.mainHeaderParaTwo}>Secure Password Manager</Text>

                    <View style={styles.mainTopHeader}>
                        <View style={styles.mainTopBar}>
                            <TouchableOpacity style={styles.mainTop} onPress={() => {
                                console.log('---clicked--->')
                            }}>
                                <Fingerprint size={42} color={Colors.white} strokeWidth={2} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.touchBar}>
                            <Text style={styles.touchPara}>Touch to unlock with biometrics</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.pinHeader}>
                        <Lock size={18} color={Colors.black} strokeWidth={1.5} />
                        <Text style={styles.touchPara}>Use PIN instead</Text>
                    </TouchableOpacity>

                    <View style={styles.dataHeader}>
                        <Shield size={18} color={Colors.blue} strokeWidth={1.5} />
                        <Text style={styles.touchPara}>Your data is encrypted and secure</Text>
                    </View>
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
        padding: 30,
        borderRadius: 100,
        borderColor: Colors.black,
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    mainHeader: {
        marginTop: 50,
        alignItems: 'center',
    },
    mainHeaderPara: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black
    },
    mainHeaderParaTwo: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.grey,
        lineHeight: 30
    },
    mainTop: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
        backgroundColor: Colors.blue
    },
    mainTopHeader: {
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 30,
        marginTop: 30,
        borderRadius: 20
    },
    touchPara: {
        fontWeight: '500',
        color: Colors.black
    },
    pinHeader: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    dataHeader: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    mainTopBar: {
        alignItems: 'center'
    },
    touchBar: {
        marginTop: 20
    }
})
