import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { eventByIdSelector } from '../store';
import { Avatar, Li, NoData } from '../components';

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const event = useSelector(eventByIdSelector(id));

  if (!event) return <NoData />;

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <View style={styles.actor}>
        <Avatar uri={event.actor?.avatar_url} size={150} />

        <View style={styles.actorData}>
          <Text style={styles.actorName}>{event.actor?.login}</Text>
          <Text style={styles.actorUrl}>{event.actor?.url}</Text>
        </View>
      </View>

      <View style={styles.hr} />

      <Text style={styles.title}>Event:</Text>
      <Li label="Type" text={event.type} />
      <Li label="Is public" text={`${event.public}`} />
      <Li label="Created at" text={event.created_at} />
      <Li label="Repo name" text={event.repo?.name} />
      <Li label="Repo url" text={event.repo?.url} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    paddingTop: 34,
  },

  actor: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  actorData: {
    flex: 1,
    marginLeft: 15,
  },

  actorName: {
    marginBottom: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },

  actorUrl: {
    fontSize: 16,
  },

  hr: {
    height: 1,
    marginVertical: 45,
    backgroundColor: '#ccc',
  },

  title: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export { DetailsScreen };
