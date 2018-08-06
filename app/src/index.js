import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider,  connect } from 'react-redux';

import configureStore from './state/cap/redux/store';
import ReactApp from './view/ReactApp';
import { add, save, edit, remove, select, viewDetails, viewList, search, find } from './state/cap';

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
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Provider store={configureStore()}>
          <ConnectedToStoreApp />
      </Provider>
    );
  }
}
