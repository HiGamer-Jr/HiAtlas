import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { metadata } from "./data/content";
import "./styles.css";
const path = location.pathname.replace(/\/$/, "") || "/";
const meta = metadata[path];
if (meta) {
  document.title = meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", meta.description);
}
const element = (
  <React.StrictMode>
    <App path={path} />
  </React.StrictMode>
);
const root = document.getElementById("root")!;
if (root.children.length) hydrateRoot(root, element);
else createRoot(root).render(element);
