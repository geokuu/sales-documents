import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InvoicesPage, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/sales-documents/",
    element: <InvoicesPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
