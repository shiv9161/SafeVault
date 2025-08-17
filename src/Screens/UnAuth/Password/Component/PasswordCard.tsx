import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { Copy, Eye, FileLock, Trash } from 'lucide-react-native'
import { Colors } from '../../../../../utils/Colors'

const data = [1, 2, 3];

const PasswordCard = () => {
  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View key={index} style={styles.mainCard}>
      <View style={styles.headerRow}>
        <View style={styles.iconWrapper}>
          <View style={styles.cardMainIcon}>
            <FileLock size={22} color={Colors.blue} strokeWidth={2} />
          </View>
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Gmail</Text>
          <Text style={styles.subTitle}>Shiv@gmail.com</Text>
        </View>

        <View style={styles.strengthWrapper}>
          <Text style={styles.strengthText}>Strong</Text>
        </View>
      </View>

      <Text style={styles.passwordLabel}>PASSWORD</Text>

      <View style={styles.passwordRow}>
        <View style={styles.passwordWrapper}>
          <Text style={styles.password}>************</Text>
        </View>

        <View style={styles.passwordActions}>
          <TouchableOpacity>
            <Copy size={22} color={Colors.black} strokeWidth={2} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Eye size={22} color={Colors.black} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Last modified: 1 day ago</Text>
        <TouchableOpacity>
          <Trash size={18} color={'red'} strokeWidth={2} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PasswordCard;

const styles = StyleSheet.create({
  mainCard: {
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    width: '18%',
  },
  cardMainIcon: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    width: '58%',
  },
  title: {
    fontWeight: '600',
    color: Colors.black,
    lineHeight: 22,
  },
  subTitle: {
    color: Colors.black,
    lineHeight: 22,
  },
  strengthWrapper: {
    width: '20%',
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
    borderRadius: 6,
    paddingVertical: 2,
  },
  strengthText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.blue,
  },
  passwordLabel: {
    marginTop: 10,
    color: Colors.black,
    fontWeight: '500',
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  passwordWrapper: {
    width: '80%',
  },
  password: {
    color: Colors.black,
  },
  passwordActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 10,
    borderColor: Colors.lightgrey,
  },
  footerText: {
    fontSize: 12,
    color: Colors.grey,
  },
});
