import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider,  connect } from 'react-redux';

import configureStore from './src/state/cap/redux/store';
import ReactApp from './src/view/ReactApp';
import { add, save, edit, remove, select, viewDetails, viewList, search, find } from './src/state/cap';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
 * Корень приложения.
 * Здесь сосредоточены все SM-framework(Redux)-зависимости и другие конфигурационные элементы
 */
const mapStateToProps = (state) => {
  return {
      items: state.items,
      workstate: state.workstate,
      currentIndex: state.currentIndex
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      add: () => dispatch(add()),
      save: () => dispatch(save()),
      edit: () => dispatch(edit()),
      remove: () => dispatch(remove()),
      select: (index) => dispatch(select(index)),
      viewDetails: () => dispatch(viewDetails()),
      viewList: () => dispatch(viewList()),
      search: () => dispatch(search()),
      find: () => dispatch(find()),
  };
}

const ConnectedToStoreApp = connect(mapStateToProps, mapDispatchToProps)(ReactApp);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
          <ConnectedToStoreApp />
      </Provider>
    );
  }
}
