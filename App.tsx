

import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Home from './components/home/home';
import Nav from './components/navigation/navigation';
import notifee from '@notifee/react-native';

function App(): React.JSX.Element {

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: 'hey,lets start workout',
      android: {
        channelId,
        sound:'default',
        vibrationPattern: [300, 500],
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  useEffect(()=>{
    onDisplayNotification()
  },[])

  return(
     <Nav/>
  )
}
export default App;
