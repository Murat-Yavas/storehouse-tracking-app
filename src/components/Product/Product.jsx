import { useDispatch, useSelector } from "react-redux";

import { NavLink, useParams } from "react-router-dom";
import styles from "./Product.module.css";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  deleteOneProduct,
  fetchProductsByStorehouse,
} from "../../redux/api/productApiCall";
import { productActions } from "../../redux/product-slice";
import ProductModal from "./ProductModal";
import { fetchOneStorehouse } from "../../redux/api/storehouseApiCall";

const Product = () => {
  const { products, isProductLoading, isProductError } = useSelector(
    (state) => state.product
  );
  const { singleStorehouse, storehouses } = useSelector(
    (state) => state.storehouse
  );
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    fetchOneStorehouse(dispatch, param.id);
  }, [dispatch]);

  useEffect(() => {
    fetchProductsByStorehouse(dispatch, param.id);
  }, [dispatch]);

  const handleDelete = (id) => {
    let storehouse = storehouses.find((house) => house.id == param.id);
    let newProducts = {};
    if (storehouse) {
      newProducts = storehouse.products.filter((p) => p.id != id);
    }

    let newStorehouse = { ...storehouse, products: newProducts };
    let newStorehouses = storehouses.map((house) =>
      house.id == param.id ? newStorehouse : house
    );

    deleteOneProduct(dispatch, id, newStorehouses);
  };

  const handleAddClick = () => {
    dispatch(productActions.toggleShowProductModal());
  };

  if (isProductError) return <div>Something went wrong!</div>;
  else if (isProductLoading) return <div>Loading...</div>;
  else
    return (
      <div>
        <h2 className="text-center mt-2">
          {products.length === 0 ? "" : products[0].storehouseName}
        </h2>

        <div>
          <Button
            onClick={handleAddClick}
            className={`${styles["add-button"]}`}
            variant="success"
            disabled={products.length >= singleStorehouse?.storageCapacity}
          >
            Add Product
          </Button>
        </div>

        {products.length === 0 ? (
          <h1 className="mt-4 text-center">No products yet</h1>
        ) : (
          <table className="table align-middle my-4 bg-white">
            <thead className="bg-light">
              <tr className="text-center">
                <th>Name</th>
                <th>Quantity</th>
                <th>Entry Price</th>
                <th>Entry Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            {products.map((product) => (
              <tbody key={product.productName} className="text-center">
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">
                          {product.productName.charAt(0).toUpperCase() +
                            product.productName.slice(1)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{product.quantity}</p>
                  </td>
                  <td>{product.entryPrice} &#36;</td>
                  <td>{product.entryDate}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => handleDelete(product.id)}
                        type="button"
                        className="btn btn-success mx-2 btn-sm btn-rounded"
                      >
                        Delete
                      </button>
                      <NavLink to={`${product.id}`}>
                        <button
                          type="button"
                          className="btn btn-success mx-2 btn-sm btn-rounded"
                        >
                          Update
                        </button>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}

        <ProductModal />
      </div>
    );
};

export default Product;
