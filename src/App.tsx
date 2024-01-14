import "./App.css";
import CheckboxGroup from "./components/checkbox";

const App = () => {
  const NumOfCheckbox = [...Array(7).keys()];
  return (
    <div className="app-container">
      {NumOfCheckbox.map((checkboxNumber) => (
        <CheckboxGroup key={checkboxNumber} checkboxNumber={checkboxNumber} />
      ))}
    </div>
  );
};

export default App;
