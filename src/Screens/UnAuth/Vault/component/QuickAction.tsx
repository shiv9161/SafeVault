import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../../utils/Colors'
import { Notebook, Plus } from 'lucide-react-native'

const QuickAction = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainHeader}>
                <Text style={styles.mainHeaderPara}>Quick Actions</Text>
                <View style={styles.quickMain}>
                    <TouchableOpacity style={styles.passButton}>
                        <Plus size={20} color={Colors.blue} strokeWidth={2} />
                        <Text style={styles.passButtonPara}>Add Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noteButton}>
                        <Notebook size={20} color={Colors.green} strokeWidth={2} />
                        <Text style={styles.noteButtonPara}>New Note</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default QuickAction

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    mainHeader: {
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: Colors.white,
        padding: 20
    },
    mainHeaderPara: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black
    },
    quickMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    passButton: {
        width: '45%',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: Colors.lightBlue,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    },
    passButtonPara: {
        color: Colors.blue,
        fontWeight: '600'
    },
    noteButton: {
        width: '45%',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: Colors.lightGreen,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    },
    noteButtonPara: {
        color: Colors.green,
        fontWeight: '600'
    }
})