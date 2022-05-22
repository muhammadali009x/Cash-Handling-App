import React from 'react'
import Header from './Header'
import '../css/App.css'

// import ParticlesBackground from './ParticlesBackground'

const App = (props) => {
  return (
    <div className='App'>
        <Header />
        <div className="content">
          {props.children}
        </div>
    </div>
  )
}

export default App
