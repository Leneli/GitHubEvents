import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = ({ uri, size }) => {
  const styles = StyleSheet.create({
    image: {
      width: size,
      height: size,
      borderRadius: size,
    },
  
    imageEmpty: {
      backgroundColor: '#ccc',
    },
  });

  if (!uri) return <View style={[styles.image, styles.imageEmpty]} />;

  return <Image source={{ uri }} style={styles.image} />;
};

Avatar.propTypes = {
  uri: PropTypes.string,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  uri: '',
  size: 50,
};

export { Avatar };
