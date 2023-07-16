/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import HomeScreen from "./screens/HomeScreen.jsx";
import MainBlogScreen from "./screens/MainBlogScreen.jsx";
import CategoryScreen from "./screens/CategoryScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import ShoppingCartScreen from "./screens/ShoppingCartScreen.jsx";
import BookScreen from "./screens/BookScreen.jsx";
import PortraitScreen from "./screens/PortraitScreen";
import WaterColorsScreen from "./screens/WaterColorsScreen";
import RandomScreen from "./screens/RandomScreen";
import PopAnimeScreen from "./screens/PopAnimeScreen";
import FullbodyScreen from "./screens/FullbodyScreen";
import ExpressionScreen from "./screens/ExpressionScreen";
import PortraitDetailScreen from "./screens/PortraitDetailScreen";
import PopDetailScreen from "./screens/PopDetailScreen";
import FullbodyDetailScreen from "./screens/FullbodyDetailScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/BlogPage" element={<MainBlogScreen />} />
      <Route path="/Shop" element={<CategoryScreen />} />
      <Route path="/Login" element={<LoginScreen />} />
      <Route path="/Cart" element={<ShoppingCartScreen />} />
      <Route path="/Book" element={<BookScreen />} />
      <Route path="/Portraits" element={<PortraitScreen />} />
      <Route path="/Watercolors" element={<WaterColorsScreen />} />
      <Route path="/Random" element={<RandomScreen />} />
      <Route path="/PopAnime" element={<PopAnimeScreen />} />
      <Route path="/Fullbody" element={<FullbodyScreen />} />
      <Route path="/Expression" element={<ExpressionScreen />} />
      <Route path="/product/:id" element={<PortraitDetailScreen />} />
      <Route path="/product/popanime/:id" element={<PopDetailScreen />} />
      <Route path="/fullbody/:id" element={<FullbodyDetailScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
