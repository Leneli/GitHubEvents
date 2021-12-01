import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Preloader = () => (
  <View style={styles.wrapper}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Preloader };
