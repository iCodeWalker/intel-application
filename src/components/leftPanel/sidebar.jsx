import { useState } from "react";
import { NavLink } from "react-router";

import "./sidebar.css";

const menuItems = [
  {
    title: "Floor",
    children: [
      { label: "Tile textures", value: "tile-textures" },
      { label: "Tile filling color", value: "tile-filling-color" },
      { label: "Tile pricing", value: "tile-pricing" },
    ],
  },
  {
    title: "Walls",
    children: [
      { label: "Wall textures", value: "wall-textures" },
      { label: "Front wall", value: "front-wall" },
      { label: "Back wall", value: "back-wall" },
      { label: "Left wall", value: "left-wall" },
      { label: "Right wall", value: "right-wall" },
    ],
  },
  {
    title: "Bed",
    children: [
      "Bed textures",
      "Single bed",
      "Double bed",
      "King size bed",
      "Queen size bed",
      "Poster bed",
      "Folding bed",
    ],
  },
  {
    title: "Wardrobe",
    children: [
      { label: "Wardrobe textures", value: "wardrobe-textures" },
      { label: "One door wardrobe", value: "one-door-wardrobe" },
      { label: "Two door wardrobe", value: "two-door-wardrobe" },
      { label: "Three door wardrobe", value: "three-door-wardrobe" },
      { label: "Four door wardrobe", value: "four-door-wardrobe" },
    ],
  },
  {
    title: "Storage",
    children: ["Storage textures"],
  },
  {
    title: "Sofa",
    children: ["Sofa textures"],
  },
  {
    title: "Table",
    children: ["Table textures", "Study table", "Centre table", "Side table"],
  },
  {
    title: "Door",
    children: ["Door textures", "Single door", "Double door"],
  },
  {
    title: "Window",
    children: ["Window textures"],
  },
];

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        {menuItems.map((item, i) => (
          <li key={i}>
            <button
              className={`menu-item ${openIndex === i ? "active" : ""}`}
              onClick={() => toggleItem(i)}
            >
              {item.title}
              {item.children.length > 0 && (
                <span className="arrow">{openIndex === i ? "▼" : "▶"}</span>
              )}
            </button>
            {openIndex === i && item.children.length > 0 && (
              <ul className="submenu">
                {item.children.map((sub, j) => (
                  <NavLink
                    to={`/data/${item.title.toLowerCase()}/${sub.value}`}
                  >
                    <li key={j} className="submenu-item">
                      {sub.label}
                    </li>
                  </NavLink>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
