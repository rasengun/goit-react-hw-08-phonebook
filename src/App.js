import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import UserRoutes from 'UserRoutes';

import store from './redux/store';

import './index.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
