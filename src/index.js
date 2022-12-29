import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';

//import Home from "./pages/Home";
import AddBook from "./components/AddProduct"
import BookServices from "./services/categoryservices";
//import BooksList from "./components/BooksList";
import Layout1 from "./Layout1";
import BooksList from "./components/CategoryList";
import ProductAdd from "./components/AddProduct";
//import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="category" element={<BooksList />} />
        <Route path="addproduct" element={<ProductAdd/>} />

        

      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));