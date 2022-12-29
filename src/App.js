import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap-v5";
import AddBook from "./components/AddCategory";
import BooksList from "./components/CategoryList";
import AddProduct from './components/AddProduct';
import ProductList from "./components/ProductList";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
class App extends Component {
  render() {

  

    return (
      <div className="App">
        
        <App/>
      
      </div>
    );
  }
       
}
// function App() {
//   const [bookId, setBookId] = useState("");

//   const getBookIdHandler = (id) => {
//     console.log("The ID of document to be edited: ", id);
//     setBookId(id);
//   };
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" className="header">
//         <Container>
//           <Navbar.Brand href="#home">Ecommerce App -Admin Dashbord</Navbar.Brand>
//         </Container>
//       </Navbar>
        
       
//        <Container style={{ width: "400px" }}>
//         <Row>
//           <Col>
//             <AddBook id={bookId} setBookId={setBookId} />
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Row>
//           <Col>
//             <BooksList getBookId={getBookIdHandler} />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

export default App;