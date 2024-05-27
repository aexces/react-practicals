import { store } from "@/application/state";
import router from "@/presentation/router/Router";
import App from "@/presentation/core/App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);
