import React from "react";
import { Container} from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import './index.css'
const App = () =>{
  return (
    <>
        <Header/>
        <main 
          className="py-3 d-flex align-items-center justify-content-center" 
          style={{backgroundColor:"black",display: 'flex', justifyContent: 'center'}}
        >
          <Container>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} exact/>
                <Route path="/product/:id" element={<ProductScreen />}/>
            </Routes> 
          </BrowserRouter>
            
          </Container>
          
        </main>
        <Footer/>
    </>
  )
}

export default App;
