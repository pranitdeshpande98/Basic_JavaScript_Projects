import { useState } from "react";

const StarComponent = ({ count = 5 }) => {
  const [value, setValue] = useState(0);
  const [hovervalue, sethovervalue] = useState(0);
  return (
    <div className="container">
      {new Array(count).fill(0).map((_, index) => (
        <span
          key={index}
          className={
            (hovervalue == 0 && index < value) || index < hovervalue
              ? "gold"
              : ""
          }
          onClick={() => setValue(index + 1)}
          onMouseEnter={() => sethovervalue(index + 1)}
          onMouseLeave={() => sethovervalue(0)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};
export default StarComponent;
