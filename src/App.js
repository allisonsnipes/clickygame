import React from 'react'
import './App.css'
// import components from other folder
import card from './components/card'
import container from './components/container'
import footer from './components/footer'
import header from './components/header'
import navbar from './components/navbar'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Board />
        <Footer />
      </div>
    )
	}
}

export default App
