import React, { useState } from 'react';
import notificationsData from './notifications';
import Notification from './Notification';
import './index.css';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notifications ({notifications.length})</h1>
      <button className="clear-all" onClick={clearAllNotifications}>Clear All</button>
      <div className="notifications-list">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            notification={notification}
            onClear={clearNotification}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
