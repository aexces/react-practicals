import ReactDOM from "react-dom/client";
import App from "@/presentation/core/app";
import { Provider } from "react-redux";
import { store } from "@/application/store";
import { RouterProvider } from "react-router-dom";
import router from "@/presentation/router/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);
