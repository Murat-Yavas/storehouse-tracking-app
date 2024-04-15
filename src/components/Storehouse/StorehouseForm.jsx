import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchOneStorehouse,
  updateOneStorehouse,
} from "../../redux/api/storehouseApiCall";
import styles from "./StorehouseForm.module.css";
import { useNavigate } from "react-router-dom";

const StorehouseForm = ({ storehouses, singleStorehouse }) => {
  const dispatch = useDispatch();
  const param = useParams();
  const storehouseToUpdate = storehouses.filter(
    (house) => house.id === +param.storehouseId
  );
  const navigate = useNavigate();

  const [name, setName] = useState(storehouseToUpdate[0]?.name);
  const [address, setAddress] = useState(storehouseToUpdate[0]?.address);
  const [capacity, setCapacity] = useState(
    storehouseToUpdate[0]?.storageCapacity
  );

  useEffect(() => {
    if (!storehouseToUpdate[0]) {
      fetchOneStorehouse(dispatch, param.storehouseId);
    }
  }, [dispatch, param]);

  useEffect(() => {
    if (!storehouseToUpdate[0]) {
      setName(singleStorehouse?.name);
      setAddress(singleStorehouse?.address);
      setCapacity(singleStorehouse?.storageCapacity);
    }
  }, [singleStorehouse]);

  const handleUpdate = (storehouseId) => {
    const newStorehouse = {
      ...storehouseToUpdate[0],
      name,
      address,
      storageCapacity: +capacity,
    };
    updateOneStorehouse(storehouseId, newStorehouse);

    navigate("/storehouses");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form className={`${styles["storehouse-form"]}`} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Storehouse Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter storehouse name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Storage Capacity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter storage capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="success"
        type="submit"
        onClick={() => handleUpdate(storehouseToUpdate[0].id)}
        className={`${styles["storehouse-button"]}`}
      >
        Update
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    singleStorehouse: state.storehouse.singleStorehouse,
    storehouses: state.storehouse.storehouses,
  };
};

export default connect(mapStateToProps)(StorehouseForm);
