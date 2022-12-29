import React from "react";
import {Outlet} from "react-router-dom";
//import AddBook from "./AddCategory";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import AddBook from "./AddCategory";
import BooksList from "./CategoryList";
//import AddProduct from "./AddProduct";
import AddCate from "./AddCategory";
import CatList from "./CategoryList";


const Layout = () => {
  return (
    <>
          <Navbar />
          <AddCate/>
          <CatList/>
      
    </>
  );
};

export default Layout;