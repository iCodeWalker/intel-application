// import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

export default function CustomColorPicker({ value, onChangeColor }) {
  // const [color, setColor] = useState(value);

  // useEffect(() => {
  //   if (onChangeColor) onChangeColor(color);
  // }, [color]);

  return (
    <div style={{ maxWidth: "350px", padding: "1px" }}>
      {/* <HexColorPicker color={color} onChange={setColor} /> */}
    </div>
  );
}
