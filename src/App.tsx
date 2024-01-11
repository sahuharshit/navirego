// App.tsx
import React from "react";
import CustomCheckbox from "./components/checkbox";

const App: React.FC = () => {
  const NumOfCheckbox = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div>
      {NumOfCheckbox.map((checkboxNumber) => (
        <CustomCheckbox key={checkboxNumber} checkboxNumber={checkboxNumber} />
      ))}
    </div>
  );
};

export default App;
