import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Li = ({ label, text }) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

Li.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Li.defaultProps = {
  label: '',
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: 15,
  },

  label: {
    flex: 0.3,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },

  text: {
    flex: 0.7,
    fontSize: 18,
    lineHeight: 24,
  },
});

export { Li };
