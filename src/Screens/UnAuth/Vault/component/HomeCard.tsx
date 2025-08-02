import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreditCard, FolderClosed, Lock, Notebook } from 'lucide-react-native'
import { Colors } from '../../../../../utils/Colors'

const HomeCard = () => {

    const data = [
        {
            total: 12,
            name: 'Passwords',
            icon: <Lock size={22} color={'#0a74d7ff'} strokeWidth={2} />,
            backgroundColor: '#b6dfefff'
        },
        {
            total: 8,
            name: 'Notes',
            icon: <Notebook size={22} color={'#50C878'} strokeWidth={2} />,
            backgroundColor: '#d1f3dcff'
        },
        {
            total: 3,
            name: 'Cards',
            icon: <CreditCard size={22} color={'#bf8bff'} strokeWidth={2} />,
            backgroundColor: '#e3d2f7ff'
        },
        {
            total: 12,
            name: 'Documents',
            icon: <FolderClosed size={22} color={'#ffb732'} strokeWidth={2} />,
            backgroundColor: '#f8edd8ff'
        },
    ]
    return (
        <View>
            <View style={styles.container}>
                {
                    data?.map((item, index) => {
                        return (
                            <View style={styles.mainHeader} key={index}>
                                <View style={[styles.iconHeader, { backgroundColor: item?.backgroundColor }]}>
                                    {item?.icon}
                                </View>
                                <View style={styles.mainPara}>
                                    <Text style={styles.mainTop}>{item?.total}</Text>
                                    <Text style={styles.mainParaSec}>{item?.name}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default HomeCard

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    mainHeader: {
        width: '23%',
        borderRadius: 12,
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: Colors.white,
    },

    iconHeader: {
        padding: 10,
        borderRadius: 50
    },
    mainPara: {
        alignItems: 'center',
        marginTop: 10
    },
    mainParaSec: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 14,
        color: Colors.grey
    },
    mainTop: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black
    }
})