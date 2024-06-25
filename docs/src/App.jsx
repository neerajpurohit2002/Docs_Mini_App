import React from 'react'
import Background from './Componets/Background'
import Foreground from './Componets/Foreground'

const App = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Background></Background>
      <Foreground></Foreground>
    </div>
  )
}

export default App

