import React, {useState} from 'react';
import { NotificationContainer } from 'react-notifications';
import Login from './Login';
import Chat from './Chat';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import './App.css';

const App = () => {

  const [user, setUser] = useState(null);

  const renderApp = () => {
    if (user) {
      return <Chat user={user} />
    }
    return <Login setUser={setUser} />
  }

  return (
    <div className='container'>
      {renderApp()}
    </div>
  );
};
export default App;