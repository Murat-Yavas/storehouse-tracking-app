import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "./Product.module.css";

const Product = () => {
  const param = useParams();
  const { storehouses } = useSelector((state) => state.storehouse);

  return (
    <div className={`${styles["product-section"]}`}>
      {storehouses
        ?.filter((item) => item.id === Number(param.id))[0]
        ?.product?.map((product) => (
          <Card
            className={`${styles["product-card"]}`}
            style={{ width: "18rem" }}
            key={product.id}
          >
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
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Product;
