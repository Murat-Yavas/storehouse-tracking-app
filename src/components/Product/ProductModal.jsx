import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/product-slice";
import { Button, Form, Modal } from "react-bootstrap";
import { addOneProduct } from "../../redux/api/productApiCall";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductModal = () => {
  const [productName, setProductName] = useState("");
  const [entryPrice, setEntryPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const { showProductModal } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const param = useParams();

  const handleCreate = () => {
    const newProduct = {
      entryPrice,
      quantity,
      productName,
      storehouseId: param.id,
    };

    addOneProduct(dispatch, newProduct);
    dispatch(productActions.toggleHideProductModal());
  };

  return (
    <div>
      {showProductModal ? (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showProductModal}
          onHide={() => dispatch(productActions.toggleHideProductModal())}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create a new product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  onChange={(e) => setProductName(e.target.value)}
                  type="text"
                  placeholder="Enter storehouse name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEntryPricey">
                <Form.Label>Entry Price</Form.Label>
                <Form.Control
                  onChange={(e) => setEntryPrice(e.target.value)}
                  type="number"
                  placeholder="Enter storage capacity"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
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
              onClick={() => dispatch(productActions.toggleHideProductModal())}
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

export default ProductModal;
