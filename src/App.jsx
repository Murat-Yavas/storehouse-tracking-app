import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import StorehousePage from "./pages/StorehousePage";
import ProductPage from "./pages/ProductPage";
import StorehouseFormPage from "./pages/StorehouseFormPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/auth", element: <AuthPage /> },
        { path: "/storehouses", element: <StorehousePage /> },
        { path: "/storehouses/:storehouseId", element: <StorehouseFormPage /> },
        { path: "/storehouses/:id/products", element: <ProductPage /> },
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
