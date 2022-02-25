import React from "react";
// import { Container} from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './index.css'
function App() {
  return (
    <>
    <Header/>
    <main 
      className="py-3 d-flex align-items-center justify-content-center" 
      style={{backgroundColor:"black",display: 'flex', justifyContent: 'center'}}
    >
      
      {/* <Container> */}
        <h1 style={{color:"wheat"}}>DigiSet </h1>
         <h1 style={{color:"red"}} >-The Only Place To Buy Digital Assets In Dollars
        </h1>
        
      {/* </Container> */}
    </main>
    <Footer/>
    </>
  );
}

export default App;
