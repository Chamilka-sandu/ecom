import React from "react";
import {Outlet} from "react-router-dom";
//import AddBook from "./AddCategory";

import 'bootstrap/dist/css/bootstrap.min.css';
import BooksList from "./components/CategoryList";



const Layout1 = () => {
  return (
    <>
          
      <BooksList/>
    </>
  );
};

export default Layout1;