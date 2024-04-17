import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, connect } from "react-redux";
import {
  fetchOneProduct,
  updateOneProduct,
} from "../../redux/api/productApiCall";
import { useParams } from "react-router-dom";
import styles from "./ProductForm.module.css";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ products, productById }) => {
  const dispatch = useDispatch();
  const param = useParams();
  const productToUpdate = products.filter((p) => p.id === +param.productId);

  const [productName, setProductName] = useState(productById?.productName);
  const [quantity, setQuantity] = useState(productById?.quantity);
  const [entryPrice, setEntryPrice] = useState(productById?.entryPrice);
  const [emptyInputMessage, setEmptyInputMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchOneProduct(dispatch, +param.productId);
  }, [dispatch, param]);

  useEffect(() => {
    if (Object.keys(productById)?.length !== 0) {
      setProductName(productById?.productName);
      setQuantity(productById?.quantity);
      setEntryPrice(productById?.entryPrice);
    }
  }, [productById]);

  const handleUpdate = (id) => {
    if (productName === "" || entryPrice === "" || quantity === "")
      setEmptyInputMessage("Inputs cannot be left blank");
    else {
      const newProduct = {
        ...productToUpdate[0],
        productName,
        quantity,
        entryPrice,
      };
      updateOneProduct(id, { ...newProduct, storehouseId: +param.id });
      setEmptyInputMessage("");
      navigate(`/storehouses/${param.id}/products`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form className={`${styles["product-form"]}`} onSubmit={handleSubmit}>
      <div className="text-danger">{emptyInputMessage}</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          value={productName}
          type="text"
          placeholder="Enter product name"
          onChange={(e) => setProductName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          value={quantity}
          type="number"
          placeholder="Enter quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEntryPrice">
        <Form.Label>Entry Price</Form.Label>
        <Form.Control
          value={entryPrice}
          type="text"
          placeholder="Enter entry price"
          onChange={(e) => setEntryPrice(e.target.value)}
        />
      </Form.Group>

      <Button
        onClick={() => handleUpdate(productById.id)}
        variant="success"
        type="submit"
        className={`${styles["product-button"]}`}
      >
        Update
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    productById: state.product.productById,
  };
};

export default connect(mapStateToProps)(ProductForm);
