import { Checkbox } from "antd";
import "../../App.css";
import useCheckbox from "./container";
import { ICheckBox } from "../../libs/interfaces/checkboxInterface";

const CheckboxGroup = ({ checkboxNumber }: ICheckBox) => {
  const { letters, setCheckValue } = useCheckbox(checkboxNumber);

  return (
    <div className="checkbox-container">
      <Checkbox
        value={checkboxNumber}
        onChange={(e) => {
          setCheckValue(e.target.checked);
        }}
      >
        B{checkboxNumber}
      </Checkbox>
      {letters.length !== 0 && (
        <>
          <div className="display-container">
            {letters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default CheckboxGroup;
