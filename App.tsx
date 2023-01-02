import { View, Text } from 'react-native'
import React, { useReducer } from 'react'
import DashboardRouter from './src/Routes/DashboardRoutes/DashboardRoutes'
import { lightStyles } from './src/context/styles/lightStyles'
import { ThemeActions, ThemeContext } from './src/context/ThemeContext'

export default function App() {

  const init = () => {
    return lightStyles
  }

  const [state, dispatch] = useReducer(ThemeActions, lightStyles, init)

  return (
    <>
      <ThemeContext.Provider 
        value={
          {
            state,
            dispatch,
          }
        }
      >
        <DashboardRouter />
      </ThemeContext.Provider>
    </>
  )
}