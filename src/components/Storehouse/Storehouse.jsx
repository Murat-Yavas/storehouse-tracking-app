import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneStorehouse,
  fetchAllStorehouses,
} from "../../redux/api/storehouseApiCall";
import Card from "react-bootstrap/Card";
import styles from "./Storehouse.module.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { storehouseActions } from "../../redux/storehouse-slice";
import StorehouseModal from "./StorehouseModal";

const Storehouse = () => {
  const { storehouses, isStorehouseLoading, isStorehouseError } = useSelector(
    (state) => state.storehouse
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllStorehouses(dispatch);
  }, [dispatch]);

  const handleDelete = (storehouseId) => {
    deleteOneStorehouse(dispatch, storehouseId);
  };

  const handleAddClick = () => {
    dispatch(storehouseActions.toggleShowStorehouseModal());
  };

  const foundStorehouses = storehouses.filter(
    (house) => house.userId === +localStorage.getItem("currentUser")
  );

  if (isStorehouseError) return <div>Something went wrong!</div>;
  else if (isStorehouseLoading) return <div>Loading...</div>;
  else
    return (
      <>
        <div
          className={`my-3 d-flex justify-content-center justify-content-lg-start`}
        >
          <Button onClick={handleAddClick} variant="success">
            Add Storehouse
          </Button>
        </div>
        {foundStorehouses.length === 0 ? (
          <h1 className="mt-4 text-center">No storehouses yet</h1>
        ) : (
          <div className={`row mt-2  ${styles["storehouse-section"]}`}>
            {foundStorehouses.map((house) => (
              <Card
                className={`col-12 col-md-6 col-xl-4  ${styles["storehouse-card"]}`}
                key={house.id}
              >
                <Card.Body>
                  <Card.Title className="text-center">
                    {house.name.charAt(0).toUpperCase() + house.name.slice(1)}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Location - {house.address}
                  </Card.Subtitle>
                  <Card.Text>
                    Storage Capacity - {house.storageCapacity} piece
                  </Card.Text>
                  <Card.Text>
                    In Use - {house?.product?.length || 0}/
                    {house.storageCapacity} piece
                  </Card.Text>

                  <div className="container">
                    <div className={`row ${styles["card-buttons"]}`}>
                      <Button
                        variant="outline-success"
                        onClick={() => handleDelete(house.id)}
                        className="px-3"
                      >
                        Delete
                      </Button>

                      <NavLink
                        className="btn btn-outline-success px-3 my-2 my-md-0"
                        to={`/storehouses/${house.id}`}
                      >
                        Update
                      </NavLink>

                      <NavLink
                        className="btn btn-outline-success px-3"
                        to={`/storehouses/${house.id}/products`}
                      >
                        See Products
                      </NavLink>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        <StorehouseModal />
      </>
    );
};

export default Storehouse;
