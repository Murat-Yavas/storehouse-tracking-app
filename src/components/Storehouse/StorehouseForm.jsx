import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect, useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  fetchOneStorehouse,
  updateOneStorehouse,
} from "../../redux/api/storehouseApiCall";

const StorehouseForm = ({ storehouses, singleStorehouse }) => {
  const dispatch = useDispatch();
  const param = useParams();
  const storehouseToUpdate = storehouses.filter(
    (house) => house.id === +param.storehouseId
  );

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
    // Navigate("/storehouses");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        variant="primary"
        type="submit"
        onClick={() => handleUpdate(storehouseToUpdate[0].id)}
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
