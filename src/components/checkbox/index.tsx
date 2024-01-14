import { Checkbox, Space } from "antd";
import "../../App.css";
import useCheckbox from "./container";
import { ICheckBox } from "../../libs/interfaces/checkboxInterface";
import { useEffect } from "react";

const CheckboxGroup = ({ checkboxNumber }: ICheckBox) => {
  const { checkvalue, setCheckValue, fetchData, letters } = useCheckbox();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (checkvalue) {
      intervalId = setInterval(() => fetchData(checkboxNumber), 2000);
    }
    return () => clearInterval(intervalId);
  }, [checkboxNumber, checkvalue, fetchData, letters]);

  return (
    <div className="checkbox-container">
      <Space direction="horizontal" size="middle">
        <Checkbox
          value={checkboxNumber}
          onChange={(e) => {
            setCheckValue(e.target.checked);
          }}
        >
          Box {checkboxNumber}
        </Checkbox>
      </Space>
      {letters.length !== 0 && (
        <div className="display-container">
          {letters.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      )}
    </div>
  );
};
export default CheckboxGroup;
