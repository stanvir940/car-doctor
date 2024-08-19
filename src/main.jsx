import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "boxicons/css/boxicons.min.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
createRoot(document.getElementById("root")).render(
  <div className=" max-w-7xl mx-auto">
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>
);
