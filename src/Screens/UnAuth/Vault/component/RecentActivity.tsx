import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../../utils/Colors'
import { Eye } from 'lucide-react-native'

const RecentActivity = () => {

    const data = [
        {
            name: 'Password: Gmail Account',
            time: 'Updated: 2 hour ago'
        },
        {
            name: 'Notes: Meeting Notes',
            time: 'Created: 1 day ago'
        },
        {
            name: 'Document: Passport.pdf',
            time: 'Added: 3 day ago'
        },
         {
            name: 'Password: Gmail Account',
            time: 'Updated: 2 hour ago'
        },
        {
            name: 'Notes: Meeting Notes',
            time: 'Created: 1 day ago'
        },
        {
            name: 'Document: Passport.pdf',
            time: 'Added: 3 day ago'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.mainHeader}>
                <Text style={styles.mainHeaderPara}>Recent Activity</Text>
                <View>
                    {
                        data?.map((item, index) => {
                            return (
                                <View key={index} style={styles.cardHeader}>
                                    <View style={styles.secHeader}>
                                        <Eye size={25} color={Colors.blue} strokeWidth={1.5} />
                                    </View>
                                    <View style={{ width: '85%' }}>
                                        <Text style={styles.onePara}>{item?.name}</Text>
                                        <Text style={styles.twoPara}>{item?.time}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>

        </View>
    )
}

export default RecentActivity

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
        color: Colors.black,
        marginBottom: 20
    },
    cardHeader: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: Colors.lightgrey
    },
    secHeader: {
        width: '15%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Colors.lightBlue
    },
    onePara:{
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black
    },
    twoPara:{
        fontSize: 12,
        fontWeight: '400',
        color: Colors.grey
    }
})