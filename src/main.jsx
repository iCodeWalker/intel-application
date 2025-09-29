import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import TileTexture from "./components/data/floor/tileTexture.jsx";
import TilePricing from "./components/data/floor/tilePricing.jsx";
import TileFillingColor from "./components/data/floor/tileFillingColor.jsx";
import MainPanel from "./components/mainPanel/mainPanel.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/data/floor",
    Component: Layout,
    children: [
      { path: "tile-textures", Component: TileTexture },
      { path: "tile-pricing", Component: TilePricing },
      { path: "tile-filling-color", Component: TileFillingColor },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
