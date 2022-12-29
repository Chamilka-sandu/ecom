import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap-v5";
//import BookDataService from "../services/book.services";
import productservice from "../services/productservice";

const ProductAdd= ({ id, setBookId }) => {
  const [product, setTitle] = useState("");
  const [price, setprice] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState("");
  const [check, setCheck] = useState("");
    const [check1, setCheck1] = useState("");
  const [check2, setCheck2] = useState("");

    const [check3, setCheck3] = useState("");

  const [flag, setFlag] = useState(true);

  const [message, setMessage] = useState({ error: false, msg: "" });

  
  const [state, setState] = useState({
    Fever: false,
    Headache: false,
    Nausea: false,
    MusclePain: false,
  });
    
  const handleCheckbox =  (event) => {
    console.log(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (product === "" || price === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      product,
      price,
      status,
      file,
      check1,
      check2,
      check,
      check3
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await productservice.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await productservice.addBooks(newBook);
        setMessage({ error: false, msg: "New Category added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setprice("");
    setStatus("");
    setFile("");
    setCheck("");
    setCheck1("");
   setCheck2("");
        setCheck3("");

    

  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await productservice.getBook(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().product);
      setprice(docSnap.data().price);
      setStatus(docSnap.data().type);
      setFile(docSnap.data().file);
      setCheck(docSnap.data().check);
      setCheck1(docSnap.data().check1)
      setCheck2(docSnap.data().check2)
      setCheck3(docSnap.data().check3)
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">Product Name</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="product name"
                value={product}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">Product Price</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="product price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">Type</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="product type"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
            <Form.Control.Feedback type="invalid" tooltip>
           
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
          <Form.Label>Choose Relavant Category</Form.Label>

            <Form.Check
              
              name="terms"
              label="Apple"
             
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
              value={check}
              onChange={(e) => setCheck(e.target.value)}
            />
            <Form.Check
              
              name="terms"
              label="Huwawei"
             
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
              value={check1}
              onChange={(e) => setCheck1(e.target.value)}
            />
            <Form.Check
              
              name="terms"
              label="Hp"
             
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
              value={check2}
              onChange={(event) => setCheck2(event.target.value)}
            />
            <Form.Check
              
              name="terms"
              label="Acer"
             
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
              value={check3}
              onChange={(e) => setCheck3(e.target.value)}
            />
          </Form.Group>

     
              
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ProductAdd;
