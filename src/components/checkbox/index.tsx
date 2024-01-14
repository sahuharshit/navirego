import { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox } from "antd";
import "../../App.css";
interface CheckboxProps {
  checkboxNumber: number;
}

const CustomCheckbox = ({ checkboxNumber }: CheckboxProps) => {
  const [letters, setLetters] = useState<string[]>([]);
  const [checkvalue, setCheckValue] = useState<boolean>(false);
  const url =
    "https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters/";
  useEffect(() => {
    const handleFetch = async () => {
      const res = await axios.get(`${url}${checkboxNumber}`);
      const currentLetters = [...letters];
      if (currentLetters.length >= 30) {
        currentLetters.shift();
      }
      const result = res.data.letter;
      setLetters(() => [...currentLetters, result]);
    };
    let intervalId: NodeJS.Timeout;
    if (checkvalue) {
      intervalId = setInterval(handleFetch, 2000);
    }

    return () => clearInterval(intervalId);
  }, [checkvalue, checkboxNumber, letters]);

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
      {letters.length === 0 ? (
        <></>
      ) : (
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
export default CustomCheckbox;
