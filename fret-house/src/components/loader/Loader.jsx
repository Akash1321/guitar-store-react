import { RotatingTriangles } from "react-loader-spinner";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <RotatingTriangles />
    </div>
  );
};

export default Loader;
