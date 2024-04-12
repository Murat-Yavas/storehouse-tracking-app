import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStorehouses } from "../../redux/api/storehouseApiCall";
import Card from "react-bootstrap/Card";
import styles from "./Storehouse.module.css";
import { NavLink } from "react-router-dom";

const Storehouse = () => {
  const { storehouses } = useSelector((state) => state.storehouse);
  const dispatch = useDispatch();
  console.log(storehouses);

  useEffect(() => {
    fetchAllStorehouses(dispatch);
  }, []);

  return (
    <div className={`${styles["storehouse-section"]}`}>
      {storehouses.map((house) => (
        <Card
          className={`${styles["storehouse-card"]}`}
          key={house.id}
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Storehouse - {house.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Location - {house.address}
            </Card.Subtitle>
            <Card.Text>
              Storage Capacity - {house.storageCapacity} piece
            </Card.Text>
            <Card.Text>
              In Use - {house.product.length}/{house.storageCapacity} piece
            </Card.Text>

            <Card.Link>
              <NavLink>See Products</NavLink>
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Storehouse;
