import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/product-slice";
import { Button, Form, Modal } from "react-bootstrap";
import { addOneProduct } from "../../redux/api/productApiCall";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { storehouseActions } from "../../redux/storehouse-slice";
import { fetchAllStorehouses } from "../../redux/api/storehouseApiCall";

const ProductModal = () => {
  const [productName, setProductName] = useState("");
  const [entryPrice, setEntryPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [emptyInputMessage, setEmptyInputMessage] = useState("");
  const { showProductModal } = useSelector((state) => state.product);
  const { storehouses } = useSelector((state) => state.storehouse);
  const dispatch = useDispatch();

  const param = useParams();
  useEffect(() => {
    if (storehouses?.length === 0) fetchAllStorehouses(dispatch);
  }, [dispatch]);

  const handleCreate = () => {
    const foundStorehouse = storehouses.find((house) => house.id === +param.id);

    if (productName === "" || entryPrice === "" || quantity === "")
      setEmptyInputMessage("Inputs cannot be left blank");
    else {
      const newProduct = {
        entryPrice,
        quantity,
        productName,
        storehouseId: param.id,
      };
      setEmptyInputMessage("");

      const newStorehouse = {
        ...foundStorehouse,
        products: [...foundStorehouse.products, newProduct],
      };
      let newStorehouses = storehouses.map((house) =>
        house.id == param.id ? newStorehouse : house
      );
      dispatch(storehouseActions.updateStorehouse(newStorehouses));
      addOneProduct(dispatch, newProduct);
      dispatch(productActions.toggleHideProductModal());
    }
  };

  const handleCloseModal = () => {
    dispatch(productActions.toggleHideProductModal());
    setEmptyInputMessage("");
  };

  return (
    <div>
      {showProductModal ? (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showProductModal}
          onHide={() => handleCloseModal()}
        >
          <Modal.Header className="d-flex flex-column" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create a new product
            </Modal.Title>
            <div className="text-danger">{emptyInputMessage}</div>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  onChange={(e) => setProductName(e.target.value)}
                  type="text"
                  placeholder="Enter product name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEntryPricey">
                <Form.Label>Entry Price</Form.Label>
                <Form.Control
                  onChange={(e) => setEntryPrice(e.target.value)}
                  type="number"
                  placeholder="Enter entry price"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  placeholder="Enter quantity"
                />
              </Form.Group>

              <Button variant="success" type="button" onClick={handleCreate}>
                Create
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => handleCloseModal()}>
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

export default ProductModal;
