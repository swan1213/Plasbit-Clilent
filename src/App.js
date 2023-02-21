import React from 'react';
import Routes from "./components/Routes";
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import "./i18n";

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <HelmetProvider>
                <Routes />
            </HelmetProvider>
        </Provider>
    );
}

export default App;
