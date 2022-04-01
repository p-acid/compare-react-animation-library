import { useState } from "react";

import Drawer from "./components/Drawer/Drawer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <button onClick={handleIsOpen}>Toggle Drawer</button>
      <Drawer isOpen={isOpen} location="right" />
    </div>
  );
};

export default App;
