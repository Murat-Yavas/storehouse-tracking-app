import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import StorehousePage from "./pages/StorehousePage";
import ProductPage from "./pages/ProductPage";
import StorehouseFormPage from "./pages/StorehouseFormPage";
import ProductFormPage from "./pages/ProductFormPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },

        {
          path: "/auth",
          element:
            localStorage.getItem("currentUser") !== null ? (
              <Navigate to="/" />
            ) : (
              <AuthPage />
            ),
        },
        { path: "/storehouses", element: <StorehousePage /> },
        { path: "/storehouses/:storehouseId", element: <StorehouseFormPage /> },
        { path: "/storehouses/:id/products", element: <ProductPage /> },
        {
          path: "/storehouses/:id/products/:productId",
          element: <ProductFormPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
