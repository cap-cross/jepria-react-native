import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import './css/JepRia.css';
import registerServiceWorker from './registerServiceWorker';
import App from './view/App';
import configureStore from './state/cap/redux/store';
import { add, save, edit, remove, select, viewDetails, viewList, search, find } from './state/cap';

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

const ConnectedToStoreApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    (
        <Provider store={configureStore()}>
            <ConnectedToStoreApp />
        </Provider>
    ),
    document.getElementById('root')
);

registerServiceWorker();
