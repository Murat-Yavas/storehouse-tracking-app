import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneStorehouse,
  fetchAllStorehouses,
  updateOneStorehouse,
} from "../../redux/api/storehouseApiCall";
import Card from "react-bootstrap/Card";
import styles from "./Storehouse.module.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Storehouse = () => {
  const { storehouses } = useSelector((state) => state.storehouse);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllStorehouses(dispatch);
  }, []);

  const handleDelete = (storehouseId) => {
    deleteOneStorehouse(dispatch, storehouseId);
  };

  return (
    <div className={`${styles["storehouse-section"]}`}>
      {storehouses.map((house) => (
        <Card className={`${styles["storehouse-card"]}`} key={house.id}>
          <Card.Body>
            <Card.Title className="text-center">
              Storehouse - {house.name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Location - {house.address}
            </Card.Subtitle>
            <Card.Text>
              Storage Capacity - {house.storageCapacity} piece
            </Card.Text>
            <Card.Text>
              In Use - {house.product.length}/{house.storageCapacity} piece
            </Card.Text>

            <div className="container">
              <Card.Link className={`row ${styles["card-buttons"]}`}>
                <Button
                  variant="outline-success"
                  onClick={() => handleDelete(house.id)}
                  className="col-12 col-md-3"
                >
                  Delete
                </Button>

                <NavLink
                  to={`/storehouses/${house.id}`}
                  className="col-12 col-md-3"
                >
                  <Button variant="outline-success">Update</Button>
                </NavLink>

                <NavLink
                  to={`/storehouses/${house.id}/products`}
                  className="col-12 col-md-6 px-3"
                >
                  <Button variant="outline-success">See Products</Button>
                </NavLink>
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Storehouse;
