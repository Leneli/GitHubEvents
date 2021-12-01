import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NoData = () => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>Sorry, no data</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
  },
});

export { NoData };
