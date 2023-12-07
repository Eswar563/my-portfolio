import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import instagramPhotosReducer from './reducers/instagramPhotosReducer';
import netlifySitesReducer from './reducers/netlifySitesReducer';

const rootReducer = {
  instagram: instagramPhotosReducer,
  portfolio: netlifySitesReducer
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;
