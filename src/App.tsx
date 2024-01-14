import "./App.css";
import CheckboxGroup from "./components/checkbox";
import Footer from "./libs/common-ui/footer";
import Header from "./libs/common-ui/header";

const App = () => {
  const NumOfCheckbox = [...Array(7).keys()];
  return (
    <div className="app-container">
      <Header />
      <h4 className="subtitle">
        Select any of the checkboxes to display the components
      </h4>
      <div className="child-container">
        {NumOfCheckbox.map((checkboxNumber) => (
          <CheckboxGroup key={checkboxNumber} checkboxNumber={checkboxNumber} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
