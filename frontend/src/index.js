/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
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
import PopDetailScreen from "./screens/PopDetailScreen";
import FullbodyDetailScreen from "./screens/FullbodyDetailScreen";
import PortraitDetailScreen from "./screens/PortraitDetailScreen";
import WaterColorDetailScreen from "./screens/WaterColorsDetailScreen";
import ExpressionDetailScreen from "./screens/ExpressionDetailScreen";
import RandomDetailScreen from "./screens/RandomDetailsScreen";
import PrivacyScreen from "./screens/PrivacyScreen.jsx";
import ServiceScreen from "./screens/ServiceScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";

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
      <Route path="/product/popanime/:id" element={<PopDetailScreen />} />
      <Route path="/product/fullbody/:id" element={<FullbodyDetailScreen />} />
      <Route path="/product/portrait/:id" element={<PortraitDetailScreen />} />
      <Route
        path="/product/watercolors/:id"
        element={<WaterColorDetailScreen />}
      />
      <Route
        path="/product/expression/:id"
        element={<ExpressionDetailScreen />}
      />
      <Route path="/product/random/:id" element={<RandomDetailScreen />} />
      <Route path="/service" element={<ServiceScreen />} />
      <Route path="/privacy" element={<PrivacyScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
