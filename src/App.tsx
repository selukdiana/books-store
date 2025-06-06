import { Provider } from "react-redux";
import { HomePage } from "./pages/HomePage";
import { BookPage } from "./pages/BookPage";
import { AuthPage } from "./pages/AuthPage";
import { SearchPage } from "./pages/SearchPage";
import { OrderPage } from "./pages/OrderPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./layout/Layout";
import store from "./store";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/app/:isbn13",
        element: <BookPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      { path: "/:query/:page", element: <SearchPage /> },
      { path: "/order", element: <OrderPage /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
  );
};

export default App;
