import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addOneStorehouse } from "../../redux/api/storehouseApiCall";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storehouseActions } from "../../redux/storehouse-slice";

const StoreHouseModal = () => {
  const [name, setName] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const { showStorehouseModal } = useSelector((state) => state.storehouse);

  const handleCreate = () => {
    const storehouseInfo = { name, storageCapacity, address };
    addOneStorehouse(dispatch, storehouseInfo);
    dispatch(storehouseActions.toggleHideStorehouseModal());
  };

  return (
    <div>
      {showStorehouseModal ? (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showStorehouseModal}
          onHide={() => dispatch(storehouseActions.toggleHideStorehouseModal())}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create a new storehouse
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicStorehouseName">
                <Form.Label>Storehouse Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter storehouse name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicStorageCapacity">
                <Form.Label>Storage Capacity</Form.Label>
                <Form.Control
                  onChange={(e) => setStorageCapacity(e.target.value)}
                  type="number"
                  placeholder="Enter storage capacity"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicStorageAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Enter address"
                />
              </Form.Group>

              <Button variant="success" type="button" onClick={handleCreate}>
                Create
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={() =>
                dispatch(storehouseActions.toggleHideStorehouseModal())
              }
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default StoreHouseModal;
