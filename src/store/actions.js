import { Alert } from 'react-native';
import { getFetch } from '../api/getFetch';
import { actionEventsTypes } from '../constants';

const { REQUEST_EVENTS, REQUEST_EVENTS_SUCCESS, REQUEST_EVENTS_FAIL } = actionEventsTypes;
const API_URL = 'https://api.github.com';

export const getEvents = ({ perPage = 25, page = 1 } = {}) =>
  async dispatch => {
    try {
      dispatch({ type: REQUEST_EVENTS });

      const url = `${API_URL}/events`;
      const params = {
        per_page: perPage,
        page,
      };

      const response = await getFetch(url, params);

      if (!response.ok) {
        Alert.alert('Http error', response.data?.message);
        throw Error('events not found');
      }

      // Небольшая задержка, чтобы успел отобразиться прелодер, так красивее
      setTimeout(() => {
        dispatch({type: REQUEST_EVENTS_SUCCESS, payload: response.data});
      }, 500);
    } catch (error) {
      dispatch({type: REQUEST_EVENTS_FAIL});
      console.warn(error);
    }
  };
