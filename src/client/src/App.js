import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux' 
import store from './store'
import AuthenticationContainer from './containers/AuthenticationContainer'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AuthenticationContainer />
      </Provider>
    </div>
  );
}

export default App;
