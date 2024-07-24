import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import FirstScreen from './src/screens/firstScreen'

export default function App() {
  return (
    <Provider store={store}>
      <FirstScreen/>
    </Provider>
    
  )
}