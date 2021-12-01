export const eventsDataSelector = state => state.events.data;
export const eventsLoadingSelector = state => state.events.loading;
export const eventByIdSelector = id => state => state.events.data.find(item => item.id === id);
