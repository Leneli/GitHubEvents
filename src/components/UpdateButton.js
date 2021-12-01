import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const UpdateButton = ({ label, disabled, labelDisabled, onPress }) => (
  <View style={styles.wrapper}>
    <Button title={!disabled? label : labelDisabled} disabled={disabled} onPress={onPress} />
  </View>
);

UpdateButton.propTypes = {
  label: PropTypes.string,
  labelDisabled: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

UpdateButton.defaultProps = {
  label: 'Update',
  labelDisabled: 'Wait...',
  disabled: false,
  onPress: () => {},
};

const styles= StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

export { UpdateButton };
