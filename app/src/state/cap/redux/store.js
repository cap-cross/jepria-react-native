
import { createStore } from 'redux';
import capReducer from './capReducer';

export default function configureStore() {
  return createStore(capReducer);
}
