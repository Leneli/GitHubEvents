import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { eventsDataSelector, eventsLoadingSelector } from '../store';
import { useUpdate } from '../hooks';
import { List, Preloader, UpdateButton } from '../components';

const MainScreen = ({ navigation }) => {
  const data = useSelector(eventsDataSelector);
  const loading = useSelector(eventsLoadingSelector);
  const [disabled, update] = useUpdate();

  const onPressDetail = useCallback(
    routeParams => navigation.navigate('Details', routeParams),
    [navigation],
  );

  useFocusEffect(update);

  return (
    <SafeAreaView style={styles.area} edges={['bottom']}>
      <View style={styles.wrapper}>
        {loading ? <Preloader /> : (
          <List data={data} onPress={onPressDetail} />
        )}
      </View>
      <UpdateButton disabled={disabled} onPress={update} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    paddingTop: 15,
  },
});

export { MainScreen };
