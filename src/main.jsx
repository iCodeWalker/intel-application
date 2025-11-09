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
import WardrobeTexture from "./components/data/wardrobe/wardrobeTexture.jsx";
import OneDoorWardrobe from "./components/data/wardrobe/oneDoorWardrobe.jsx";
import TwoDoorWardrobe from "./components/data/wardrobe/twoDoorWardrobe.jsx";
import ThreeDoorWardrobe from "./components/data/wardrobe/threeDoorWardrobe.jsx";
import FourDoorWardrobe from "./components/data/wardrobe/fourDoorWardrobe.jsx";
import WallTexture from "./components/data/wall/wallTexture.jsx";
import WallColor from "./components/data/wall/wallColor.jsx";
import WallData from "./components/data/wall/wallData.jsx";
import BedTexture from "./components/data/bed/bedTexture.jsx";
import SingleBed from "./components/data/bed/singleBed.js";

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
  {
    path: "/data/wall",
    Component: Layout,
    children: [
      { path: "wall-textures", Component: WallTexture },
      { path: "wall-color", Component: WallColor },
      { path: "wall-data", Component: WallData },
    ],
  },
  {
    path: "/data/bed",
    Component: Layout,
    children: [
      { path: "bed-textures", Component: BedTexture },
      { path: "single-bed", Component: SingleBed },
      { path: "double-bed", Component: TwoDoorWardrobe },
      { path: "king-size-bed", Component: ThreeDoorWardrobe },
      { path: "queen-size-bed", Component: FourDoorWardrobe },
      { path: "poster-bed", Component: FourDoorWardrobe },
      { path: "folding-bed", Component: FourDoorWardrobe },
    ],
  },
  {
    path: "/data/wardrobe",
    Component: Layout,
    children: [
      { path: "wardrobe-textures", Component: WardrobeTexture },
      { path: "one-door-wardrobe", Component: OneDoorWardrobe },
      { path: "two-door-wardrobe", Component: TwoDoorWardrobe },
      { path: "three-door-wardrobe", Component: ThreeDoorWardrobe },
      { path: "four-door-wardrobe", Component: FourDoorWardrobe },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
