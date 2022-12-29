import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
              <li>
          <Link to="/category">Categories</Link>
                  <ul>
                      <li>
                          <Link to="/category">Phone</Link>
                          <ul>
                              <li>
                                <Link to="/blogs/phone/Android">Android</Link>    
                              </li>
                              <li>
                                <Link to="/blogs/phone/Iphone">Iphone</Link>    
                              </li>
                          </ul>
                      </li>
                      <li>
                          <Link to="/blogs/laptop">Laptop</Link>
                          <ul>
                              <li>
                                  <li>
                          <Link to="/blogs/laptop/Hp">Hp</Link>
                                  </li>
                                  <li>
                          <Link to="/blogs/laptop/Acer">Acer</Link>
                              </li>
                              </li>
                          </ul>
                      </li>
                  </ul>
        </li>
        
          </ul>
          <ul>
              <li>
            <Link to="/addproduct">Add Product</Link>
 
              </li>
          </ul>
    </nav>
  );
}

export default Navbar;