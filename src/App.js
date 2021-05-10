import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import rootReducer from "./rootReducer";
import UsersContainer from './users/containers/Users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <UsersContainer />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
