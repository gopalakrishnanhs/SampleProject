/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Login from './module/login';
import Signup from './module/signup';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoginView, setLoginView] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          {isLoginView ? <Login onSignup={() => setLoginView(false)}/>
            : <Signup onLogin={() => setLoginView(true)}/>
          }
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
