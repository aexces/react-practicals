import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import { Provider } from "react-redux";
import { store } from "@/application/state.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "@/presentation/Router/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);
