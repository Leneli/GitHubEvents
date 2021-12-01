import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from '.';

const ListItem = ({ id, name, avatar, onPress }) => {
  const handlePress = () => onPress({ title: name, id });

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handlePress}>
      <View style={styles.avatar}>
        <Avatar uri={avatar} size={50} />
      </View>
      <Text numberOfLines={2} style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
  },

  avatar: {
    marginRight: 20,
  },

  name: {
    flex: 1,
    fontSize: 20,
  },
});

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string,
  avatar: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
  avatar: '',
  name: 'Unknown',
};

export { ListItem };
