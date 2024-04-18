import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
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
import Form from "react-bootstrap/Form";

const Storehouse = () => {
  const { storehouses, isStorehouseLoading, isStorehouseError } = useSelector(
    (state) => state.storehouse
  );

  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (storehouses?.length === 0) fetchAllStorehouses(dispatch);
  }, [dispatch]);

  const handleDelete = (storehouseId) => {
    deleteOneStorehouse(dispatch, storehouseId);
  };

  const handleAddClick = () => {
    dispatch(storehouseActions.toggleShowStorehouseModal());
  };

  let foundStorehouses = storehouses.filter(
    (house) => house.userId === +localStorage.getItem("currentUser")
  );

  let searchedStorehouses = foundStorehouses.filter((house) =>
    house.name.toLowerCase().includes(userInput.toLowerCase().trim())
  );

  let allStorehouses =
    userInput?.length > 0 ? searchedStorehouses : foundStorehouses;

  if (localStorage.getItem("currentUser") === null)
    return (
      <div>
        There is nothing to see. You can try logging in/signing up first.
      </div>
    );

  if (isStorehouseError) return <div>Something went wrong!</div>;
  else if (isStorehouseLoading) return <div>Loading...</div>;
  else
    return (
      <>
        <div
          className={`my-3 d-flex justify-content-between justify-content-lg-between`}
        >
          <Button onClick={handleAddClick} variant="success" className="">
            Add Storehouse
          </Button>

          <Form.Control
            className={`${styles["search-input"]}`}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search Storehouse"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        {allStorehouses.length === 0 ? (
          <h1 className="mt-4 text-center">No storehouses yet</h1>
        ) : (
          <div className={`row mt-2  ${styles["storehouse-section"]}`}>
            {allStorehouses.map((house) => (
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
                    Storage Capacity - {house.storageCapacity} pieces
                  </Card.Text>
                  <Card.Text
                    className={
                      house?.products?.length >= house.storageCapacity
                        ? "text-danger"
                        : null
                    }
                  >
                    In Use - {house?.products?.length}/{house.storageCapacity}{" "}
                    piece
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

// const mapStateToProps = (state) => {
//   return {
//     storehouses: state.storehouse.storehouses,
//     isStorehouseLoading: state.storehouse.isStorehouseLoading,
//     isStorehouseError: state.storehouse.isStorehouseError,
//   };
// };

// export default connect(mapStateToProps)(Storehouse);
