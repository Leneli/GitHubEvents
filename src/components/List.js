import React, { useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import { ListSeparator } from './ListSeparator';

const List = ({ data, onPress }) => {
  const renderItem = useCallback(
    ({ item }) => (
      <ListItem id={item.id} name={item.actor?.login} avatar={item.actor?.avatar_url} onPress={onPress} />
    ),
    [onPress],
  );

  const keyExtractor = item => item.id;

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={ListSeparator}
      contentContainerStyle={styles.wrapper}
      showsVerticalScrollIndicator={false}
    />
  );
};

List.propTypes = {
  data: PropTypes.array,
  onPress: PropTypes.func,
};

List.defaultProps = {
  data: [],
  onPress: () => {},
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

export { List };
