import { useDispatch, useSelector } from "react-redux";

import { NavLink, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "./Product.module.css";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  deleteOneProduct,
  fetchProductsByStorehouse,
} from "../../redux/api/productApiCall";

const Product = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const param = useParams();

  useEffect(() => {
    fetchProductsByStorehouse(dispatch, param.id);
  }, []);

  const handleDelete = (id) => {
    deleteOneProduct(dispatch, id);
  };

  return (
    <div className={`${styles["product-section"]}`}>
      {products.map((product) => (
        <Card className={`${styles["product-card"]}`} key={product.id}>
          <Card.Body>
            <Card.Title className="text-center">
              {product.productName}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Quantity : {product.quantity}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Entry Price : {product.entryPrice}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Entry Date : {product.entryDate}
            </Card.Subtitle>

            <div className="container">
              <Card.Link className={`row ${styles["product-buttons"]}`}>
                <Button
                  onClick={() => handleDelete(product.id)}
                  variant="outline-success"
                  className="col-12 col-md-6"
                >
                  Delete
                </Button>

                <NavLink to={`${product.id}`} className="col-12 col-md-6">
                  <Button variant="outline-success">Update</Button>
                </NavLink>
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Product;
