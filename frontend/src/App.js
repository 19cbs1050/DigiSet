import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
      <main 
      //className='py-3'
      className="py-3 d-flex align-items-center justify-content-center" 
      style={{backgroundColor:"black",display: 'flex', justifyContent: 'center'}}
      >
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer/>
    </Router>
    </div>
  )
}

export default App